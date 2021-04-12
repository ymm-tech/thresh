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

#import "SettingViewController.h"
#import "ThreshConfig.h"

@interface SettingViewController () <UIScrollViewDelegate, ThreshProtocol>

@property (nonatomic, strong) UIScrollView *scrollview;

@property (nonatomic, strong) UIButton *localBundleBtn;
@property (nonatomic, strong) UIButton *localServerBtn;

@property (nonatomic, strong) UILabel *localLabel;
@property (nonatomic, strong) UISwitch *s;
@property (nonatomic, strong) UILabel *tips;

@property (nonatomic, strong) UILabel *ipLabel;
@property (nonatomic, strong) UITextField *ipTextField;
@property (nonatomic, strong) UILabel *portLabel;
@property (nonatomic, strong) UITextField *portTextField;

@property (nonatomic, assign) NSTimeInterval t;

@property (nonatomic, strong) ThreshConfig *config;
@end

@implementation SettingViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.t = 0;
    self.title = @"Thresh";
    self.config = [ThreshConfig new];
    [self constructViews];
//    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(keyboardWillShow:) name:UIKeyboardWillShowNotification object:nil];
}

- (void)keyboardWillShow:(NSNotification *)notify {
    
    NSValue *v = notify.userInfo[@"UIKeyboardBoundsUserInfoKey"];
    CGRect r = [v CGRectValue];
    
    [UIView animateWithDuration:0.25f animations:^{
        [self.scrollview setContentOffset:CGPointMake(0, r.size.height)];
    }];
}

