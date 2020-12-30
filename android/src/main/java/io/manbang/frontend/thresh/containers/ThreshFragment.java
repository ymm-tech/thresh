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

import android.os.Bundle;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import io.flutter.view.FlutterView;
import io.manbang.frontend.thresh.runtime.ThreshEngine;

/**
 * Thresh fragment container
 */
public abstract class ThreshFragment extends Fragment {

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
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (!TextUtils.isEmpty(getPageRouter())){
            mDelegate = new ThreshDelegate(getActivity(), getPageRouter());
        }else {
            mDelegate = new ThreshDelegate(getActivity(), savedInstanceState);
        }
        mDelegate.loadApp();
        registerPluginRegistry();
    }

    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        FrameLayout rootView = new FrameLayout(getActivity());
        if (getThreshRootView().getParent() != null) {
            ((ViewGroup)getThreshRootView().getParent()).removeView(getThreshRootView());
        }
        rootView.addView(getThreshRootView(), new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        return rootView;
    }

    @Override
    public void onStart() {
        super.onStart();
        mDelegate.onStart();
    }

    @Override
    public void onResume() {
        super.onResume();
        mDelegate.onResume();
        if(getThreshEngine() != null){
            getThreshEngine().onResume();
        }
    }

    @Override
    public void onPause() {
        super.onPause();
        mDelegate.onPause();
        if(getThreshEngine() != null){
            getThreshEngine().onPause();
        }
    }

    @Override
    public void onStop() {
        super.onStop();
        mDelegate.onStop();
    }

    @Override
    public void onDestroy() {
        if (getThreshEngine() != null){
            getThreshEngine().onDestroy();
        }
        mDelegate.onDestroy();
        super.onDestroy();
    }

    @Override
    public void onDestroyView() {
        if (getThreshRootView() != null && getThreshRootView().getParent() != null) {
            ((ViewGroup)getThreshRootView().getParent()).removeView(getThreshRootView());
        }
        super.onDestroyView();
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
