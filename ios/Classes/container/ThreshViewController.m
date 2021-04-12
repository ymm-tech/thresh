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

#import "ThreshViewController.h"
#import "ThreshDef.h"
#import "ThreshJSLoader.h"

NSString *const needRefeshPageNotification = @"NotifyRefreshPageViewNotification";

@interface ThreshErrorView : UIView <ThreshDefaultViewOptions>

@property (nonatomic, strong) UIImageView *errorView;
@property (nonatomic, strong) UILabel *errorTips;
@property (nonatomic, strong) UIButton *errorBtn;

@property (nonatomic, copy) void(^errorBtnBlock)(void);

@end

@implementation ThreshErrorView
// 刷新
- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        self.backgroundColor = [UIColor whiteColor];
        [self constrcutSubviews];
    }
    return self;
}

- (void)constrcutSubviews {
    self.errorView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"common_error_banner"]];
    [self.errorView setBounds:CGRectMake(0, 0, 165.0f, 165.0f)];
    self.errorView.center = CGPointMake(self.center.x, self.center.y - 80.0f);
    [self addSubview:self.errorView];
    
    self.errorTips = [[UILabel alloc] init];
    self.errorTips.textColor = [UIColor grayColor];
    self.errorTips.font = [UIFont systemFontOfSize:17.0f];
    self.errorTips.textAlignment = NSTextAlignmentCenter;
    self.errorTips.text = @"服务器未启动或者JS异常";
    [self.errorTips setBounds:CGRectMake(0, 0, 250.0f, 25.0f)];
    self.errorTips.center = CGPointMake(self.center.x, self.center.y + 40.0f);
    [self addSubview:self.errorTips];
    
    self.errorBtn = [[UIButton alloc] init];
    self.errorBtn.backgroundColor = [UIColor redColor];
    [self.errorBtn setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [self.errorBtn setTitle:@"刷新" forState:UIControlStateNormal];
    [self.errorBtn setBounds:CGRectMake(0, 0, 100, 40)];
    self.errorBtn.layer.cornerRadius = 5.0f;
    self.errorView.layer.masksToBounds = YES;
    self.errorBtn.center = CGPointMake(self.center.x, self.center.y + 90.0f);
    [self.errorBtn addTarget:self action:@selector(onClickErrorBtn) forControlEvents:UIControlEventTouchUpInside];
    [self addSubview:self.errorBtn];
}

- (void)onClickErrorBtn {
    self.errorBtnBlock();
}

- (void)triggerRetry:(void (^)(void))retry {
    self.errorBtnBlock = retry;
}

@end

@interface FlutterViewController ()
- (void)surfaceUpdated:(BOOL)appeared;
@end

@interface ThreshViewController ()

@property(nonatomic, strong) ThreshEngine *threshEngine;
@property (nonatomic, weak) id<ThreshProtocol> config;
@property (nonatomic, copy) NSString *pageName;
@property (nonatomic, copy) NSString *moduleName;

@property (nonatomic, strong) UIView<ThreshDefaultViewOptions> *errorView;

@end

@implementation ThreshViewController

// 初始化整个环境，包括js、dart
- (instancetype)initWithConfig:(id<ThreshProtocol>)config {
    if(self = [super init]) {
        ThreshInfo(@"init ThreshViewController");
        self.config = config;
        [self exportLifeCycle:ThreshPageInit ext:@{}];
        static NSUInteger rootId = 0;
        rootId++;
        self.threshEngine = [[ThreshEngine alloc] initWithConfig:config flutterEngine:self.engine rootId:rootId];
        [self initialRoute:config contextId:self.threshEngine.contextId];
    }
    return self;
}

- (void)initialRoute:(id<ThreshProtocol>)config contextId:(NSUInteger)contextId {
    
    self.pageName = safeRespondsForProtocol(config, @selector(router), @selector(pageName), nil) ? config.router.pageName : @"errorPage";
    self.moduleName = safeRespondsForProtocol(config, @selector(router), @selector(moduleName), nil) ? config.router.moduleName : @"error";
    NSString *loadUrl = safeRespondsForProtocol(config, @selector(router), @selector(routerString), nil) ? config.router.routerString : @"thresh/test-thresh-page";
    NSString *routeStr = [loadUrl containsString:@"?"] ? [loadUrl stringByAppendingFormat:@"&contextId=%@", @(contextId)] : [loadUrl stringByAppendingFormat:@"?contextId=%@", @(contextId)];
    [self setInitialRoute:routeStr];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    ThreshInfo(@"ThreshViewController viewDidLoad");
#if TARGET_IPHONE_SIMULATOR
	[self.engine ensureSemanticsEnabled];
#endif
    __weak typeof(self) weakSelf = self;
    [self setFlutterViewDidRenderCallback:^{
        [weakSelf exportLifeCycle:ThreshFlutterFirstFrame ext:@{}];
    }];
    self.edgesForExtendedLayout = UIRectEdgeNone;
    
    [self addNotify];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    ThreshInfo(@"---viewWillAppear %@", self.pageName);
    [self.threshEngine viewWillAppear]; // 通知engine页面即将展示，内部会进行切换刷新操作
    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleDefault];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    ThreshInfo(@"---viewDidAppear %@", self.pageName);
	// 当Thresh作为首页时，右滑App页面会卡死，需要>=2
	if (self.navigationController && self.navigationController.viewControllers.count >= 2) {
		self.navigationController.interactivePopGestureRecognizer.enabled = YES;
	} else {
		self.navigationController.interactivePopGestureRecognizer.enabled = NO;
	}
    self.didAppear = YES;
    _didDisappear = NO;
}

- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    ThreshInfo(@"---viewWillDisappear %@", self.pageName);
    [self.threshEngine viewWillDisappear]; // 通知engine页面即将消失
    //Avoid super call intentionally.
    [[UIApplication sharedApplication] sendAction:@selector(resignFirstResponder) to:nil from:nil forEvent:nil];
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
    ThreshInfo(@"---viewDidDisappear %@", self.pageName);
    //Avoid super call intentionally.
    [[[UIApplication sharedApplication] keyWindow] endEditing:YES];
    self.didDisappear = YES;
    _didAppear = NO;
}

#pragma mark - public method

- (void)sendJSEvent:(id)eventStr complete:(ThreshCompleteBlock)complete {
    [self.threshEngine sendJSEvent:eventStr complete:complete];
}

- (void)sendJSEvent:(id)eventStr args:(NSDictionary *)args complete:(ThreshCompleteBlock)complete {
    [self.threshEngine sendJSEvent:eventStr args:args complete:complete];
}

- (void)invokeJSMethod:(NSString *)methodStr args:(id)args complete:(ThreshCompleteBlock)complete {
    [self.threshEngine invokeJSMethod:methodStr args:args complete:complete];
}

#pragma mark - private method

- (void)exportLifeCycle:(ThreshLifeCycle)lifeCycle ext:(NSDictionary *)ext {
    if (safeRespondsForProtocol(self.config, @selector(exporter), @selector(lifeCycle:ext:), nil)) {
        [self.config.exporter lifeCycle:lifeCycle ext:ext];
    }
}

#pragma mark - notification

- (void)addNotify {
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(refreshPage:) name:needRefeshPageNotification object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(getRemoteSourceFail:) name:getRemoteSourceFailNotification object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(getRemoteSourceSuccess:) name:getRemoteSourceSuccessNotification object:nil];
}

- (void)refreshPage:(NSNotification *)notification {
    if (notification.object == self.parentViewController) {
        if (self.threshEngine) {
            [self.threshEngine reloadPage];
        }
    }
}

- (void)getRemoteSourceFail:(NSNotification *)notification {
    // 显示缺省图
    if (!self.errorView) {
        if (safeRespondsForProtocol(self.config, @selector(options), @selector(defaultViewForContainer), nil)) {
            self.errorView = self.config.options.defaultViewForContainer;
            [self.errorView setFrame:self.view.frame];
        } else {
            self.errorView = [[ThreshErrorView alloc] initWithFrame:self.view.frame];
        }
        __weak typeof(self) weakSelf = self;
        if ([self.errorView respondsToSelector:@selector(triggerRetry:)]) {
            [self.errorView triggerRetry:^{
                [weakSelf.threshEngine reloadJS];
            }];
        }
        [self.view addSubview:self.errorView];
    }
}

- (void)getRemoteSourceSuccess:(NSNotification *)notification {
    
    if (self.errorView) {
        [self.errorView removeFromSuperview];
        self.errorView = nil;
    }
}

#pragma mark - reload

- (void)reloadJS {
    [self.threshEngine reloadJS];
}

- (void)reloadPage {
    [self.threshEngine reloadPage];
}

#pragma mark - config

- (UIModalPresentationStyle)modalPresentationStyle {
    return UIModalPresentationFullScreen;
}

- (BOOL)loadDefaultSplashScreenView {
    if (safeRespondsForProtocol(self.config, @selector(options), @selector(needDefaultSplashScreenView), nil)) {
        return self.config.options.needDefaultSplashScreenView;
    }
    return NO;
}

- (UIView *)splashScreenView {
    if (safeRespondsForProtocol(self.config, @selector(options), @selector(splashScreenView), nil)) {
        return self.config.options.splashScreenView;
    }
    return [[UIView alloc] init];
}

- (void)dealloc {
    ThreshInfo(@"ThreshViewController--dealloc\n");
    [self.threshEngine releaseEngine];
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

@end
