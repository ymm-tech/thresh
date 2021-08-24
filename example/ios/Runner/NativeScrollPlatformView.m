//
//  NativeScrollPlatformView.m
//  Runner
//
//  Created by 汤靖咚 on 2021/7/21.
//  Copyright © 2021 The Chromium Authors. All rights reserved.
//

#import "NativeScrollPlatformView.h"
#import <thresh/Thresh.h>
#import "ThreshScrollView.h"

@interface NativeScrollPlatformView () <FlutterPlatformView, ThreshPlatformViewProtocol>

@property (nonatomic, assign) CGRect frame;
@property (nonatomic, assign) int64_t viewId;
@property (nonatomic, strong) id args;

@property (nonatomic, strong) ThreshScrollView *scrollView;

@end

@implementation NativeScrollPlatformView

#pragma mark - ThreshPlatformViewProtocol

- (instancetype)initWithFrame:(CGRect)frame viewIdentifier:(int64_t)viewId arguments:(id _Nullable)args registrar:(nonnull NSObject<FlutterPluginRegistrar> *)registrar {
    if (self = [super init]) {
        _frame = frame;
        _viewId = viewId;
        _args = args;
    }
    return self;
}

#pragma mark - FlutterPlatformView

- (UIView *)view {
    
    return self.scrollView;
}

- (UIScrollView *)scrollView {
    if (!_scrollView) {
        _scrollView = [[ThreshScrollView alloc] init];
        UIImageView *imgView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"scroll_image"]];
        _scrollView.contentSize = CGSizeMake(imgView.frame.size.width, 0);
        [_scrollView addSubview:imgView];
        _scrollView.backgroundColor = [UIColor blueColor];
    }
    return _scrollView;
}

@end

