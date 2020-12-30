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

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.view.View;
import android.view.accessibility.AccessibilityManager;

import java.lang.reflect.Field;

import io.flutter.view.AccessibilityBridge;
import io.flutter.view.FlutterNativeView;
import io.flutter.view.FlutterView;

/**
 * fix FlutterView bug
 */
public class ThreshFlutterView extends FlutterView {

    private AccessibilityManager.AccessibilityStateChangeListener mAccessibilityStateChangeListener;

    public ThreshFlutterView(Context context) {
        super(context);
    }

    public ThreshFlutterView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public ThreshFlutterView(Context context, AttributeSet attrs, FlutterNativeView nativeView) {
        super(context, attrs, nativeView);
    }
    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            try {
                Field accessibilityNodeProviderField = FlutterView.class.getDeclaredField("mAccessibilityNodeProvider");
                accessibilityNodeProviderField.setAccessible(true);
                AccessibilityBridge accessibilityNodeProvider = (AccessibilityBridge) accessibilityNodeProviderField.get(this);
                Field listenerField = AccessibilityBridge.class.getDeclaredField("accessibilityStateChangeListener");
                listenerField.setAccessible(true);
                final AccessibilityManager.AccessibilityStateChangeListener accessibilityStateChangeListener = (AccessibilityManager.AccessibilityStateChangeListener) listenerField.get(accessibilityNodeProvider);
                if (accessibilityStateChangeListener != null) {
                    AccessibilityManager accessibilityManager = (AccessibilityManager) getContext().getSystemService(
                            Activity.ACCESSIBILITY_SERVICE);
                    accessibilityManager.removeAccessibilityStateChangeListener(accessibilityStateChangeListener);
                    mAccessibilityStateChangeListener = new AccessibilityManager.AccessibilityStateChangeListener() {
                        @Override
                        public void onAccessibilityStateChanged(boolean enabled) {
                            try {
                                accessibilityStateChangeListener.onAccessibilityStateChanged(enabled);
                            } catch (Throwable e) {
                                e.printStackTrace();
                            }
                        }
                    };
                    accessibilityManager.addAccessibilityStateChangeListener(mAccessibilityStateChangeListener);
                }
            } catch (Throwable e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            try {
                if (mAccessibilityStateChangeListener != null) {
                    AccessibilityManager accessibilityManager = (AccessibilityManager) getContext().getSystemService(Activity.ACCESSIBILITY_SERVICE);
                    if (accessibilityManager != null){
                        accessibilityManager.removeAccessibilityStateChangeListener(mAccessibilityStateChangeListener);
                    }
                }
            } catch (Throwable e) {
                e.printStackTrace();
            }
        }
    }
    @Override
    public boolean checkInputConnectionProxy(View view) {
        if (view == null) {
            return false;
        }
        if (getFlutterNativeView() == null){
            return false;
        }
        if (getFlutterNativeView().getPluginRegistry() == null){
            return false;
        }
        if (getFlutterNativeView().getPluginRegistry().getPlatformViewsController() == null){
            return false;
        }
        return super.checkInputConnectionProxy(view);
    }

}
