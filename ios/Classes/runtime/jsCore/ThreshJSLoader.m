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

#import "ThreshJSLoader.h"
#import <AFNetworking/AFNetworking.h>
#import "ThreshLogHandler.h"

NSString *getRemoteSourceFailNotification = @"GetRemoteSourceFail";
NSString *getRemoteSourceSuccessNotification = @"GetRemoteSourceSuccess";

@implementation ThreshJSLoader

+ (ThreshJSLoader *)sharedLoader {
    
    static ThreshJSLoader *instance;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[ThreshJSLoader alloc] init];
    });
    return instance;
}

- (void)loadJSWithAddress:(NSString *)address response:(ThreshJSLoaderResponse)response {
    
    NSString *jsBundlePath = @"http://127.0.0.1:12345/bundle.js";
    // 是否自定义地址
    if (address && [address isKindOfClass:[NSString class]] && address.length > 0) {
        jsBundlePath = [jsBundlePath stringByReplacingOccurrencesOfString:@"127.0.0.1:12345" withString:address];
    }
    [self _getJSData:jsBundlePath callback:response ?: nil];
}

#pragma mark - private method

- (void)_getJSData:(NSString *)path callback:(ThreshJSLoaderResponse)callback {
    
    AFHTTPSessionManager *manager =[AFHTTPSessionManager manager];
    manager.requestSerializer = [AFHTTPRequestSerializer serializer]; manager.responseSerializer = [AFHTTPResponseSerializer serializer];
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json",@"text/json", @"application/javascript",@"text/html",@"text/plain",nil];
    
    [manager GET:path parameters:nil headers:nil progress:^(NSProgress * _Nonnull downloadProgress) {} success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        ThreshInfo(@"load remote resource success! response: %@", responseObject);
        [[NSNotificationCenter defaultCenter] postNotificationName:getRemoteSourceSuccessNotification object:nil];
        if(callback) {
            callback((NSData *)responseObject, nil);
        }
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        ThreshInfo(@"load remote resource fail!");
        [[NSNotificationCenter defaultCenter] postNotificationName:getRemoteSourceFailNotification object:nil];
        if (callback) {
            callback(nil, error);
        }
    }];
}

@end
