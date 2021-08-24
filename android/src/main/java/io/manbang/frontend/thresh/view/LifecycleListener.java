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
package io.manbang.frontend.thresh.view;

/**
 * * An interface for listener to {@link android.app.Fragment} and {@link android.app.Activity}
 *  * lifecycle events.
 */
public interface LifecycleListener {

    void onCreate();

    /**
     * Callback for when {@link android.app.Fragment#onPause()}} or {@link
     *  android.app.Activity#onPause()} is called.
     */
    void onPause();
    /**
     * Callback for when {@link android.app.Fragment#onResume()}} or {@link
     *  android.app.Activity#onResume()} is called.
     */
    void onResume();
    /**
     * Callback for when {@link android.app.Fragment#onDestroy()}} or {@link
     *  android.app.Activity#onDestroy()} is called.
     */
    void onDestroy();

    /**
     * Callback for when{@link android.app.Activity#onBackPressed()} is called.
     */
    void onBackPressed();

    void onLowMemory();
}
