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
package io.manbang.frontend.thresh_example.nativeview;

import android.content.Context;

import java.util.Map;

import io.flutter.plugin.common.MessageCodec;
import io.flutter.plugin.platform.PlatformView;
import io.flutter.plugin.platform.PlatformViewFactory;
import io.manbang.frontend.thresh.util.ThreshLogger;


/**
 * view factory
 */
public class NativeViewFactory extends PlatformViewFactory {

    private String viewTypeId;

    public Context mContext;

    public NativeViewFactory(Context context, MessageCodec<Object> createArgsCodec, String viewTypeId) {
        super(createArgsCodec);
        this.mContext = context;
        this.viewTypeId = viewTypeId;
    }

    @Override
    public PlatformView create(Context context, int id, Object params) {
        ThreshLogger.v("params =" + params.toString());
        if (NativeTextView.NATIVE_TEXT_VIEW.equals(viewTypeId)){
            if (params instanceof Map){
                return new NativeTextView(mContext, (Map) params);
            }
        }
        return  null;
    }
}