
import 'dart:io';

import 'package:device_info/device_info.dart';

class Device {

  static AndroidDeviceInfo androidDeviceInfo;

  static IosDeviceInfo iosDeviceInfo;

  static initDeviceInfo() async {
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
    if(Platform.isAndroid){
      androidDeviceInfo = await deviceInfo.androidInfo;
    }else if(Platform.isIOS){
      iosDeviceInfo = await deviceInfo.iosInfo;
    }
  }

  static bool isAndroidQ(){
    if(Platform.isAndroid && Device.androidDeviceInfo != null && Device.androidDeviceInfo.version != null){
      return Device.androidDeviceInfo.version.sdkInt > 28;
    }
    return false;
  }
}