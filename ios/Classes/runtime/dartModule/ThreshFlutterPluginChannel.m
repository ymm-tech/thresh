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

#import "ThreshFlutterPluginChannel.h"

@implementation ThreshFlutterPluginChannel

static NSMutableDictionary* g_instanceDic;

+ (void)initialize {
    if (self == ThreshFlutterPluginChannel.class) {
        static dispatch_once_t onceToken;
        dispatch_once(&onceToken, ^{
            g_instanceDic = [NSMutableDictionary dictionary];
        });
    }
}

+ (instancetype)pluginWithModel:(ThreshPlatformUniqueChannelKeyGenerator *)model {
    if (model.uniqueChannelID.length == 0) {
        return nil;
    }
    ThreshFlutterPluginChannel* plugin = [g_instanceDic objectForKey:model.uniqueChannelID];
    if (plugin == nil) {
        plugin = [[ThreshFlutterPluginChannel alloc] initWithId:model.uniqueChannelID ChannelName:[model getChannelName]];
        [g_instanceDic setObject:plugin forKey:model.uniqueChannelID];
    }
    return plugin;
}

- (instancetype)initWithId:(NSString*)channelID ChannelName:(NSString *)channelName{
    if (self = [super init]) {
        self.channelID = channelID;
        self.channelName = channelName;
    }
    return self;
}

- (void)removeCurInstance {
    if([[g_instanceDic allKeys] containsObject:self.channelID]) {
        [g_instanceDic removeObjectForKey:self.channelID];
    }
}

- (void)dealloc {
    ThreshInfo(@"ThreshFlutterPluginChannel dealloc");
}

+ (void)registerWithRegistrar:(nonnull NSObject<FlutterPluginRegistrar> *)registrar {
    for (NSString *channelId in g_instanceDic) {
        ThreshFlutterPluginChannel *instance = (ThreshFlutterPluginChannel *)[g_instanceDic objectForKey:channelId];
		if(!instance.channel) {
            FlutterMethodChannel* channel = [FlutterMethodChannel methodChannelWithName:instance.channelName
                                                                        binaryMessenger:[registrar messenger]];
            instance.channel = channel;
			instance.pluginRegistrar = registrar;
            [registrar addMethodCallDelegate:instance channel:channel];
        }
    }
}

- (void)releasePlugin {
    self.delegate = nil;
    self.channel = nil;
    self.pluginRegistrar = nil;
    
	[self removeCurInstance];
}


- (void)handleMethodCall:(FlutterMethodCall*)call result:(FlutterResult)result {
    if(self.delegate) {
        [self.delegate threshFlutterPluginCall:call.method
                                      arguments:call.arguments
                                       complete:^(NSDictionary *response) {
            if(result) {
                result(response);
            }
        }];
    }
}

@end
