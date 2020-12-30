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

/**
 * ThreshJSCoreChannel 是专门来管理 JSCore 的类
 * 创建并管理 JSContext，处理 Native 和 JS 侧的通信
 * 同时加载 JS 文件
 */

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import "ThreshDef.h"
#import "ThreshProtocol.h"
#import "ThreshLogHandler.h"

NS_ASSUME_NONNULL_BEGIN

@protocol ThreshJSChannelDelegate <NSObject>

- (void)jsChannelCallMethod:(NSString*)method arguments:(id)arguments complete:(ThreshCompleteBlock)callback;

@end


@interface ThreshJSCoreChannel : NSObject

@property (nonatomic, weak) id<ThreshJSChannelDelegate> delegate;

@property (copy) void(^exceptionHandler)(NSString *exception);

- (void)addDelegate:(id<ThreshJSChannelDelegate>)delegate contextId:(NSUInteger)contextId;

- (void)setGloablVariableWithName:(NSString *)name value:(id)value;

- (void)evaluateJS:(NSString *)jsString callback:(void (^)(void))complete;

- (void)reloadJS;

- (void)invokeMothod:(NSString *)method complete:(ThreshCompleteBlock)onJsComplete withArguments:(id)arg, ... NS_REQUIRES_NIL_TERMINATION;

- (void)invokeMothod:(NSString *)method args:(id)args complete:(ThreshCompleteBlock)onJsComplete;

- (BOOL)envReady;

- (void)resetJSChannel;

- (void)reuseJSChannel;

- (void)releaseJSChannel;

@end

NS_ASSUME_NONNULL_END
