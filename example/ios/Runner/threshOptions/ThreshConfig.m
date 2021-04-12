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

#import "ThreshConfig.h"

@interface ThreshConfig ()

@property (nonatomic, strong) InfoCollector *infoCollector;
@property (nonatomic, strong) Loader *dataLoader;
@property (nonatomic, strong) NativeBridge *bridge;

@end

@implementation ThreshConfig

- (InfoCollector *)infoCollector {
    if (!_infoCollector) {
        _infoCollector = [InfoCollector new];
    }
    return _infoCollector;
}

- (Loader *)dataLoader {
    if (!_dataLoader) {
        _dataLoader = [Loader new];
    }
    return _dataLoader;
}

- (NativeBridge *)bridge {
    if (!_bridge) {
        _bridge = [NativeBridge new];
    }
    return _bridge;
}

#pragma mark - ThreshProtocol

- (id<ThreshInfoExport>)exporter {
    return [self infoCollector];
}

- (id<ThreshRouterParams>)router {
    return self;
}

- (id<ThreshNativePlatformView>)nativePlatform {
    return self;
}

- (id<ThreshDataLoader>)loader {
    return self.dataLoader;
}

- (id<ThreshNativeBridge>)nativeBridge {
    return [self bridge];
}

#pragma mark - ThreshRouterParams
- (NSString *)pageName {
    return @"thresh-page";
}

- (NSString *)moduleName {
    return @"demo";
}

- (NSString *)routerString {
    return @"thresh/thresh-page";
}

#pragma mark - ThreshNativePlatformView

- (NSDictionary *)platformViewConfig {
    return @{
        @"thresh/native_text_view": @"NativeImagePlatformView"
    };
}

@end
