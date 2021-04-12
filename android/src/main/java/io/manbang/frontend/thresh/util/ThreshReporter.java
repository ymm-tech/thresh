/*
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
package io.manbang.frontend.thresh.util;

import java.util.HashMap;
import java.util.Map;

/**
 * thresh reporter
 */
public class ThreshReporter {

    public static Map monitorPerformance(Map<String,Object> objectMap, long startTime){
        if (objectMap == null){
            return null;
        }
        Map params = new HashMap();
        // 首屏主要接口的网络请求耗时，可能为0
        long networkTime = getTime(objectMap,"networkTime");
        // 页面创建时间戳
        long pageCreateTimestamp = getTime(objectMap,"pageCreateTimestamp");
        // 页面首帧加载完成时间戳
        long pageLoadTimestamp = getTime(objectMap,"pageLoadTimestamp");
        // 页面显示内容时间戳
        long pageShowTimestamp = getTime(objectMap,"pageShowTimestamp");
        // Thresh flutter 端版本号
        String flutterVersion =  objectMap.containsKey("flutterVersion") ? (String)objectMap.get("flutterVersion") : "";
        // Thresh js 端版本号
        String jsVersion =  objectMap.containsKey("jsVersion") ? (String)objectMap.get("jsVersion") : "";
        long currentTime = System.currentTimeMillis();
        long rendTime = pageLoadTimestamp - pageCreateTimestamp;

        ThreshLogger.v("thresh-info :"
                               + " \nflutterVersion =" + flutterVersion
                               + " \njsVersion =" + jsVersion
                               + " \ncurrentRealTime =" + (currentTime - startTime)
                               + " \nall_load_time =" + (pageShowTimestamp - pageCreateTimestamp)
                               + " \nrender_time =" + rendTime
                               + " \nnetwork_time =" + networkTime);

        params.put("currentRealTime",currentTime - startTime);
        params.put("all_load_time",pageShowTimestamp - pageCreateTimestamp);
        params.put("render_time",rendTime);
        params.put("network_time",networkTime);
        params.put("flutterVersion",flutterVersion);
        params.put("jsVersion",jsVersion);
        return params;
    }

    private static long getTime(Map<String,Object> objectMap,String key){

        long cntTime;

        if ( objectMap.get(key) instanceof Integer ){
            cntTime =  objectMap.containsKey(key) ? ((Integer)objectMap.get(key)).intValue(): 0;
        } else if ( objectMap.get(key) instanceof Long ){
            cntTime =  objectMap.containsKey(key) ? ((Long)objectMap.get(key)).longValue(): 0;
        } else {
            cntTime = 0L;
        }
        return cntTime;
    }
}