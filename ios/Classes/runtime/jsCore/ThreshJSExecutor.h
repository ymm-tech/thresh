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

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import "ThreshJSCoreDef.h"

@protocol ThreshJSMethodChannelDelegate <NSObject>

- (void)jsCallNativeFromCommonFunctionWithArgs:(NSDictionary *)args;

@end

@interface ThreshJSExecutor : NSObject

@property (nonatomic, weak) id<ThreshJSMethodChannelDelegate> delegate;

@property (copy) void(^exceptionHandler)(NSString *exception);

/**
 * 设置JS侧的全局变量及value
 */
- (void)setGloablVariableWithName:(NSString *)name value:(id)value;

/**
 * 向JS侧注册方法并监听调用
 * methodStr 提供的方法名
 * onCall 当js调用方法时回调，同时接收js侧传过来的数据
 */
- (void)registerMethod:(NSString *)methodStr complete:(ThreshJSCompleteResponse)complete asyncOnCall:(void (^)(NSDictionary *args))onCall;

/**
 * 执行script
 */
- (void)evaluateScript:(NSString *)script complete:(ThreshJSCompleteResponse)complete;

/**
 * 执行js侧已知的方法
 * jsFunction js侧已有的方法名
 * args 入参
 */
- (void)invokeJSFunction:(NSString *)jsFunction arguments:(NSArray *)args response:(ThreshJSInvokeMethodResponse)response;


- (void)initContext:(ThreshJSCompleteResponse)complete;

// 置空js上下文，但是不会释放线程
- (void)clearContext:(ThreshJSCompleteResponse)complete;

/**
 * 手动释放JS环境
 * 《《《 必须由使用方手动调用 》》》
 */
- (void)releaseContext:(ThreshJSCompleteResponse)complete;

@end
