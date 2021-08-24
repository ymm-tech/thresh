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
package io.manbang.frontend.thresh.runtime.jscore.runtime;

import android.text.TextUtils;

import com.eclipsesource.v8.JavaCallback;
import com.eclipsesource.v8.JavaVoidCallback;
import com.eclipsesource.v8.V8;
import com.eclipsesource.v8.V8Object;

import io.manbang.frontend.thresh.runtime.jscore.util.FileUtils;
import io.manbang.frontend.thresh.util.ThreshLogger;

/**
 * js执行器
 */
public abstract class JSExecutor {

    private V8 v8Runtime;

    public JSExecutor() {
        ensureInitV8();
        registerObj();
    }


    public V8 ensureInitV8() {
        try {
            if (v8Runtime == null) {
                v8Runtime = V8.createV8Runtime();
            }
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
        return v8Runtime;
    }


    public void registerObj() {

        try {
            V8Object v8Console = new V8Object(v8Runtime);
            v8Runtime.add("console", v8Console);
            CompatInjectJS jsConsole = new CompatInjectJS();
            v8Console.registerJavaMethod(jsConsole, "log", "log", new Class[]{Object.class});
            v8Console.registerJavaMethod(jsConsole, "group", "group", new Class[]{Object.class});
            v8Console.registerJavaMethod(jsConsole, "groupEnd", "groupEnd",
                                         new Class[]{Object.class});
            v8Console.registerJavaMethod(jsConsole, "groupEnd", "groupEnd", null);
            v8Console.close();
            ThreshLogger.v("[finish]");
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }

    }

    /**
     * @param key
     * @param value
     */
    public void registerGlobalObj(String key,String value) {
        try {
            if (TextUtils.isEmpty(key)){
                return;
            }
            v8Runtime.add(key, value);
            ThreshLogger.v("[finish]");
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
    }

    public void registerJavaMethod(JavaVoidCallback callback, String name) {
        try {
            v8Runtime.registerJavaMethod(callback, name);
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }

    }

    public void registerJavaMethod(JavaCallback callback, String name) {

        try {
            v8Runtime.registerJavaMethod(callback, name);
            ThreshLogger.v(name + "[finish]");
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
    }

    public void registerJavaMethod(Object object, String methodName, String functionName,
                                   Class<?>[] parameterTypes) {
        try {
            v8Runtime.registerJavaMethod(object, methodName, functionName, parameterTypes);
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
    }

    /**
     * 执行js
     */
    public Object executeScript(String script, JSCallback callback) {

        try {
            Object result = v8Runtime.executeScript(script);
            if (callback != null) {
                callback.success(result);
            }
            ThreshLogger.v("[finish]");
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
            if (callback != null) {
                callback.error(-1, e.getMessage(),e.getCause());
            }
        }
        return null;
    }

    /**
     * 执行js方法
     */
    public void executeJSFunction(String funcName, JSCallback callback, Object... params) {

        try {
            Object result = v8Runtime.executeJSFunction(funcName, params);
            if (callback != null) {
                callback.success(result);
            }
            ThreshLogger.v(funcName + "[finish]");
        } catch (Exception e) {
            ThreshLogger.e(e, "executeJSFunction Unhandled exception %s", e.toString());
            if (callback != null) {
                callback.error(-1, e.getMessage(),e.getCause());
            }
        }
    }

    public void close() {
        try {
            if (v8Runtime != null) {
                v8Runtime.release(false);
                v8Runtime = null;
            }
            ThreshLogger.v("[finish]");
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
    }

    public void executeScriptFile(String fileName, JSCallback callback) {
        try {
            String script = FileUtils.getFromFile(fileName);
            if (TextUtils.isEmpty(script)) {
                if (callback != null) {
                    callback.error(-1, "script is null","");
                }
                return;
            }
            Object result = v8Runtime.executeScript(script);
            if (callback != null) {
                callback.success(result);
            }
            ThreshLogger.v("[finish]");
        } catch (Exception e) {
            if (callback != null) {
                callback.error(-1, e.getMessage(),e.getCause());
            }
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
    }

    public V8 runtime(){
        return v8Runtime;
    }
}
