/*
 * MIT License
 *
 * Copyright (c) 2021 ManBang Group
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

import android.os.Handler;
import android.os.Looper;

import java.util.HashMap;
import java.util.Map;

import io.manbang.frontend.thresh.runtime.ThreshEngine;
import io.manbang.frontend.thresh.util.ThreshLogger;

class TimerOperatorInvoke implements NativeModule.INativeInvoke {

    private static final String TYPE_REGISTER = "register";
    private static final String TYPE_CLEAR = "clear";

    private static class TimerOperatorInvokeProp {
        String type;
        String id;
        long duration;
        boolean looper;

        TimerOperatorInvokeProp(Map paramMap) {
            type = (String) paramMap.get("type");
            id = (String) paramMap.get("id");
            if (paramMap.containsKey("duration")) {
                duration = Long.parseLong(paramMap.get("duration") + "");
            }
            if (paramMap.containsKey("loop")) {
                looper = Boolean.parseBoolean(paramMap.get("loop") + "");
            }
        }
    }

    private final Handler handler = new Handler();
    private final Map<String, Runnable> delayedTaskMap = new HashMap<>();

    @Override
    public void invoke(ThreshEngine engine, Map params) {
        TimerOperatorInvokeProp prop = new TimerOperatorInvokeProp(params);

        if (TYPE_REGISTER.equals(prop.type)) {
            postDelayed(prop.id, prop.duration, prop.looper, new CallBackToJS(prop.id, engine));
        } else if (TYPE_CLEAR.equals(prop.type)) {
            clearTimer(prop.id);
        }
    }

    private void clearTimer(String id) {
        Runnable runnable = delayedTaskMap.get(id);
        if (runnable != null) {
            delayedTaskMap.remove(id);
            handler.removeCallbacks(runnable);
        }
    }

    private void postDelayed(final String id, final long duration, final boolean looper, final CallBackToJS callBackToJS) {
        Runnable task = new Runnable() {
            @Override
            public void run() {
                callBackToJS.notifyToJs();
                if (looper) {
                    handler.postDelayed(this, duration);
                } else {
                    clearTimer(id);
                }
            }
        };
        delayedTaskMap.put(id,task);
        handler.postDelayed(task, duration);
    }

    private static class CallBackToJS {

        private final ThreshEngine engine;
        private final Map<String, String> params;

        CallBackToJS(String id, ThreshEngine engine) {

            this.params = new HashMap<>();
            params.put("id", id);
            this.engine = engine;
        }

        void notifyToJs() {
            new Handler(Looper.getMainLooper()).post(new Runnable() {
                @Override
                public void run() {
                    try {
                        engine.executeJSFunction(engine.getThreshOptions().callNativeTimerFire, null, params);
                    } catch (Exception e) {
                        ThreshLogger.e(e, "Unhandled exception %s", e.toString());
                    }
                }
            });
        }
    }
}
