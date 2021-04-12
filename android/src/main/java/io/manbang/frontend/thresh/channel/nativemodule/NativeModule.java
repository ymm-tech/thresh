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
package io.manbang.frontend.thresh.channel.nativemodule;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import io.manbang.frontend.thresh.channel.BridgeCallback;
import io.manbang.frontend.thresh.channel.MethodConstants;
import io.manbang.frontend.thresh.runtime.ThreshEngine;
import io.manbang.frontend.thresh.util.ThreshLogger;

/**
 * Process JS or Flutter to call Native bridge capabilities
 */
public abstract class NativeModule  {

    public interface INativeInvoke {
        void invoke(ThreshEngine engine, Map params);
    }

    private final Map<String, List<INativeInvoke>> invokeList;

    public NativeModule(Context context, Handler handler) {

        this.invokeList = new LinkedHashMap<>();
        addInvoke(MethodConstants.BRIDGE_REQUEST,new BridgeRequestInvoke(context,handler,this));
        addInvoke(MethodConstants.RELOAD,new ReportPerformanceInvoke());
        addInvoke(MethodConstants.PRINT,new ReportPerformanceInvoke());
        addInvoke(MethodConstants.PAGE_DID_SHOW,new ReportPerformanceInvoke());
        addInvoke(MethodConstants.CALL_TIMER_OPERATOR,new TimerOperatorInvoke());
    }

    protected void addInvoke(String methodName,INativeInvoke invoke){
        List<INativeInvoke> nativeInvokes = invokeList.get(methodName);
        if(nativeInvokes == null){
            nativeInvokes = new ArrayList<>();
            invokeList.put(methodName,nativeInvokes);
        }
        nativeInvokes.add(invoke);
    }
    
    protected void replaceInvoke(String methodName,INativeInvoke invoke){
        invokeList.remove(methodName);
        List<INativeInvoke> invokes = new ArrayList<>();
        invokes.add(invoke);
        invokeList.put(methodName,invokes);
    }

    public NativeModule(Context context) {
        this(context, new Handler(Looper.getMainLooper()));
    }

    public void dispatchJSCallNativeEvent(final ThreshEngine engine, String eventMethod, final Map params) {
        printInfo(engine, eventMethod, params);

        Set<Map.Entry<String, List<INativeInvoke>>> entries = invokeList.entrySet();
        for (Map.Entry<String, List<INativeInvoke>> entry:entries){
            if(entry.getKey().equals(eventMethod)){
                for (INativeInvoke invoke:entry.getValue()){
                    invoke.invoke(engine,params);
                }
            }
        }

    }

    public abstract void invokeNativeModule(
            String module, String method, Map params, BridgeCallback callback);


    private void printInfo(final ThreshEngine engine, String eventMethod, final Map params) {
        ThreshLogger.v(" dispatch：[start] eventMethod :" + eventMethod);
        if (params == null) {
            ThreshLogger.v("js_engine_js_call_native_null");
        } else {
            ThreshLogger.v("params = " + params);
        }
    }
}
