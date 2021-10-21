## 防抖函数-思路

防抖函数分为 <kbd>立即执行版</kbd>和<kbd>非立即执行版</kbd>
### 非立即执行版
```js
function debounce(func, wait){
    let timeOut;
    return function (){
        let context = this;
        let args = [...arguments];
        if (timeOut){
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(function (){
            func.apply(context, args)
        }, wait)
    }
}
```
1. 防抖函数返回一个函数，事件触发的是防抖函数返回的函数；
2. 防抖函数的返回函数中的`this`是触发事件的DOM, 所以`arguments`中包含着事件`event`；
3. 非立即执行版，是指函数在触发了事件后n时间后执行，如果中间继续触发事件，则时间重新计算。

### 立即执行版
```js
function debounce(func, wait){
    let timeOut;
    return function (){
        const context = this;
        const args = [...arguments];
        if (timeOut) clearTimeout(timeOut);
        let callNow = !timeOut;
        timeOut = setTimeout(() => {
            timeOut = null;
        }, wait);
        if (callNow) func.apply(context, args);
    }
}
```
1. 立即执行版，是指当事假触发后，函数立即执行一次，函数执行后，只有在n时间内不触发事件，n时间后触发事件才
能继续执行一次函数；

### 合并版
```js
function debounce(func, wait, immedaite){
    let timeOut;
    return function (){
        const context = this;
        const args = [...arguments];
        if (timeOut) clearTimeout(timeOut);
        if (immedaite){
            // 立即执行版
            let callNow = !timeOut;
            timeOut = setTimeout(() => {
                timeOut = null;
            }, wait);
            if (callNow) func.apply(context, args);
        }else {
            // 非立即执行版
            timeOut = setTimeout(function (){
                func.apply(context, args)
            }, wait)
        }
    }
}
```



### 网上教程
1. [防抖节流函数](https://www.cnblogs.com/cc-freiheit/p/10827372.html)
