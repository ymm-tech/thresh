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


#ifndef ThreshDef_h
#define ThreshDef_h

#define TDDebug(...) NSLog(@"%@", [NSString stringWithFormat:@"[D][Thresh] %@", [NSString stringWithFormat:__VA_ARGS__, nil]])
#define TDInfo(...) NSLog(@"%@", [NSString stringWithFormat:@"[I][Thresh] %@", [NSString stringWithFormat:__VA_ARGS__, nil]])
#define TDWarn(...) NSLog(@"%@", [NSString stringWithFormat:@"[W][Thresh] %@", [NSString stringWithFormat:__VA_ARGS__, nil]])
#define TDError(...) NSLog(@"%@", [NSString stringWithFormat:@"[E][Thresh] %@", [NSString stringWithFormat:__VA_ARGS__, nil]])
#define TDFatal(...) NSLog(@"%@", [NSString stringWithFormat:@"[F][Thresh] %@", [NSString stringWithFormat:__VA_ARGS__, nil]])

/*
 js端通信方法名：MethodChannel_Js
 flutter端通信方法名：MethodChannel_Flutter
 
 参数是一个具有 method 和 args 属性的 Map，method是字符串，args是任意类型
 
 如果method=='reload'，则重新加载bundle.js
 如果method=='print'，则在native输出args的值，并把Map完整传输到另一端的MethodChannel中
 如果method为其他值，则只把Map完整传输到另一端
 */

static NSString * const kThreshChannelName = @"thresh";


//threshChannel方法
static NSString * const kChannelFlutterCallJS = @"methodChannel_flutter_call_js";
static NSString * const kChannelJSCallFlutter = @"methodChannel_js_call_flutter";
static NSString * const kChannelFlutterCallNative = @"methodChannel_flutter_call_native";
static NSString * const kChannelJSCallNative = @"methodChannel_js_call_native";
static NSString * const kChannelNativeCallJS = @"methodChannel_native_call_js";
static NSString * const kChannelFireJSEvent = @"methodChannel_fire_js_event";
static NSString * const kChannelTimerOperator = @"methodChannel_timer_operator";
static NSString * const kChannelTimerFire = @"methodChannel_timer_fire";

static NSString * const kChannelMethodName = @"method";
static NSString * const kChannelParams = @"params";

//具体业务方法，走通信方法
static NSString * const kMethodReloadJSBundle = @"reload";
static NSString * const kMethodPageDidLoad = @"pageDidLoad";
static NSString * const kMethodPageDidShow = @"pageDidShow";
static NSString * const kMethodCloseWindow = @"closeWindow";

//以下依赖ThreshBridge js->native
static NSString * const kMethodBridgeRequest = @"bridgeRequest";
static NSString * const kMethodBridgeResponse = @"bridgeResponse";

static NSString * const kFlutterBridgeCallNative = @"callNative";
static NSString * const kInvokePlatformViewMethod = @"invokeNativeViewMethod";

static NSString * const kFlutterPageInActive = @"kFlutterPageInActive";
static NSString * const kFlutterPageResume = @"kFlutterPageResume";
static NSString * const kFlutterPagePause = @"kFlutterPagePause";
static NSString * const kSyncAppLifecycleStateToFlutter = @"AppLifecycleState";

// end

static NSString * const Thresh_WillAppear = @"pageOnShow";
static NSString * const Thresh_WillDisappear = @"pageOnHide";

typedef void (^ThreshBridgeCallBack)(NSDictionary *response);

typedef void (^ThreshCompleteBlock)(NSDictionary *response);

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wgcc-compat"
#pragma clang diagnostic ignored "-Wunused-function"
static BOOL safeRespondsForProtocol(id obj, SEL sel, ...) NS_REQUIRES_NIL_TERMINATION {
    __block BOOL responds = YES;
    NSMutableArray<NSString *> *arr = @[].mutableCopy;

    if (sel) {
        [arr addObject:NSStringFromSelector(sel)];
        va_list args;
        va_start(args, sel);
        while ((sel = va_arg(args, SEL))) {
            NSString *selStr = NSStringFromSelector(sel);
            if (selStr && [selStr isKindOfClass:[NSString class]] && selStr.length > 0) {
                [arr addObject:NSStringFromSelector(sel)];
            } else {
                break;
            }
        }
        va_end(args);
    }

    if (arr.count > 0) {
        __block id tmpObj = obj;
        [arr enumerateObjectsUsingBlock:^(NSString * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
            if (obj.length > 0) {
                if ([tmpObj respondsToSelector:NSSelectorFromString((NSString *)obj)]) {
                    if (idx + 1 == arr.count) { // 如果是最后一个，不需要在调用方法
                        *stop = YES;
                    } else {
                        SEL sel = NSSelectorFromString((NSString *)obj);
                        IMP imp = [tmpObj methodForSelector:sel];
                        id (*func)(id, SEL) = (void *)imp;
                        tmpObj = func(tmpObj, sel);
                    }
                } else {
                    responds = NO;
                    *stop = YES;
                }
            } else {
                responds = NO;
                *stop = YES;
            }
        }];
    } else {
        responds = NO;
    }
    return responds;
}
#pragma clang diagnostic pop

#endif
