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
 * ThreshViewController 继承自 FlutterViewController
 *
 * 视图相关设置，同时管理 ThreshEngine 的创建、释放、刷新、视图生命周期等
*/

#import <Flutter/Flutter.h>
#import "ThreshProtocol.h"
#import "ThreshEngine.h"
#import "ThreshLogHandler.h"

NS_ASSUME_NONNULL_BEGIN

extern NSString *const needRefeshPageNotification;

@interface ThreshViewController : FlutterViewController

- (instancetype)initWithConfig:(id<ThreshProtocol>)config;

// 刷新（重置JS环境后再重新加载）
- (void)reloadJS;
// 仅刷新页面
- (void)reloadPage;

// 手动调用JS
// 事件传递
- (void)sendJSEvent:(id)eventStr complete:(ThreshCompleteBlock)complete __attribute__((deprecated("sendJSEvent:args:complete:")));
- (void)sendJSEvent:(id)eventStr args:(NSDictionary *)args complete:(ThreshCompleteBlock)complete;
// 方法调用
- (void)invokeJSMethod:(NSString *)methodStr args:(id)args complete:(ThreshCompleteBlock)complete;

@property (nonatomic, assign) BOOL didDisappear;
@property (nonatomic, assign) BOOL didAppear;

@end

NS_ASSUME_NONNULL_END
