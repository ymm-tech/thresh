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

#import "ThreshJSCoreChannel.h"
#import "ThreshDef.h"
#import "ThreshJSExecutor.h"
#import "ThreshJSTimerManager.h"

@interface ThreshJSCoreChannel()

@property (nonatomic, strong) NSThread *thread;
@property (atomic, retain) JSContext* context;
@property (atomic, retain) JSVirtualMachine* jsVirtualMachine;
@property (nonatomic, assign) BOOL isLoopRunning;
// js环境是否准备完毕
@property (nonatomic, assign) BOOL envReady;

@property (nonatomic, strong) ThreshJSExecutor *jsExe;

@property (nonatomic, strong) NSMapTable *delegateMap;

@end

@implementation ThreshJSCoreChannel

#pragma mark - lifecycle

- (instancetype)init {
    if(self = [super init]) {
        _delegateMap = [[NSMapTable alloc] initWithKeyOptions:NSPointerFunctionsStrongMemory valueOptions:NSPointerFunctionsWeakMemory capacity:0];
        self.jsExe = [[ThreshJSExecutor alloc] init];
        __weak typeof(self) weakSelf = self;
        self.jsExe.exceptionHandler = ^(NSString *exception) {
            weakSelf.exceptionHandler(exception);
        };
        [self setupChannel];
    }
    return self;
}

- (void)addDelegate:(id<ThreshJSChannelDelegate>)delegate contextId:(NSUInteger)contextId {
    [_delegateMap setObject:delegate forKey:@(contextId)];
}

-(void)dealloc {
    ThreshInfo(@"ThreshJSCoreChannel dealloc");
}

- (void)resetJSChannel {
    __weak typeof(self) weakSelf = self;
    [self.jsExe clearContext:^{
        weakSelf.envReady = NO;
    }];
}

- (void)reuseJSChannel {
    [self.jsExe initContext:^{}];
    [self setupChannel];
}

- (void)releaseJSChannel {
    __weak typeof(self) weakSelf = self;
    [self.jsExe releaseContext:^{
        weakSelf.envReady = NO;
    }];
}

- (void)reloadJS {
    // 刷新js步骤：清空、创建、加载
    __weak typeof(self) weakSelf = self;
    [self.jsExe clearContext:^{
        weakSelf.envReady = NO;
    }];
    [self.jsExe initContext:^{}];
    [self setupChannel];
}

- (void)setGloablVariableWithName:(NSString *)name value:(id)value {
    
    [self.jsExe setGloablVariableWithName:name value:value];
}

- (void)invokeMothod:(NSString *)method complete:(ThreshCompleteBlock)onJsComplete withArguments:(id)arg, ... {
    
    if (method && [method isKindOfClass:[NSString class]] && method.length > 0) {
        
        NSMutableArray *arr = @[].mutableCopy;
        if (arg) {
            [arr addObject:arg];
            va_list args;
            va_start(args, arg);
            while ((arg = va_arg(args, id))) {
                [arr addObject:arg];
            }
            va_end(args);
        } else {
            [arr addObject:@""];
        }
        
        [self.jsExe invokeJSFunction:method arguments:arr response:^(NSDictionary *params, NSError *err) {
            if (onJsComplete) {
                onJsComplete(params);
            }
        }];
    } else {
        ThreshError(@"invokeMethod:args:complete: method is nil");
    }
}

- (void)invokeMothod:(NSString *)method args:(id)args complete:(ThreshCompleteBlock)onJsComplete {
    
    if (method && [method isKindOfClass:[NSString class]] && method.length > 0) {
        [self.jsExe invokeJSFunction:method arguments:@[args] response:^(NSDictionary *params, NSError *err) {
            if (onJsComplete) {
                onJsComplete(params);
            }
        }];
    } else {
        ThreshError(@"invokeMethod:args:complete: method is nil");
    }
}

- (BOOL)envReady {
    return _envReady;
}

- (void)evaluateJS:(NSString *)jsString callback:(void (^)(void))complete {
    
    if (jsString && [jsString isKindOfClass:[NSString class]] && jsString.length > 0) {
        
        __weak typeof(self) weakSelf = self;
        [self.jsExe evaluateScript:jsString complete:^{
            weakSelf.envReady = YES;
            if (complete) {
                complete();
            }
        }];
        ThreshInfo(@"load js complete, dataJSString.length : %lu", (unsigned long)jsString.length);
    } else {
        ThreshError(@"load js app error, js string length 0");
    }
}

#pragma mark - Bridge

