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

import android.os.Handler;
import android.os.Looper;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;

import io.manbang.frontend.thresh.Thresh;
import io.manbang.frontend.thresh.manager.config.ThreshConfigManager;
import io.manbang.frontend.thresh.util.ThreshLogger;

/**
 * js thread
 */
public class JSThread {

    public static final String THRESH_JS_THREAD = "thresh_js_thread_";

    private boolean runUi;

    private ScheduledExecutorService executorService;

    public JSThread(final String moduleName) {
        runUi = ThreshConfigManager.Companion.config().isJSThreadRunUI();
        executorService = Executors.newSingleThreadScheduledExecutor(new ThreadFactory() {
            @Override
            public Thread newThread(Runnable runnable) {
                return new Thread(runnable, THRESH_JS_THREAD + moduleName + "_" + runnable.hashCode());
            }
        });
        ThreshLogger.v("JSThread : " + moduleName);
    }

    public ScheduledFuture<?> schedule(ThreshJSTask command, long delay) {
        if (runUi) {
            new Handler(Looper.getMainLooper()).postDelayed(command, delay);
            return null;
        } else {
            return executorService.schedule(command, delay, TimeUnit.MILLISECONDS);
        }
    }

    public void execute(ThreshJSTask command) {
        if (runUi) {
            command.run();
        } else {
            executorService.execute(command);
        }
    }

    public abstract static class ThreshJSTask implements Runnable {

        @Override
        public void run() {
            try {
                execute();
            }catch (Exception e) {
                ThreshLogger.e("Exception:" + e);
            }
        }

        public abstract void execute();
    }
}
