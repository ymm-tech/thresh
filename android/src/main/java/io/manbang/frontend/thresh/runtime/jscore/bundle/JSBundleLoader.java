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
package io.manbang.frontend.thresh.runtime.jscore.bundle;

import android.content.Context;
import android.content.res.AssetManager;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.text.TextUtils;

import java.io.IOException;

import io.manbang.frontend.thresh.runtime.jscore.runtime.JSExecutor;
import io.manbang.frontend.thresh.runtime.jscore.util.FileUtils;
import io.manbang.frontend.thresh.util.ThreshLogger;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.http.GET;

/**
 * js bundle loader
 */
public abstract class JSBundleLoader implements JSBundleLoaderDelegate {

    public Context context;

    public Handler mainHandler;

    public JSBundleLoader(Context context) {
        this(context,new Handler(Looper.getMainLooper()));
    }

    public JSBundleLoader(Context context,Handler handler) {
        this.context = context;
        this.mainHandler = handler;
    }

    /** Loads the script */
    public abstract void loadScript(JSExecutor executor, BundleOptions bundleOptions, BundleCallback callback);

    @Override
    public void loadScriptFromAssets(JSExecutor executor,AssetManager assetManager, String bundlePath,String bundleName, BundleCallback callback) {
        try {
            long startTime = SystemClock.elapsedRealtime();
            String fileName = TextUtils.isEmpty(bundlePath) ? bundleName : bundlePath + "/" + bundleName;
            String script = FileUtils.getFromAssets(assetManager, fileName);
            long endTime = SystemClock.elapsedRealtime();
            if (script == null || TextUtils.isEmpty(script)){
                if (callback != null){
                    callback.onResult(-1,"read js error","");
                }
                return;
            }
            if (executor != null){
                executor.executeScript(script, null);
            }
            long jsEndTime = SystemClock.elapsedRealtime();
            ThreshLogger.v("bundle size：" + script.length()/1024 + "kb \n" +
                                   "readJSTime：" + (endTime - startTime) + "ms \n" +
                                   "LoadJSTime：" + (jsEndTime - endTime) + "ms ", 0) ;
            if (callback != null){
                callback.onResult(0,"load js success",script);
            }
        } catch (Exception e) {
            if (callback != null){
                callback.onResult(-1,"server not run or error","");
            }
        }
    }

    @Override
    public void loadScriptFromFile(JSExecutor executor,String bundlePath,String bundleName, BundleCallback callback) {
        ThreshLogger.v("[start]");
        try {
            long startTime = SystemClock.elapsedRealtime();
            String fileName = TextUtils.isEmpty(bundlePath) ? bundleName : bundlePath + "/" + bundleName;
            String script = FileUtils.getFromFile(fileName);
            long endTime = SystemClock.elapsedRealtime();
            if (script == null || TextUtils.isEmpty(script)){
                if (callback != null){
                    callback.onResult(-1,"read js error","");
                }
                return;
            }
            if (executor != null){
                executor.executeScript(script, null);
            }
            long jsEndTime = SystemClock.elapsedRealtime();
            ThreshLogger.v("bundle size：" + script.length()/1024 + "kb \n" +
                                   "readJSTime：" + (endTime - startTime) + "ms \n" +
                                   "LoadJSTime：" + (jsEndTime - endTime) + "ms ", 0) ;
            if (callback != null){
                callback.onResult(0,"load js success",script);
            }

        } catch (Exception e) {
            if (callback != null){
                callback.onResult(-1,"server not run or error","");
            }
        }
    }

    @Override
    public void loadScriptRemoteDebugger(final JSExecutor executor,String debugServerIP,String debugServerPort, final BundleCallback callback) {
        //构建Retrofit
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://" + debugServerIP + ":" + debugServerPort + "/").build();
        BundleDebugMode bundleData = retrofit.create(BundleDebugMode.class);
        //调用接口方法并返回
        final Call<ResponseBody> data = bundleData.getData();
        //网络请求
        data.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                try {
                    if (response != null && response.body() != null) {
                        String script = response.body().source().readUtf8();
                        if (null == script) {
                            script = "";
                        }
                        if (executor != null){
                            executor.executeScript(script, null);
                        }
                        if (callback != null){
                            callback.onResult(0,"load js success",script);
                        }
                    } else {
                        if (callback != null){
                            callback.onResult(-1,"server not run or error","");
                        }
                    }


                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                if (callback != null){
                    callback.onResult(-1,"server not run or error , message:" + (t != null ? t.getCause() : ""),"");
                }
            }
        });
    }

    interface BundleDebugMode {
        @GET("bundle.js")
        Call<ResponseBody> getData();
    }
}
