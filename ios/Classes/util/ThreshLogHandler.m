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

#import "ThreshLogHandler.h"
#import "ThreshAppDelegate.h"

@implementation ThreshLogHandler

+ (void)log:(ThreshLogLevel)level msg:(NSString *)msg function:(const char *)func {
    
    if ([ThreshAppDelegate sharedInstance].logger) {
        [[ThreshAppDelegate sharedInstance].logger log:level msg:[NSString stringWithFormat:@"[%s] %@", func, msg]];
    } else {
        // 默认走自己的log
        switch (level) {
            case ThreshLogDebug:
                TDDebug(msg);
                break;
            case ThreshLogInfo:
                TDInfo(msg);
                break;
            case ThreshLogWarn:
                TDWarn(msg);
                break;
            case ThreshLogError:
                TDError(msg);
                break;
            case ThreshLogFatal:
                TDFatal(msg);
                break;
            default:
                break;
        }
    }
}

@end
