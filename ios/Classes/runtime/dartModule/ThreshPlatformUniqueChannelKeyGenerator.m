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

#import "ThreshPlatformUniqueChannelKeyGenerator.h"

@interface ThreshPlatformUniqueChannelKeyGenerator()
{
	NSString *_channelId;
	NSString *_pageName;
	NSString *_moduleName;
	NSString *_channelName;
}
@property(nonatomic, copy) NSString *timeStampStr;

@end

@implementation ThreshPlatformUniqueChannelKeyGenerator

- (instancetype)initWithPageName:(NSString *)pageName moduleName:(NSString *)moduleName channelName:(NSString *)channelName {
	if (self = [super init]) {
		_pageName = pageName;
		_moduleName = moduleName;
		_channelName = channelName;
	}
	return self;
}

- (NSString *)uniqueChannelID {
	if (!_channelId) {
		if (_pageName.length == 0
			|| _moduleName.length == 0
			|| _channelName.length == 0) {
			return nil;
		}
		if (_timeStampStr.length == 0) {
			_timeStampStr = [self timeStrampStr];
		}
		_channelId = [NSString stringWithFormat:@"%@/%@/%@/%@",_moduleName,_pageName,_channelName,_timeStampStr];
		return _channelId;
	}
	return _channelId;
}

#pragma mark - getter
- (NSString *)timeStrampStr {
	if (!_timeStampStr) {
		NSDate *datenow = [NSDate date];//现在时间
		_timeStampStr = [[NSString stringWithFormat:@"%lld", (long long)([datenow timeIntervalSince1970] * 1000)] copy];
		
	}
	return _timeStampStr;
}

- (NSString *)getChannelName {
	return _channelName;
}

@end
