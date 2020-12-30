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
#import "ThreshRouterParams.h"
#import "ThreshNativePlatformView.h"
#import "ThreshOptions.h"
#import "ThreshInfoExport.h"
#import "ThreshDataLoader.h"
#import "ThreshNativeBridge.h"

NS_ASSUME_NONNULL_BEGIN

@protocol ThreshProtocol <NSObject, ThreshRouterParams, ThreshNativePlatformView, ThreshOptions, ThreshInfoExport, ThreshDataLoader, ThreshNativeBridge>

@required
// 页面路由信息
@property (nonatomic, weak) id<ThreshRouterParams> router;
// 数据加载
@property (nonatomic, weak) id<ThreshDataLoader> loader;

@optional
// 向flutter提供native视图
@property (nonatomic, weak) id<ThreshNativePlatformView> nativePlatform;
// 同native通信
@property (nonatomic, weak) id<ThreshNativeBridge> nativeBridge;
// 信息获取
@property (nonatomic, weak) id<ThreshInfoExport> exporter;
// 其他配置
@property (nonatomic, weak) id<ThreshOptions> options;

@end

NS_ASSUME_NONNULL_END
