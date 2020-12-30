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
        long pageDidLoad ;
        if ( objectMap.get("pageDidLoad") instanceof Integer ){
            pageDidLoad =  objectMap.containsKey("pageDidLoad") ? ((Integer)objectMap.get("pageDidLoad")).intValue(): 0;
        } else if ( objectMap.get("pageDidLoad") instanceof Long ){
            pageDidLoad =  objectMap.containsKey("pageDidLoad") ? ((Long)objectMap.get("pageDidLoad")).longValue(): 0;
        } else {
            pageDidLoad = 0L;
        }

        long networkTime ;
        if ( objectMap.get("networkTime") instanceof Integer ){
            networkTime =  objectMap.containsKey("networkTime") ? ((Integer)objectMap.get("networkTime")).intValue(): 0;
        } else if ( objectMap.get("networkTime") instanceof Long ){
            networkTime =  objectMap.containsKey("networkTime") ? ((Long)objectMap.get("networkTime")).longValue(): 0;
        } else {
            networkTime = 0L;
        }
        long pageDidShowTime ;
        if ( objectMap.get("pageDidShowTime") instanceof Integer ){
            pageDidShowTime =  objectMap.containsKey("pageDidShowTime") ? ((Integer)objectMap.get("pageDidShowTime")).intValue(): 0;
        } else if ( objectMap.get("pageDidShowTime") instanceof Long ){
            pageDidShowTime =  objectMap.containsKey("pageDidShowTime") ? ((Long)objectMap.get("pageDidShowTime")).longValue(): 0;
        } else {
            pageDidShowTime = 0L;
        }

        long jsStartTime ;
        if ( objectMap.get("jsStartTime") instanceof Integer ){
            jsStartTime =  objectMap.containsKey("jsStartTime") ? ((Integer)objectMap.get("jsStartTime")).intValue(): 0;
        } else if ( objectMap.get("jsStartTime") instanceof Long ){
            jsStartTime =  objectMap.containsKey("jsStartTime") ? ((Long)objectMap.get("jsStartTime")).longValue(): 0;
        } else {
            jsStartTime = 0L;
        }

        long jsRunAppTime ;
        if ( objectMap.get("jsRunAppTime") instanceof Integer ){
            jsRunAppTime =  objectMap.containsKey("jsRunAppTime") ? ((Integer)objectMap.get("jsRunAppTime")).intValue(): 0;
        } else if ( objectMap.get("jsRunAppTime") instanceof Long ){
            jsRunAppTime =  objectMap.containsKey("jsRunAppTime") ? ((Long)objectMap.get("jsRunAppTime")).longValue(): 0;
        } else {
            jsRunAppTime = 0L;
        }

        long channelFirstSpendTime ;
        if ( objectMap.get("channelFirstSpendTime") instanceof Integer ){
            channelFirstSpendTime =  objectMap.containsKey("channelFirstSpendTime") ? ((Integer)objectMap.get("channelFirstSpendTime")).intValue(): 0;
        } else if ( objectMap.get("channelFirstSpendTime") instanceof Long ){
            channelFirstSpendTime =  objectMap.containsKey("channelFirstSpendTime") ? ((Long)objectMap.get("channelFirstSpendTime")).longValue(): 0;
        } else {
            channelFirstSpendTime = 0L;
        }

        String flutterVersion =  objectMap.containsKey("flutterVersion") ? (String)objectMap.get("flutterVersion") : "";

        String jsVersion =  objectMap.containsKey("jsVersion") ? (String)objectMap.get("jsVersion") : "";
        long currentTime = System.currentTimeMillis();
        long rendTime = pageDidLoad - startTime;

        ThreshLogger.v("thresh-time :"
                               + " \ncurrentRealTime =" + (currentTime - startTime)
                               + " \nall_load_time =" + (rendTime + networkTime)
                               + " \nrender_time =" + rendTime
                               + " \nnetwork_time =" + networkTime
                               + " \njsStartTime =" + (pageDidShowTime - jsStartTime)
                               + " \njsRunAppTime =" + (pageDidShowTime - jsRunAppTime)
                               + " \nchannelFirstSpendTime =" + channelFirstSpendTime);
        params.put("currentRealTime",currentTime - startTime);
        params.put("all_load_time",rendTime + networkTime);
        params.put("render_time",rendTime);
        params.put("network_time",networkTime);
        params.put("jsStartTime",pageDidShowTime - jsStartTime);
        params.put("jsRunAppTime",pageDidShowTime - jsRunAppTime);
        params.put("channelFirstSpendTime",channelFirstSpendTime);
        params.put("flutterVersion",flutterVersion);
        params.put("jsVersion",jsVersion);
        return params;
    }
}
