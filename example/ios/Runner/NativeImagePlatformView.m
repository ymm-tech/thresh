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

#import "NativeImagePlatformView.h"
#import <thresh/Thresh.h>

@interface NativeImagePlatformView () <FlutterPlatformView, ThreshPlatformViewProtocol>

@property (nonatomic, assign) CGRect frame;
@property (nonatomic, assign) int64_t viewId;
@property (nonatomic, strong) id args;

@property (nonatomic, strong) UILabel *label;

@end

@implementation NativeImagePlatformView

#pragma mark - ThreshPlatformViewProtocol

- (instancetype)initWithFrame:(CGRect)frame viewIdentifier:(int64_t)viewId arguments:(id _Nullable)args registrar:(nonnull NSObject<FlutterPluginRegistrar> *)registrar {
    if (self = [super init]) {
        _frame = frame;
        _viewId = viewId;
        _args = args;
        
        _label = [[UILabel alloc] init];
        _label.font = [UIFont boldSystemFontOfSize:15.0f];
        _label.textColor = [UIColor purpleColor];
        _label.text = _args[@"text"];
    }
    return self;
}

#pragma mark - FlutterPlatformView

- (UIView *)view {
    
    return _label;
}

@end
