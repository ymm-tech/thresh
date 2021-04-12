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
package io.manbang.frontend.thresh.manager

import java.util.concurrent.atomic.AtomicInteger

object ContextIdManager {

    private val mSequenceGenerator: AtomicInteger = AtomicInteger()

    private var contextIdMap = mutableMapOf<Any, String>()


    fun getContextId(key: Any): String {
        if (contextIdMap[key] != null) {
            return contextIdMap[key]!!
        }
        contextIdMap[key] = newContextId()
        return contextIdMap[key]!!
    }

    /**
     * 包装route地址，为其生成唯一的id
     */
    fun wrapRouteAddContextId(key: Any, route: String): String {
        return if (route.contains("?")) {
            "$route&contextId=${getContextId(key)}"
        } else {
            "$route?contextId=${getContextId(key)}"
        }
    }

    fun clearByContextId(contextId:String){
        val iterator = contextIdMap.iterator()
        while (iterator.hasNext()){
            if(iterator.next().value == contextId){
                iterator.remove()
            }
        }
    }


    private fun newContextId(): String {
        return "threshRootID_" + mSequenceGenerator.incrementAndGet()
    }
}