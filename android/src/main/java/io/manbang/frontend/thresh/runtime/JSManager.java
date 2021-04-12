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
package io.manbang.frontend.thresh.runtime;

import android.text.TextUtils;

import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;

import io.manbang.frontend.thresh.util.ThreshLogger;

/**
 * JSModule instance
 */
public class JSManager {

    private static JSManager manager = new JSManager();

    public static JSManager getInstance() {
        return manager;
    }

    private HashMap<String, JSModule> jsModules;

    private JSManager() {
        jsModules = new HashMap<>();
    }

    /**
     * get js module
     */
    public JSModule getJSModule(String moduleName) {
        if (TextUtils.isEmpty(moduleName)) {
            ThreshLogger.e("Module name is empty exception");
            throw new ThreshException("Module name cannot null.");
        }
        if (jsModules == null) {
            jsModules = new HashMap<>();
        }
        if (jsModules.containsKey(moduleName)
                && jsModules.get(moduleName) != null
                && jsModules.get(moduleName).getExecutor() != null) {
            return jsModules.get(moduleName);
        }
        return null;
    }

    /**
     * register js module
     */
    public void registerJSModule(JSModule module) {
        if (module == null) {
            return;
        }
        if (jsModules == null) {
            jsModules = new HashMap<>();
        }
        jsModules.put(module.getModuleName(), module);
        ThreshLogger.v("register JS Module : " + module.getModuleName() + "[Finish]");
    }

    public void destroy() {

        if (jsModules != null) {
            for (Map.Entry<String, JSModule> module : jsModules.entrySet()) {
                if (module == null || module.getValue() == null) {
                    continue;
                }
                module.getValue().destroy();
            }
        }
    }
}
