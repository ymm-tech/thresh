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
#import <Flutter/Flutter.h>
#import "ThreshProtocol.h"
#import "ThreshLogHandler.h"
#import "ThreshDef.h"

NS_ASSUME_NONNULL_BEGIN

@interface ThreshEngine : NSObject

// 初始化
- (instancetype)initWithConfig:(id<ThreshProtocol>)config flutterEngine:(FlutterEngine *)engine rootId:(NSUInteger)rootId;

// 生命周期传递
- (void)viewWillAppear;

- (void)viewWillDisappear;

// 重新加载JS数据
- (void)reloadJS;
// 刷新页面
- (void)reloadPage;
// 释放
- (void)releaseEngine;

// 事件传递
- (void)sendJSEvent:(id)eventStr complete:(ThreshCompleteBlock)complete;
- (void)sendJSEvent:(id)eventStr args:(NSDictionary *)args complete:(ThreshCompleteBlock)complete;
// 方法调用
- (void)invokeJSMethod:(NSString *)methodStr args:(id)args complete:(ThreshCompleteBlock)complete;

@property (nonatomic, assign) NSUInteger contextId;

@end

NS_ASSUME_NONNULL_END
