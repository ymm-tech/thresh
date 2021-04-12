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

import android.util.Log;

import java.util.Locale;

import io.manbang.frontend.thresh.manager.handler.ThreshHandlerManager;

/**
 * thresh logger
 */
public class ThreshLogger {

    /** Default log TAG. * */
    private static String TAG = "ThreshLogger#";

    public static boolean DEBUG = true;

    /**
     * Customize the log tag for your application, so that other apps
     * using Thresh don't mix their logs with yours.
     * <br />
     * Enable the log property for your tag before starting your app:
     * <br />
     */
    public static void setTag(String tag) {
        TAG = tag;
    }
    public static void v(String format, Object... args) {
        ThreshHandlerManager.INSTANCE.reportHandler().log(Log.VERBOSE,TAG,buildMessage(format, args),null);
    }

    public static void d(String format, Object... args) {
        ThreshHandlerManager.INSTANCE.reportHandler().log(Log.DEBUG,TAG,buildMessage(format, args),null);
    }

    public static void e(String format, Object... args) {
        ThreshHandlerManager.INSTANCE.reportHandler().log(Log.ERROR,TAG,buildMessage(format, args),null);
    }

    public static void e(Throwable tr, String format, Object... args) {
        ThreshHandlerManager.INSTANCE.reportHandler().log(Log.ERROR,TAG,buildMessage(format, args),null);
        ThreshHandlerManager.INSTANCE.reportHandler().reportException(buildMessage(format, args),tr);
    }

    /**
     * Formats the caller's provided message and prepends useful info like
     * calling thread ID and method name.
     */
    private static String buildMessage(String format, Object... args) {
        try{
            String msg = (args == null) ? format : String.format(Locale.US, format, args);
            StackTraceElement[] trace = new Throwable().fillInStackTrace().getStackTrace();

            String caller = "<unknown>";
            // Walk up the stack looking for the first caller outside of ThreshLogger.
            // It will be at least two frames up, so start there.
            for (int i = 2; i < trace.length; i++) {
                Class<?> clazz = trace[i].getClass();
                if (!clazz.equals(ThreshLogger.class)) {
                    String callingClass = trace[i].getClassName();
                    callingClass = callingClass.substring(callingClass.lastIndexOf('.') + 1);
                    callingClass = callingClass.substring(callingClass.lastIndexOf('$') + 1);

                    caller = callingClass + "." + trace[i].getMethodName();
                    break;
                }
            }
            return String.format(Locale.US, "[%d] %s: %s",
                                 Thread.currentThread().getId(), caller, msg);
        }catch (Exception e){
            return String.format(Locale.US, "[%d] %s: %s",
                                 Thread.currentThread().getId(), format, args+"");
        }
    }


}
