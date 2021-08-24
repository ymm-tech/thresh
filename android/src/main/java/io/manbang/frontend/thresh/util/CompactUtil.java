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
package android.src.main.java.io.manbang.frontend.thresh.util;

import android.app.Activity;
import android.content.Context;
import android.graphics.Rect;
import android.view.Window;

/**
 * system tool
 */
public class CompactUtil {

    /**
     * Get status bar height
     * <LI> This method needs to be obtained after the onWindowFocusChanged callback </LI>
     * @param context
     */
    public static int getStatusBarHeight(Context context) {
        int statusBarHeight = getStatusBarByResId(context);
        if (statusBarHeight <= 0) {
            statusBarHeight = getStatusBarByReflex(context);
        }
        return statusBarHeight;
    }

    /**
     * Get the status bar height through the status bar resource id
     *
     * @param context
     * @return
     */
    private static int getStatusBarByResId(Context context) {
        int height = 0;
        //获取状态栏资源id
        int resourceId = context.getResources().getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            try {
                height = context.getResources().getDimensionPixelSize(resourceId);
            } catch (Exception e) {
            }
        }
        return height;
    }

    /**
     *
     * Get the height of the status bar by the height of the activity content from the top.
     * <LI> This method needs to be obtained after the onWindowFocusChanged callback </LI>
     *
     * @param activity
     * @return
     */
    public static int getStatusBarByTop(Activity activity) {
        Rect rect = new Rect();
        Window window = activity.getWindow();
        window.getDecorView().getWindowVisibleDisplayFrame(rect);
        return rect.top;
    }

    /**
     * Get the height of the status bar through reflection
     *
     * @param context
     * @return
     */
    private static int getStatusBarByReflex(Context context) {
        int statusBarHeight = 0;
        try {
            Class<?> clazz = Class.forName("com.android.internal.R$dimen");
            Object object = clazz.newInstance();
            int height = Integer.parseInt(clazz.getField("status_bar_height")
                                                  .get(object).toString());
            statusBarHeight = context.getResources().getDimensionPixelSize(height);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return statusBarHeight;
    }
}
