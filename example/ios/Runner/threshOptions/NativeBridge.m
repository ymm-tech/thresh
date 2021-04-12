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

#import "NativeBridge.h"
#import "ThreshConfig.h"

@interface NativeBridge ()
@property (nonatomic, strong) ThreshConfig *config;
@end

@implementation NativeBridge

- (void)performBridge:(NSDictionary *)bridgeInfo callBack:(ThreshBridgeCallBack)callBack {
    if (bridgeInfo[@"method"] && [bridgeInfo[@"method"] isEqualToString:@"closeWindow"]) {
        UIViewController *rvc = [UIApplication sharedApplication].keyWindow.rootViewController;
        [((UINavigationController *)rvc) popViewControllerAnimated:YES];
    } else if (bridgeInfo[@"method"] && [bridgeInfo[@"method"] isEqualToString:@"jsbundlePath"]) {
        NSDictionary *dic = @{
            @"code": @0,
            @"reason": @"bridge success",
            @"data": @{
                    @"reason": @"",
                    @"code": @0,
                    @"data": @"/",
            }
        };
        callBack(dic);
    } else if (bridgeInfo[@"method"] && [bridgeInfo[@"method"] isEqualToString:@"log"]) {
        NSLog(@"%@", bridgeInfo[@"params"][@"content"]);
        callBack(@{});
    } else if (bridgeInfo[@"method"] && [bridgeInfo[@"method"] isEqualToString:@"openSchema"]) {
        UIViewController *rvc = [UIApplication sharedApplication].keyWindow.rootViewController;
        self.config = [ThreshConfig new];
        ThreshViewController *vc = [[ThreshViewController alloc] initWithConfig:self.config];
        [((UINavigationController *)rvc) pushViewController:vc animated:YES];
    }
}

@end
