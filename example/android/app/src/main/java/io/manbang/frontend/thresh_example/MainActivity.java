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

package io.manbang.frontend.thresh_example;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.CompoundButton;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.SwitchCompat;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleType;
import io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs;
import io.manbang.frontend.thresh.util.ThreshToast;

public class MainActivity extends AppCompatActivity {

    SwitchCompat switchServer;

    EditText edLocalIp;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        sharedPreferences = getSharedPreferences("thresh_data", Context.MODE_PRIVATE);
        findViewById(R.id.tv_open_local).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sharedPreferences.edit().remove("debug_local_ip").apply();
                Intent intent = new Intent(MainActivity.this, ThreshDemoActivity.class);
                intent.putExtra("load_mode", BundleType.ASSETS_FILE.getType()).putExtra(
                        ThreshFlutterActivityLaunchConfigs.EXTRA_INITIAL_ROUTE,
                        "thresh/thresh-page?page=homePage")
                        //                      .putExtra(ThreshFlutterActivityLaunchConfigs.EXTRA_BACKGROUND_MODE, ThreshFlutterActivityLaunchConfigs.BackgroundMode.transparent)
                        .putExtra(
                                ThreshFlutterActivityLaunchConfigs.EXTRA_DESTROY_ENGINE_WITH_ACTIVITY,
                                true);
                startActivity(intent);
            }
        });
        findViewById(R.id.tv_open_local_fragment).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sharedPreferences.edit().remove("debug_local_ip").apply();
                Intent intent = new Intent(MainActivity.this, ThreshDemoFragmentActivity.class);
                intent.putExtra("load_mode", BundleType.ASSETS_FILE.getType());
                intent.putExtra(ThreshFlutterActivityLaunchConfigs.EXTRA_INITIAL_ROUTE, "thresh/thresh-page?page=homePage");
                startActivity(intent);
            }
        });
        findViewById(R.id.tv_open_debug_page).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (switchServer.isChecked()) {
                    sharedPreferences.edit().putString("debug_local_ip",
                                                       edLocalIp.getText().toString().trim())
                            .commit();
                    Intent intent = new Intent(MainActivity.this, ThreshDemoActivity.class);
                    intent.putExtra("load_mode", BundleType.JS_SERVER.getType())
                            .putExtra("debug_local_ip", edLocalIp.getText().toString().trim())
                            .putExtra("debug_local_port", "12345")
                            .putExtra(ThreshFlutterActivityLaunchConfigs.EXTRA_INITIAL_ROUTE, "thresh/thresh-page?page=homePage")
                            .putExtra(ThreshFlutterActivityLaunchConfigs.EXTRA_DESTROY_ENGINE_WITH_ACTIVITY, true);
                    startActivity(intent);
                } else {
                    ThreshToast.makeText(MainActivity.this, "请先打开沙盒模式", 0);
                }
            }
        });
        switchServer = findViewById(R.id.switch_server_debug_env);
        edLocalIp = findViewById(R.id.ed_local_ip);
        edLocalIp.setEnabled(true);
        edLocalIp.setText(sharedPreferences.getString("debug_local_ip",
                                                      edLocalIp.getText().toString().trim()));
        switchServer.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                switchServer.setChecked(isChecked);
                edLocalIp.setEnabled(!isChecked);
            }
        });
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}