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
package io.manbang.frontend.thresh.channel;

import android.text.TextUtils;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 *
 * JS & Bridge Util
 * <LI> Format the bridge parameters of the JS request into the parameters required by the native bridge. </LI>
 * <LI> Format data into response parameters required by JS. </LI>
 */
public class BridgeUtil {

    /**
     *
     * get bridge methodId
     *
     * @param params
     * @return
     */
    public static Object getBridgeMethodId(Map params){
        if (params == null){
            return "-1";
        }
        // Get first-level parameters
        if (params.get(MethodConstants.CALL_PARAMS) != null) {
            // Get methodId 、request
            return ((HashMap) params.get(MethodConstants.CALL_PARAMS)).get("methodId");
        }
        return "-1";
    }
    public static Object getContextId(Map params){
        if (params == null){
            return "-1";
        }
        return params.get("contextId");
    }
    /**
     * Convert the code returned by js bridge into a format request supported by bridge
     *
     * @param params
     * @return
     *
     */
    public static String getMethod(Map params){

        if (params == null){
            return "";
        }
        String method = "";
        // Get first-level parameters
        if (params.get(MethodConstants.CALL_PARAMS) != null){
            //Get methodId, request
            if (((HashMap )params.get(MethodConstants.CALL_PARAMS)).get("request") != null){
                // Get params 、method、module

                try{
                    method = (String)((HashMap )(((HashMap )params.get(
                            MethodConstants.CALL_PARAMS)).get("request"))).get("method");
                }catch (Exception e){
                    e.printStackTrace();

                }
            }
        }

        return method;
    }
    /**
     * js params format native bridge request params
     *
     * @param params
     * @return
     *
     */
    public static Map jsToBridgeRequest(Map params){

        if (params == null){
            return null;
        }
        Map args = new HashMap();
        //
        if (params.get(MethodConstants.CALL_PARAMS) != null){
            //  methodId 、request
            if (((HashMap )params.get(MethodConstants.CALL_PARAMS)).get("request") != null){
                //  params 、method、module
                args.put("module",((HashMap )(((HashMap )params.get(
                        MethodConstants.CALL_PARAMS)).get("request"))).get("module"));
                Object business = ((HashMap )(((HashMap )params.get(
                        MethodConstants.CALL_PARAMS)).get("request"))).get("business");
                if (business != null && business instanceof String && !TextUtils.isEmpty((String)business)){
                    args.put("business",(String)business);
                }
                args.put("method",((HashMap )(((HashMap )params.get(
                        MethodConstants.CALL_PARAMS)).get("request"))).get("method"));
                if (((HashMap )(((HashMap )params.get(MethodConstants.CALL_PARAMS)).get("request"))).get(
                        MethodConstants.CALL_PARAMS) != null){
                    //  url 、method、data
                    Map dataParam = new HashMap();
                    for (Iterator<Map.Entry<String, Object>> iterator = (((HashMap )((HashMap )(((HashMap )params.get(
                            MethodConstants.CALL_PARAMS)).get("request"))).get(MethodConstants.CALL_PARAMS))).entrySet().iterator(); iterator.hasNext(); ) {
                        Map.Entry<String, Object> entry = iterator.next();
                        if (entry.getValue() != null){
                            dataParam.put(entry.getKey(), entry.getValue());
                        }
                    }
                    args.put("params",dataParam);
                }
            }
            return args;
        }

        return null;
    }

    /**
     *
     *
     * format thresh-js need params
     *
     * {
     *   contextId: 'contextId',
     *   method: 'bridgeResponse',
     *   params: {
     *     methodId: 1,
     *     response: {
     *       code: 200,
     *       reason: '',
     *       data: {}
     *     }
     *   }
     * }
     * @return
     */
    public static Map bridgeResponseToJS(Object methodId,Object contextId,Map bridgeResponse){

        if (bridgeResponse == null){
            return null;
        }
        Map args = new HashMap();
        Map params = new HashMap();
        params.put("methodId",methodId);
        params.put("response",bridgeResponse);
        args.put("method", MethodConstants.BRIDGE_RESPONSE);
        args.put("params",params);
        args.put("contextId",contextId != null ? contextId : "");
        return args;
    }

}
