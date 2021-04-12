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

#import "ThreshJSChannelManager.h"

static NSMutableDictionary *_jsChannelDic;
static NSMutableArray *_loadedModules; // 已装载模块

@implementation ThreshJSChannelManager

+ (ThreshJSChannelManager *)sharedMgr {
    
    static ThreshJSChannelManager *instance;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[ThreshJSChannelManager alloc] init];
        _jsChannelDic = @{}.mutableCopy;
        _loadedModules = @[].mutableCopy;
    });
    return instance;
}

- (BOOL)loadedWithModule:(NSString *)moduleName {
    return [_loadedModules containsObject:moduleName];
}

- (void)haveLoadedWithModule:(NSString *)moduleName {
    @synchronized (self) {
        if (![self loadedWithModule:moduleName]) {
            [_loadedModules addObject:moduleName];
        }
    }
}

- (ThreshJSCoreChannel *)channelWithModule:(NSString *)moduleName {
    
    ThreshJSCoreChannel *channel;
    if (moduleName) {
        
        channel = [_jsChannelDic objectForKey:moduleName];
        if (channel == nil) {
            channel = [ThreshJSCoreChannel new];
            [_jsChannelDic setValue:channel forKey:moduleName];
        }
    } else {
        channel =  [ThreshJSCoreChannel new];
    }
    return channel;
}

- (void)removeChannelWithModule:(NSString *)moduleName {
    
    if ([[_jsChannelDic allKeys] containsObject:moduleName]) {
        [_jsChannelDic removeObjectForKey:moduleName];
    }
}

@end
