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

typedef NS_ENUM(NSInteger, ThreshLoadType) {
    LoadWithURL,
    LoadWithCustomized
};

@protocol ThreshDataLoader <NSObject>

@optional
// 加载选项，默认走自定义方式，通过 getJSDataWithModuleName:callback: 获取
- (ThreshLoadType)loadType;
// 通过远程地址加载时可手动传地址，默认本机地址
- (NSString *)serverAddress;
// 选择自定义数据获取方式
- (void)getJSDataWithModuleName:(NSString *)moduleName callback:(void (^)(NSData *data))callback;

@end