- (void)constructViews {
    
    CGFloat width = self.view.bounds.size.width;
    CGFloat margin = 25.0f;
    
    _scrollview = [[UIScrollView alloc] initWithFrame:CGRectMake(0, 0, width, self.view.bounds.size.height)];
    _scrollview.contentSize = CGSizeMake(width, self.view.bounds.size.height);
    _scrollview.delegate = self;
    _scrollview.showsVerticalScrollIndicator = YES;
    [self.view addSubview:_scrollview];
    
    _localBundleBtn = [[UIButton alloc] initWithFrame:CGRectMake(margin, margin, width - 2 * margin, 80.0f)];
    _localBundleBtn.backgroundColor = [UIColor orangeColor];
    _localBundleBtn.titleLabel.textColor = [UIColor whiteColor];
    _localBundleBtn.titleLabel.font = [UIFont boldSystemFontOfSize:20.0f];
    [_localBundleBtn setTitle:@"启动本地Bundle" forState:UIControlStateNormal];
    [_localBundleBtn addTarget:self action:@selector(onClickLocalBundleBtn) forControlEvents:UIControlEventTouchUpInside];
    _localBundleBtn.layer.cornerRadius = 5.0f;
    _localBundleBtn.layer.masksToBounds = YES;
    [_scrollview addSubview:_localBundleBtn];
    
    _localServerBtn = [[UIButton alloc] initWithFrame:CGRectMake(margin, _localBundleBtn.frame.origin.y + _localBundleBtn.frame.size.height + margin, width - 2 * margin, 80.0f)];
    _localServerBtn.backgroundColor = [UIColor orangeColor];
    _localServerBtn.titleLabel.textColor = [UIColor whiteColor];
    _localServerBtn.titleLabel.font = [UIFont boldSystemFontOfSize:18.0f];
    _localServerBtn.titleLabel.textAlignment = NSTextAlignmentCenter;
    _localServerBtn.titleLabel.numberOfLines = 2;
    [_localServerBtn setTitle:@"启动调试页面\r\n提示：启动前打开沙盒调试" forState:UIControlStateNormal];
    [_localServerBtn addTarget:self action:@selector(onClickLocalServerBtn) forControlEvents:UIControlEventTouchUpInside];
    _localServerBtn.layer.cornerRadius = 5.0f;
    _localServerBtn.layer.masksToBounds = YES;
    [_scrollview addSubview:_localServerBtn];
    
    _localLabel = [[UILabel alloc] initWithFrame:CGRectMake(margin, _localServerBtn.frame.origin.y + _localServerBtn.frame.size.height + margin, 0, 0)];
    _localLabel.font = [UIFont systemFontOfSize:16.0f];
    _localLabel.text = @"启动沙盒模式调试";
    [_localLabel sizeToFit];
    [_scrollview addSubview:_localLabel];
    
    _s = [[UISwitch alloc] initWithFrame:CGRectMake(width - margin - 50.0f, _localServerBtn.frame.origin.y + _localServerBtn.frame.size.height + margin, 50.0f, 30.0f)];
    [_s addTarget:self action:@selector(switchValueChange) forControlEvents:UIControlEventValueChanged];
    [_scrollview addSubview:_s];
    
    _tips = [[UILabel alloc] initWithFrame:CGRectMake(margin, _localLabel.frame.origin.y + _localLabel.frame.size.height + margin, width - 2 * margin, 0)];
    _tips.font = [UIFont systemFontOfSize:15.0f];
    _tips.numberOfLines = 0;
    _tips.textColor = [UIColor redColor];
    _tips.text = @"调试模式说明：\r\n1、启动JS服务器，端口号默认12345 \r\n2、真机调试默认127.0.0.1地址时需连上电脑的代理或者局域网环境直接输入JS服务器（即电脑）的IP（如192.168.0.106）";
    [_tips sizeToFit];
    [_scrollview addSubview:_tips];
    
    _ipLabel = [[UILabel alloc] initWithFrame:CGRectMake(margin, _tips.frame.origin.y + _tips.frame.size.height + margin, 0, 0)];
    _ipLabel.textColor = [UIColor blackColor];
    _ipLabel.font = [UIFont systemFontOfSize:16.0f];
    _ipLabel.text = @"JS服务器IP";
    [_ipLabel sizeToFit];
    [_scrollview addSubview:_ipLabel];
    
    _ipTextField = [[UITextField alloc] initWithFrame:CGRectMake(width - 200.0f - margin, _tips.frame.origin.y + _tips.frame.size.height + margin, 200.0f, 16.0f)];
    _ipTextField.placeholder = @"请填写ip";
    _ipTextField.textAlignment = NSTextAlignmentRight;
    _ipTextField.textColor = [UIColor blackColor];
    [_scrollview addSubview:_ipTextField];
    
    _portLabel = [[UILabel alloc] initWithFrame:CGRectMake(margin, _ipLabel.frame.origin.y + _ipLabel.frame.size.height + margin, 0, 0)];
    _portLabel.textColor = [UIColor blackColor];
    _portLabel.font = [UIFont systemFontOfSize:16.0f];
    _portLabel.text = @"端口号";
    [_portLabel sizeToFit];
    [_scrollview addSubview:_portLabel];
    
    _portTextField = [[UITextField alloc] initWithFrame:CGRectMake(width - 200.0f - margin, _ipLabel.frame.origin.y + _ipLabel.frame.size.height + margin, 200.0f, 16.0f)];
    _portTextField.placeholder = @"请填写端口号";
    _portTextField.textAlignment = NSTextAlignmentRight;
    _portTextField.textColor = [UIColor blackColor];
    [_scrollview addSubview:_portTextField];
    
    _ipTextField.text = @"127.0.0.1";
    _portTextField.text = @"12345";
}

- (void)onClickLocalBundleBtn {
    
    [[NSUserDefaults standardUserDefaults] setBool:YES forKey:@"local"];
    
    ThreshViewController *vc = [[ThreshViewController alloc] initWithConfig:self.config];
    [self.navigationController pushViewController:vc animated:YES];
}

- (void)onClickLocalServerBtn {
    
    if (_s.isOn) {
        
        [[NSUserDefaults standardUserDefaults] setBool:NO forKey:@"local"];
        
        NSString *addressStr;
        if (_ipTextField.text.length > 0 && _portTextField.text.length > 0) {
            addressStr = [NSString stringWithFormat:@"%@:%@", _ipTextField.text, _portTextField.text];
        } else {
            addressStr = @"";
        }
        
        [[NSUserDefaults standardUserDefaults] setObject:addressStr forKey:@"addressStr"];
        
        ThreshViewController *vc = [[ThreshViewController alloc] initWithConfig:self.config];
        [self.navigationController pushViewController:vc animated:YES];
    } else {
        NSLog(@"请开启沙盒调试");
    }
}

- (void)switchValueChange {
    
    if (_s.isOn) {
        _ipTextField.userInteractionEnabled = NO;
        _portTextField.userInteractionEnabled = NO;
    } else {
        _ipTextField.userInteractionEnabled = YES;
        _portTextField.userInteractionEnabled = YES;
    }
}

- (void)scrollViewDidScroll:(UIScrollView *)scrollView {
    
}

@end
