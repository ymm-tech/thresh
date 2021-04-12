/**
* MIT License
*
* Copyright (c) 2021 ManBang Group
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

#import "ThreshJSTimerManager.h"
#import "NSTimer+Thresh.h"

@class ThreshJSTimerInfo;
typedef void(^timerCallback)(NSTimer *timer);

static NSString *const type = @"type";
static NSString *const timerId = @"id";
static NSString *const duration = @"duration";
static NSString *const loop = @"loop";

static NSMutableDictionary<NSString *, NSTimer *> *_timerMap;
static NSMutableDictionary<NSString *, ThreshJSTimerInfo *> *_timerInfoMap;

@interface ThreshJSTimerInfo : NSObject

@property (nonatomic, strong) NSString *timerId;
@property (nonatomic, copy) timerFire fireBlock;
@property (nonatomic, assign) BOOL loop;

@end

@implementation ThreshJSTimerInfo

@end

@implementation ThreshJSTimerManager

+ (void)load {
    _timerMap = @{}.mutableCopy;
    _timerInfoMap = @{}.mutableCopy;
}

+ (void)operateTimer:(NSDictionary *)args block:(nonnull timerFire)block {
    
    NSString *type = args[@"type"];
    NSString *timerId = args[@"id"];
    if (!(type && [type isKindOfClass:[NSString class]] && type.length > 0) ||
        !(timerId && [timerId isKindOfClass:[NSString class]] && timerId.length > 0)) return;
    
    if ([type isEqualToString:@"register"]) {
        
        NSInteger duration = [args[@"duration"] integerValue];
        BOOL loop = [args[@"loop"] boolValue];
        
        timerCallback callback = ^(NSTimer *timer) {
            ThreshJSTimerInfo *timerInfo = [_timerInfoMap objectForKey:timer.description];
            if (!timerInfo.loop) {
                [_timerInfoMap removeObjectForKey:timer.description];
                [timer invalidate];
                [_timerMap removeObjectForKey:timerInfo.timerId];
            }
            timerInfo.fireBlock(timerInfo.timerId);
        };
        NSTimer *timer = [NSTimer thresh_scheduledTimerWithTimeInterval:duration/1000.0f repeats:loop block:callback];
        
        [_timerMap setObject:timer forKey:timerId];
        ThreshJSTimerInfo *timerInfo = [ThreshJSTimerInfo new];
        timerInfo.fireBlock = block;
        timerInfo.timerId = timerId;
        timerInfo.loop = loop;
        [_timerInfoMap setObject:timerInfo forKey:timer.description];
    } else if ([type isEqualToString:@"clear"]) {
        
        NSTimer *timer = [_timerMap objectForKey:timerId];
        if (timer) {
            [_timerInfoMap removeObjectForKey:timer.description];
            [timer invalidate];
            [_timerMap removeObjectForKey:timerId];
        }
    } else {
        
    }
}

@end
