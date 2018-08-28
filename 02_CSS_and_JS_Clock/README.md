# **02.CSS and JS Clock**
![](../images/02_CSS_and_JS_Clock.jpg)

# 主題
使用 JS Date function 取得目前時、分、秒，再加入 CSS 特性，讓畫面產生時鐘效果｀。

[Demo](https://jamestong10.github.io/Javascript30/02_CSS_and_JS_Clock/index.html) | [GitHub](https://github.com/jamestong10/Javascript30/tree/master/02_CSS_and_JS_Clock)

# 筆記

## CSS 
[transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform)：讓元素可以被平移、旋轉、縮放和傾斜
[transition](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition)：定義轉場效果

```css
transform: rotate(90deg);
transform-origin: 100%;
transition: all .05s;
```

## JS
setInterval：指定**時間內重複**執行函式

```js
setInterval(updateDate, 1000);

function updateDate() {
  // do sth
}
```

另外一個函式也蠻常使用

setTimeout: 指定**時間後執行一次**函式

```js
setTimeout(resetClass, 1000);

function resetClass() {
  // do sth
}
```