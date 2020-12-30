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
