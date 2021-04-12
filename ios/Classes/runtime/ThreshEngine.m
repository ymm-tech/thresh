/**
* MIT License
*
* Copyright (c) 2020 ManBang Group
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/

#import "ThreshEngine.h"
#import "ThreshJSChannelManager.h"
#import "ThreshFlutterPluginChannel.h"
#import "ThreshPlatformViewFactory.h"
#import "ThreshJSChannelManager.h"
#import "ThreshAppDelegate.h"
#import "ThreshJSLoader.h"

static NSMapTable<NSString *, NSHashTable *> *_loadCallbacks; // 装载js回调
static NSMutableDictionary *_viewContextDic;
static NSUInteger contextId = 0;

typedef void(^Callback)(BOOL success);

@interface ThreshEngine () <ThreshJSChannelDelegate, ThreshPluginDelegate>

@property (nonatomic, copy) NSString *pageName;
@property (nonatomic, copy) NSString *moduleName;

@property (nonatomic, weak) id<ThreshProtocol> config;

@property (nonatomic, strong) FlutterEngine *flutterEngine;

@property (nonatomic, strong) ThreshJSCoreChannel *jsCoreChannel;

@property (nonatomic, strong) ThreshPlatformUniqueChannelKeyGenerator *threshGenerator;
@property (nonatomic, strong) ThreshFlutterPluginChannel *flutterThreshChannel;

@property (nonatomic, assign) NSUInteger rootId;

@property (nonatomic, assign) BOOL released;

@end

@implementation ThreshEngine

+ (void)load {
    _viewContextDic = @{}.mutableCopy;
    _loadCallbacks = [[NSMapTable alloc] initWithKeyOptions:NSPointerFunctionsStrongMemory valueOptions:NSPointerFunctionsStrongMemory capacity:1];
}

#pragma mark - init

- (instancetype)initWithConfig:(id<ThreshProtocol>)config flutterEngine:(FlutterEngine *)engine rootId:(NSUInteger)rootId {
    
    if (self = [super init]) {
        self.config = config;
        self.rootId = rootId;
        self.pageName = safeRespondsForProtocol(config, @selector(router), @selector(pageName), nil) ? config.router.pageName : @"errorPage";
        self.moduleName = safeRespondsForProtocol(config, @selector(router), @selector(moduleName), nil) ? config.router.moduleName : @"error";
        
        if (safeRespondsForProtocol(config, @selector(router), @selector(entrypoint), nil)) {
            [engine runWithEntrypoint:config.router.entrypoint];
        }
        
        self.flutterEngine = engine;
        
        ThreshInfo(@"ThreshEngine init, pageName = %@, moduleName = %@", self.pageName, self.moduleName);
        if (engine) {
            [self _registerChannelsWithEngine:engine];
            [self _activateJS];
        } else {
            ThreshWarn(@"ThreshEngine init need Flutter Engine");
        }
    }
    return self;
}

- (void)_registerChannelsWithEngine:(FlutterEngine *)engine {
    
    Class class = NSClassFromString(@"GeneratedPluginRegistrant");
    if (class && [class respondsToSelector:NSSelectorFromString(@"registerWithRegistry:")]) {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-performSelector-leaks"
        [class performSelector:NSSelectorFromString(@"registerWithRegistry:") withObject:self.flutterEngine];
#pragma clang diagnostic pop
    }
    
    self.jsCoreChannel = [[ThreshJSChannelManager sharedMgr] channelWithModule:self.moduleName];
    self.jsCoreChannel.delegate = self;
    __weak typeof(self) weakSelf = self;
    self.jsCoreChannel.exceptionHandler = ^(NSString * _Nonnull exception) {
        [weakSelf exceptionType:ThreshExceptionJS msg:exception];
    };
    
    [self _registerFlutterPlugin:[engine registrarForPlugin:NSStringFromClass([self class])]];
}

- (void)_activateJS {
    
    // 改变 contextId
    _contextId = ++contextId;
    // 将 rootId 同 contextId 绑定
    _viewContextDic[@(self.rootId)] = @(contextId);
    // 将 jscore 回调同 contextId 绑定
    [self.jsCoreChannel addDelegate:self contextId:contextId];
    // 加载bundle包
    if (![[ThreshJSChannelManager sharedMgr] loadedWithModule:self.moduleName]) {
        ThreshInfo(@"Loader: %@ haven't loaded, begin load", self.moduleName);
        __weak typeof(self) weakSelf = self;
        [self _startLoad:^(BOOL success) {
            if (success) {
                [[ThreshJSChannelManager sharedMgr] haveLoadedWithModule:weakSelf.moduleName];
                ThreshInfo(@"Loader: %@ load success", weakSelf.moduleName);
            } else {
                ThreshInfo(@"Loader: %@ load failed", weakSelf.moduleName);
            }
        }];
    } else {
        ThreshInfo(@"Loader: %@ have loaded", self.moduleName);
    }
}

#pragma mark - load js

- (void)_startLoad:(Callback)callback {
    
    // 记录回调
    if ([[_loadCallbacks keyEnumerator].allObjects containsObject:self.moduleName]) {
        ThreshInfo(@"Loader: %@ loading", self.moduleName);
        NSHashTable *t = [_loadCallbacks objectForKey:self.moduleName];
        [t addObject:callback];
    } else {
        ThreshInfo(@"Loader: %@ first load", self.moduleName);
        NSHashTable *t = [[NSHashTable alloc] initWithOptions:NSPointerFunctionsStrongMemory capacity:1];
        [t addObject:callback];
        [_loadCallbacks setObject:t forKey:self.moduleName];
        
        // 开始加载
        __weak typeof(self) weakSelf = self;
        [self _loadAndEvalJS:^(BOOL success) {
            if (success) {
                NSHashTable *t = [_loadCallbacks objectForKey:weakSelf.moduleName];
                [[t objectEnumerator].allObjects enumerateObjectsUsingBlock:^(Callback  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
                    if (obj) {
                        obj(YES);
                    }
                }];
                [_loadCallbacks removeObjectForKey:weakSelf.moduleName];
            }
        }];
    }
}

- (void)_loadAndEvalJS:(void (^)(BOOL success))complete {
    
    dispatch_async(dispatch_get_global_queue(0, 0), ^{
        
        __weak typeof(self) weakSelf = self;
        void (^callback)(NSData *, NSError *) = ^(NSData *response, NSError *err) {
            
            __strong typeof(weakSelf) strongSelf = weakSelf;
            [strongSelf exportLifeCycle:ThreshAfterLoadBundle ext:@{}];
            NSString *dataJSString = [[NSString alloc] initWithData:response encoding:NSUTF8StringEncoding];
            if(dataJSString.length > 0) {
                [strongSelf exportLifeCycle:ThreshBeforeEvalJS ext:@{}];
                [strongSelf.jsCoreChannel evaluateJS:dataJSString callback:^{
                    [strongSelf exportLifeCycle:ThreshAfterEvalJS ext:@{}];
                    complete(YES);
                }];
            } else {
                complete(NO);
                ThreshError(@"load js app error, js string length 0");
            }
        };
        
        [self exportLifeCycle:ThreshBeforeLoadBundle ext:@{}];
        if (safeRespondsForProtocol(self.config, @selector(loader), @selector(loadType), nil) &&
            self.config.loader.loadType == LoadWithURL) {
            [[ThreshJSLoader sharedLoader] loadJSWithAddress:(safeRespondsForProtocol(self.config, @selector(loader), @selector(serverAddress), nil) ? self.config.loader.serverAddress : @"") response:callback];
        } else {
            if (safeRespondsForProtocol(self.config, @selector(loader), @selector(getJSDataWithModuleName:callback:), nil)) {
                [self.config.loader getJSDataWithModuleName:self.moduleName callback:^(NSData *data) {
                    if(callback && data) {
                        callback(data, nil);
                    } else {
                        callback(nil, nil);
                    }
                }];
            } else {
                ThreshWarn(@"need implementation for 'getJSDataWithModuleName:callback:' (at ThreshDataLoader.h)");
            }
        }
    });
}

#pragma mark - flutter plugin
// ThreshPluginDelegate
- (void)threshFlutterPluginCall:(NSString*)method arguments:(id)arguments complete:(ThreshCompleteBlock)callback {
    if ([kChannelFlutterCallJS isEqualToString:method]) {
        ThreshInfo(@"Flutter call MethodChannel_Flutter_call_JS: %@\narguments: %@\n",method, arguments);
        [self _callJS:method arguments:arguments callback:^(NSDictionary *response) {
            if (callback) {
                callback(response);
            }
        }];
    } else if([kChannelFlutterCallNative isEqualToString:method]) {
        [self _callNative:arguments callback:^(NSDictionary *response) {
            ThreshInfo(@"Flutter call MethodChannel_Flutter.method:%@\narguments:%@\nNative response: %@ ", method, arguments, response);
            if (callback) {
                callback(response);
            }
        }];
    } else if ([kFlutterBridgeCallNative isEqualToString:method]) {
        
        if (safeRespondsForProtocol(self.config, @selector(nativeBridge), @selector(performBridge:callBack:), nil)) {
            [self.config.nativeBridge performBridge:arguments callBack:^(NSDictionary *response) {
                if (callback) {
                    callback(response);
                }
            }];
        }
    } else {
        ThreshError(@"flutter call, method channel unrecognized : %@\n arguments:%@", method,arguments);
    }
}

- (void)_registerFlutterPlugin:(NSObject<FlutterPluginRegistrar> *)registrar {
    
    _threshGenerator = [[ThreshPlatformUniqueChannelKeyGenerator alloc] initWithPageName:self.pageName
                                                                       moduleName:self.moduleName
                                                                      channelName:kThreshChannelName];
    self.flutterThreshChannel = [ThreshFlutterPluginChannel pluginWithModel:_threshGenerator];
    self.flutterThreshChannel.delegate = self;
    [ThreshFlutterPluginChannel registerWithRegistrar:registrar];
    
    // 注册自定义nativeView
    if (safeRespondsForProtocol(self.config, @selector(nativePlatform), @selector(platformViewConfig), nil)) {
        NSDictionary *platformViewConfig = self.config.nativePlatform.platformViewConfig;
        NSArray *keys = [platformViewConfig allKeys];
        [keys enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
            if ([obj isKindOfClass:[NSString class]]) {
                NSString *viewId = (NSString *)obj;
                NSString *objClassName = platformViewConfig[viewId];
                [registrar registerViewFactory:[[ThreshPlatformViewFactory alloc] initWithRegistrar:registrar objClassName:objClassName] withId:viewId];
            }
        }];
    }
}

- (void)_callFlutter:(NSString *)methodName arguments:(id _Nullable)arguments callback:(ThreshCompleteBlock)completeBlock {
    [self.flutterThreshChannel.channel invokeMethod:methodName arguments:arguments result:^(id  _Nullable result) {
        [self _handleFlutterResult: result];
    }];
}

- (void)_handleFlutterResult:(id  _Nullable) result {
    if([result isKindOfClass:[FlutterError class]]) {
        FlutterError *flutterErr = (FlutterError *)result;
        if(flutterErr) {
            ThreshError(@"Flutter error code: %@, message: %@", flutterErr.code, flutterErr.message);
        }
    } else if([result isKindOfClass:[NSDictionary class]]) {
        NSDictionary *resultDic = (NSDictionary *)result;
        if(resultDic) {
            ThreshInfo(@"flutter invoke result: %@", resultDic);
        }
    } else {
        if (result) {
            ThreshInfo(@"result class : %@", NSStringFromClass([result class]));
        }
    }
}

- (void)_releaseFlutterChannel {
    if(self.flutterThreshChannel) {
        [self.flutterThreshChannel releasePlugin];
        self.flutterThreshChannel = nil;
     }
}

#pragma mark - js channel
// ThreshJSChannelDelegate
- (void)jsChannelCallMethod:(NSString *)method arguments:(id)arguments complete:(ThreshCompleteBlock)callback {
    
    if ([kChannelJSCallFlutter isEqualToString:method]) {
        ThreshInfo(@"methodChannel_js_call_flutter method: %@, params :%@", method, arguments);
        [self _callFlutter:method arguments:arguments callback:^(NSDictionary *response) {}];
    } else if([kChannelJSCallNative isEqualToString:method]) {
        ThreshInfo(@"methodChannel_js_call_native method: %@, params :%@", method, arguments);
        [self _callNative:arguments callback:^(NSDictionary *response) {
            if(callback && response) {
                callback(response);
            }
        }];
    } else {
        ThreshError(@"js channel call native, method channel unrecognized : %@, arguments:%@", method,arguments);
    }
}

- (void)_callJS:(NSString *)methodName arguments:(id _Nullable)arguments callback:(ThreshCompleteBlock)completeBlock {
    [self.jsCoreChannel invokeMothod:methodName args:arguments complete:^(NSDictionary *resultDic) {
        if(resultDic) {
            ThreshInfo(@"flutter invoke methodName: %@ \narguments:%@ \nresult: %@", methodName, arguments, resultDic);
            if (completeBlock) {
                completeBlock(resultDic);
            }
        }
    }];
}

- (void)_releaseJSChannel {
    
    if (self.jsCoreChannel) {
        [self _destroyJSEnv];
        [_viewContextDic removeObjectForKey:@(self.rootId)];
    }
}

// 通知js侧销毁对应的实例
- (void)_destroyJSEnv {
    dispatch_semaphore_t s = dispatch_semaphore_create(0);
    NSMutableDictionary *params = @{@"method": @"onDestroyed"}.mutableCopy;
    if (_viewContextDic[@(self.rootId)]) {
        [params setObject:[NSString stringWithFormat:@"%@", _viewContextDic[@(self.rootId)]] forKey:@"contextId"];
    }
    [self.jsCoreChannel invokeMothod:kChannelNativeCallJS args:params complete:^(NSDictionary *response) {}];
    dispatch_semaphore_wait(s, dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.03 * NSEC_PER_SEC)));
}

#pragma mark - native bridge

- (void)_callNative:(id)arguments callback:(ThreshCompleteBlock)callback {
    
    NSDictionary *dic = (NSDictionary *)arguments;
    if(dic) {
        
        NSString *method = [dic objectForKey:kChannelMethodName];

        if([kMethodReloadJSBundle isEqualToString:method]) {
            //触发js reload
            [self reloadJS];
        } else if([kMethodBridgeRequest isEqualToString:method]){
            //js调用bridge
            NSDictionary *params = [dic objectForKey:kChannelParams];
            ThreshInfo(@"bridgeRequest params :%@", params);
            if(params) {
                NSDictionary *request = params[@"request"];
                if ([request isKindOfClass:[NSDictionary class]] && [request[@"method"] isEqualToString:kMethodCloseWindow]) {
                    [self releaseEngine];
                }
                if (safeRespondsForProtocol(self.config, @selector(nativeBridge), @selector(performBridge:callBack:), nil)) {
                    [self.config.nativeBridge performBridge:request callBack:^(NSDictionary *response) {
                        if(callback && response) {
                            callback(response);
                        }
                    }];
                }
            }
            else {
                ThreshError(@"params is nil");
            }
        } else if([kMethodPageDidLoad isEqualToString:method]
                  ||[kMethodPageDidShow isEqualToString:method]) {
            NSDictionary *params = [arguments isKindOfClass:[NSDictionary class]] ? arguments[kChannelParams] : nil;
            [self exportLifeCycle:ThreshPageDidShow ext:params];
            if ([kMethodPageDidShow isEqualToString:method]) {
                // 如果Thresh异常，用户触发刷新还会走pageDidShow方法，导致脏数据，置为nil，则不会产生新的时间埋点
            }
        } else if ([method isEqualToString:kFlutterBridgeCallNative]) {
            if (safeRespondsForProtocol(self.config, @selector(nativeBridge), @selector(performBridge:callBack:), nil)) {
                [self.config.nativeBridge performBridge:arguments[@"params"] callBack:^(NSDictionary *response) {
                    if(callback && response) {
                        callback(response);
                    }
                }];
            }
        } else if ([method isEqualToString:kInvokePlatformViewMethod]) {
            if (safeRespondsForProtocol(self.config, @selector(nativePlatform), @selector(invokeInstanceMethodWithArgs:), nil)) {
                [self.config.nativePlatform invokeInstanceMethodWithArgs:arguments[@"params"]];
            }
        } else {
            ThreshError(@"unknown method !!!! %@", method);
        }
    } else {
        ThreshError(@"call native, trans to dic error, arguments:%@", arguments);
    }
}

#pragma mark - public method

- (void)viewWillAppear {
    if (self.jsCoreChannel && [self.jsCoreChannel envReady]) {
        [self sendJSEvent:@"pageOnShow" complete:^(NSDictionary *response) {}];
    }
}

- (void)viewWillDisappear {
    if (self.jsCoreChannel && [self.jsCoreChannel envReady]) {
        [self sendJSEvent:@"pageOnHide" complete:^(NSDictionary *response) {}];
    }
}

- (void)reloadJS {
    if (self.jsCoreChannel && [self.jsCoreChannel envReady]) {
        // 清空之前的context 并重新创建
        [self.jsCoreChannel reloadJS];
        // 加载
        [self _startLoad:^(BOOL success) {}];
    }
}

- (void)reloadPage {
    if (self.jsCoreChannel && [self.jsCoreChannel envReady]) {
        // pageOnShow时，JS侧会进行页面数据刷新，起到刷新页面的功能
        [self sendJSEvent:@"pageOnShow" complete:^(NSDictionary *response) {}];
    }
}

- (void)sendJSEvent:(id)eventStr complete:(ThreshCompleteBlock)complete {
    
    NSString *contextId = @"";
    if (_viewContextDic[@(self.rootId)]) {
        contextId = [NSString stringWithFormat:@"%@", _viewContextDic[@(self.rootId)]];
        [self.jsCoreChannel invokeMothod:kChannelFireJSEvent complete:complete withArguments:eventStr, contextId, nil];
    }
}

- (void)sendJSEvent:(id)eventStr args:(NSDictionary *)args complete:(ThreshCompleteBlock)complete {
    NSString *contextId = @"";
    if (_viewContextDic[@(self.rootId)]) {
        contextId = [NSString stringWithFormat:@"%@", _viewContextDic[@(self.rootId)]];
        [self.jsCoreChannel invokeMothod:kChannelFireJSEvent complete:complete withArguments:eventStr, contextId, args, nil];
    }
}

- (void)invokeJSMethod:(NSString *)methodStr args:(id)args complete:(ThreshCompleteBlock)complete {
    [self.jsCoreChannel invokeMothod:methodStr args:args complete:complete];
}

- (void)releaseEngine {
    // 此处只会释放一次，需要添加标识
    if (!self.released) {
        self.released = YES;
        [self _releaseJSChannel];
        [self _releaseFlutterChannel];
    }
}

#pragma mark - private method

- (void)exportLifeCycle:(ThreshLifeCycle)lifeCycle ext:(NSDictionary *)ext {
    if (safeRespondsForProtocol(self.config, @selector(exporter), @selector(lifeCycle:ext:), nil)) {
        [self.config.exporter lifeCycle:lifeCycle ext:ext];
    }
}

- (void)exceptionType:(ThreshExceptionType)exceptionType msg:(NSString *)msg {
    if (safeRespondsForProtocol(self.config, @selector(exporter), @selector(exceptionType:msg:), nil)) {
        [self.config.exporter exceptionType:exceptionType msg:msg];
    }
}

- (void)dealloc {
    ThreshInfo(@"ThreshEngine dealloc, pageName = %@, moduleName = %@", self.pageName, self.moduleName);
}

@end