- (void)setupChannel {
    
    __weak typeof(self) weakSelf = self;
    [self.jsExe registerMethod:kChannelJSCallFlutter complete:^{} asyncOnCall:^(NSDictionary *args) {
        __strong typeof(weakSelf) strongSelf = weakSelf;
        [strongSelf performSelectorOnMainThread:@selector(jsCallFlutterWithArgs:) withObject:args waitUntilDone:YES];
    }];
    
    [self.jsExe registerMethod:kChannelJSCallNative complete:^{} asyncOnCall:^(NSDictionary *args) {
        __strong typeof(weakSelf) strongSelf = weakSelf;
        [strongSelf performSelectorOnMainThread:@selector(jsCallNativeWithArgs:) withObject:args waitUntilDone:YES];
    }];
    
    [self.jsExe registerMethod:kChannelTimerOperator complete:^{} asyncOnCall:^(NSDictionary *args) {
        __strong typeof(weakSelf) strongSelf = weakSelf;
        [strongSelf performSelectorOnMainThread:@selector(timerOperatorWithArgs:) withObject:args waitUntilDone:YES];
    }];
}

- (void)jsCallNativeWithArgs:(id)arguments {
    
    // 回调给js结果: 通过 methodChannel_native_call_js 传递给JS
    NSDictionary *reqDic = (NSDictionary *)arguments;
    if(reqDic) {
        id<ThreshJSChannelDelegate> obj;
        if ([reqDic.allKeys containsObject:@"contextId"]) {
            obj = [_delegateMap objectForKey:@([reqDic[@"contextId"] integerValue])];
        }
        if (!obj) {
            obj = _delegate;
        }
        __weak typeof(self) weakSelf = self;
        if ([obj respondsToSelector:@selector(jsChannelCallMethod:arguments:complete:)]) {
            [obj jsChannelCallMethod:kChannelJSCallNative arguments:arguments complete:^(NSDictionary *response) {
                __strong typeof(weakSelf) strongSelf = weakSelf;
                // 回调给js结果: 通过 methodChannel_native_call_js 传递给JS
                NSDictionary *reqDic = (NSDictionary *)arguments;
                if(reqDic) {
                    NSMutableDictionary *ret = [NSMutableDictionary new];
                    ret[kChannelMethodName] = kMethodBridgeResponse;
                    NSMutableDictionary *params = [NSMutableDictionary new];
                    NSDictionary *reqParams = [reqDic objectForKey:kChannelParams];
                    params[@"methodId"] = [reqParams objectForKey:@"methodId"];
                    params[@"response"] = response;
                    ret[kChannelParams] = params;
                    if (reqDic[@"contextId"]) {
                        ret[@"contextId"] = reqDic[@"contextId"];
                    }

                    ThreshInfo(@"js call native, callback...arguments: %@, response = %@", arguments, ret);
                    [strongSelf invokeMothod:kChannelNativeCallJS args:ret complete:^(NSDictionary *response) {}];
                } else {
                    ThreshInfo(@"js call native, callback... not dic, arguments %@", arguments);
                }
            }];
        }
    } else {
        ThreshInfo(@"js call native, callback... not dic, arguments %@", arguments);
    }
}

- (void)jsCallFlutterWithArgs:(id)arguments {
    
    NSDictionary *reqDic = (NSDictionary *)arguments;
    if(reqDic) {
        id<ThreshJSChannelDelegate> obj;
        if ([reqDic.allKeys containsObject:@"contextId"]) {
            obj = [_delegateMap objectForKey:@([reqDic[@"contextId"] integerValue])];
        }
        if (!obj) {
            obj = _delegate;
        }
        if ([obj respondsToSelector:@selector(jsChannelCallMethod:arguments:complete:)]) {
            [obj jsChannelCallMethod:kChannelJSCallFlutter arguments:arguments complete:^(NSDictionary *response) {}];
        }
    } else {
        ThreshInfo(@"js call native, callback... not dic, arguments %@", arguments);
    }
}

- (void)timerOperatorWithArgs:(id)arguments {
    
    NSDictionary *reqDic = (NSDictionary *)arguments;
    if(reqDic) {
        ThreshInfo(@"methodChannel_timer_operator method: methodChannel_timer_operator, params :%@", arguments);
        __weak typeof(self) weakSelf = self;
        NSMutableDictionary *argM = [arguments mutableCopy];
        NSString *timerId = argM[@"id"];
        if (!(timerId && [timerId isKindOfClass:[NSString class]] && timerId.length > 0)) return;
        NSString *newId = [NSString stringWithFormat:@"%@#%@", timerId, self];
        [argM setObject:newId forKey:@"id"];
        [ThreshJSTimerManager operateTimer:[argM copy] block:^(NSString * _Nonnull timerId) {
            [weakSelf invokeMothod:kChannelTimerFire args:@{@"id": [[timerId componentsSeparatedByString:@"#"] firstObject]} complete:^(NSDictionary *response) {}];
        }];
    } else {
        ThreshInfo(@"timer operator failed, arguments %@", arguments);
    }
}

@end
