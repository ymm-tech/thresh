/*
 * MIT License
 *
 * Copyright (c) 2021 ManBang Group
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
package io.manbang.frontend.thresh.view.platformview;

import io.flutter.plugin.common.PluginRegistry;
import io.flutter.plugin.platform.PlatformViewFactory;
/**
 *
 * Registry for platform view factories.
 *  * <p>
 *  * Plugins can register factories for specific view types.
 *
 */
public class ThreshNativeViewRegistrant{

    public ThreshNativeViewRegistrant() {
    }

    /**
     * Registers a factory for a platform view.
     *
     * @param viewTypeId unique identifier for the platform view's type.
     * @param registry   Registry used by plugins to set up interaction with Android APIs.
     * @param factory    factory for creating platform views of the specified type.
     * @return true if succeeded, false if a factory is already registered for viewTypeId.
     */
    public boolean registerWith(String viewTypeId, PluginRegistry registry, PlatformViewFactory factory) {
        final String key = ThreshNativeViewRegistrant.class.getCanonicalName();
        if (registry.hasPlugin(key)){
            return true;
        }
        PluginRegistry.Registrar registrar = registry.registrarFor(key);
        return registrar.platformViewRegistry().registerViewFactory(viewTypeId, factory);
    }
}
