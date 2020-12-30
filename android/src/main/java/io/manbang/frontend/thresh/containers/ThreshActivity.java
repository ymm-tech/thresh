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
package io.manbang.frontend.thresh.containers;

import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import io.flutter.view.FlutterView;
import io.manbang.frontend.thresh.runtime.ThreshEngine;

/**
 * Thresh Activity container
 */
public abstract class ThreshActivity extends AppCompatActivity {

    private ThreshDelegate mDelegate;
    /**
     * ThreshEngine
     */
    public abstract ThreshEngine getThreshEngine();
    /**
     * register plugin
     */
    public abstract void registerPluginRegistry();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setStatusBarFullTransparent();
        if (!TextUtils.isEmpty(getPageRouter())){
            mDelegate = new ThreshDelegate(this, getPageRouter());
        }else {
            mDelegate = new ThreshDelegate(this, savedInstanceState);
        }
        mDelegate.loadApp();
        registerPluginRegistry();
    }

    public void setStatusBarFullTransparent() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            window.getDecorView().setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setStatusBarColor(Color.TRANSPARENT);
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        }
    }

    @Override
    protected void onStart() {
        super.onStart();
        mDelegate.onStart();
    }

    @Override
    protected void onResume() {
        super.onResume();
        mDelegate.onResume();
        if(getThreshEngine() != null){
            getThreshEngine().onResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        mDelegate.onPause();
        if(getThreshEngine() != null){
            getThreshEngine().onPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        mDelegate.onStop();
    }

    @Override
    protected void onDestroy() {
        if (getThreshEngine() != null){
            getThreshEngine().onDestroy();
        }
        mDelegate.onDestroy();
        super.onDestroy();
    }

    @Override
    public void onBackPressed() {
        if(getThreshEngine() != null){
            getThreshEngine().onBackPressed();
        }
    }

    public FlutterView getThreshRootView(){
        return mDelegate.getThreshRootView();
    }

    /**
     * page launch Options
     */
    public String getPageRouter(){
        return null;
    }

    /**
     * page root view id
     */
    public String getRootId(){
        if (mDelegate == null){
            throw new IllegalStateException("Cannot loadApp while root id is null.");
        }
        return mDelegate.getRootId();
    }
}
