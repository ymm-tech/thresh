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

#import "ThreshJSExecutor.h"
#import "ThreshLogHandler.h"

@interface ThreshJSExecutor ()

@property (nonatomic, strong) NSThread *jsExecuteThread;

@property (nonatomic, strong) JSContext *context;
@property (nonatomic, strong) JSVirtualMachine *virtualMachine;

@property (nonatomic, assign) BOOL keepRunning;

@end

@implementation ThreshJSExecutor

- (instancetype)init {
    if (self = [super init]) {
        // 初始化context
        [self initContext:^{}];
    }
    return self;
}

- (void)initContext:(ThreshJSCompleteResponse)complete {
    
    _keepRunning = YES;
    [self _executeOnJSExecuteThread:^{
        ThreshInfo(@"ThreshJSExecutor: init context");
        self.context = [[JSContext alloc] initWithVirtualMachine:self.virtualMachine];
        __weak typeof(self) weakSelf = self;
        self.context.exceptionHandler = ^(JSContext *context, JSValue *exception) {
            weakSelf.exceptionHandler(exception.description);
        };
        // 添加环境变量
        [self _registerEnvVars];
        // js call native
        [self _setupJSCallNative];
        if (complete) {
            complete();
        }
    }];
}

- (void)_registerEnvVars {
    
    JSValue * jsObj = self.context.globalObject;
    jsObj[@"Platform"] = @"iOS";
    jsObj[@"global"] = @{};
    jsObj[@"setTimeout"] = ^(JSValue *jsvalue) {};
    jsObj[@"setInterval"] = ^(JSValue *jsvalue) {};
    jsObj[@"clearTimeout"] = ^(JSValue *jsvalue) {};
    jsObj[@"clearInterval"] = ^(JSValue *jsvalue) {};
}

- (void)_setupJSCallNative {
    
    __weak typeof(self) weakSelf = self;
    void (^callback)(JSValue *) = ^(JSValue *value) {
        __strong typeof(weakSelf) strongSelf = weakSelf;
        NSDictionary *dic = [value toDictionary];
        if(dic) {
            ThreshInfo(@"ThreshJSExecutor: ThreshJSCallNativeCommonFunction called");
            [strongSelf _executeOnMainThreadSync:^{
                [strongSelf _JSCallNativeWithArgs:dic];
            }];
        } else {
            ThreshInfo(@"ThreshJSExecutor: JS Call Native JSValue not dictionary");
        }
    };
    [self.context setObject:callback forKeyedSubscript:@"ThreshJSCallNativeCommonFunction"];
}

- (void)_JSCallNativeWithArgs:(NSDictionary *)args {
    // js调用native
    if (args && [args isKindOfClass:[NSDictionary class]] && args.count > 0) {
        // 向外抛事件
        if ([self.delegate respondsToSelector:@selector(jsCallNativeFromCommonFunctionWithArgs:)]) {
            [self.delegate jsCallNativeFromCommonFunctionWithArgs:args];
        }
    }
}

- (void)setGloablVariableWithName:(NSString *)name value:(id)value {
    [self _executeOnJSExecuteThread:^{
        if (name && [name isKindOfClass:[NSString class]] && name.length > 0 && value) {
            [self.context setObject:value forKeyedSubscript:name];
        }
    }];
}

// 向js侧注入方法，供js侧调用
- (void)registerMethod:(NSString *)methodStr complete:(ThreshJSCompleteResponse)complete asyncOnCall:(void (^)(NSDictionary *))onCall {
    
    [self _executeOnJSExecuteThread:^{
        void (^callback)(JSValue *) = ^(JSValue *value) {
            NSDictionary *dic = [value toDictionary];
            onCall(dic);
        };
        [self.context setObject:callback forKeyedSubscript:methodStr];
        if (complete) {
            complete();
        }
    }];
}

// 执行script
- (void)evaluateScript:(NSString *)script complete:(ThreshJSCompleteResponse)complete {
    
    [self _executeOnJSExecuteThread:^{
        [self.context evaluateScript:script];
        if (complete) {
            complete();
        }
    }];
}

// 直接调用js内已知方法
- (void)invokeJSFunction:(NSString *)jsFunction arguments:(NSArray *)args response:(ThreshJSInvokeMethodResponse)response {
    
    [self _executeOnJSExecuteThread:^{
        ThreshInfo(@"ThreshJSExecutor: invoke %@, args %@", jsFunction, args);
        JSValue *value = [self.context objectForKeyedSubscript:jsFunction];
        JSValue *result = [value callWithArguments:args];
        if ([result isUndefined]) {
            if (response) {
                response(nil, nil);
            }
        } else if([result isObject]) {
            NSDictionary *resultDic = [result toDictionary];
            if(resultDic && response) {
                response(resultDic, nil);
            }
        }
    }];
}

- (void)dealloc {
    
    ThreshInfo(@"ThreshJSExecutor dealloc");
}

- (void)releaseContext:(ThreshJSCompleteResponse)complete {
    
    [self _executeOnJSExecuteThread:^{
        ThreshInfo(@"ThreshJSExecutor: releaseContext");
        self.context = nil;
        self.virtualMachine = nil;
        [self _stopJSExecuteThread];
        if (complete) {
            complete();
        }
    }];
}

- (void)clearContext:(ThreshJSCompleteResponse)complete {
    
    [self _executeOnJSExecuteThread:^{
        ThreshInfo(@"ThreshJSExecutor: clearContext");
        self.context = nil;
        self.virtualMachine = nil;
        if (complete) {
            complete();
        }
    }];
}

#pragma mark - 执行线程
- (void)_executeOnMainThreadAsync:(dispatch_block_t)block {
    
    if ([NSThread isMainThread]) {
        block();
    } else {
        dispatch_async(dispatch_get_main_queue(), block);
    }
}

- (void)_executeOnMainThreadSync:(dispatch_block_t)block {
    
    if ([NSThread isMainThread]) {
        block();
    } else {
        dispatch_sync(dispatch_get_main_queue(), block);
    }
}

- (void)_executeOnJSExecuteThread:(dispatch_block_t)block {
    
    if ([NSThread currentThread] != self.jsExecuteThread ) {
        [self performSelector:@selector(_executeOnJSExecuteThread:) onThread:self.jsExecuteThread withObject:block waitUntilDone:NO];
    } else {
        block();
    }
}

#pragma mark - 启动线程
- (NSThread *)jsExecuteThread {
    
    if (!_jsExecuteThread) {
        _jsExecuteThread = [[NSThread alloc] initWithTarget:self selector:@selector(_jsExecuteThreadEntryPoint) object:nil];
        [_jsExecuteThread start];
    }
    return _jsExecuteThread;
}

- (void)_jsExecuteThreadEntryPoint {
    
    @autoreleasepool {
        NSRunLoop *runloop = [NSRunLoop currentRunLoop];
        [runloop addPort:[NSMachPort port] forMode:NSDefaultRunLoopMode];
        while (self.keepRunning && [runloop runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]]);
    }
}

#pragma mark - 停止线程
- (void)_stopJSExecuteThread {
    
    self.keepRunning = NO;
    CFRunLoopStop(CFRunLoopGetCurrent());
}

#pragma mark - lazy
- (JSVirtualMachine *)virtualMachine {
    
    if (!_virtualMachine) {
        _virtualMachine = [[JSVirtualMachine alloc] init];
    }
    return _virtualMachine;
}
@end
