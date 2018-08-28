# **01.JavaScript Drum Kit**
![](../images/01_JavaScript_Drum_Kit.jpg)

# 主題
使用 js 監聽鍵盤的event，並產生對應的音效
## [Demo]() | [GitHub]()

# 筆記
## audio element

attribute: currentTime
methods: play

```
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
audio.currentTime = 0; // rewind to the start
audio.play();
```

## data-attributes
html 元件可以指定 data-* 的屬性

```
<div data-key="65" class="key">
  <kbd>A</kbd>
  <span class="sound">clap</span>
</div>
```

css selecotr 能使用 data-attributes

```js
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
```

string literal
使用 `${var_name}` 就可替換值

## addEventListener

替每個 dom element 加上事件監聽器
如果取得 Arry 要逐筆增加（可以使用 forEach)
第一次看到  [transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend) event

```
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTranistion));
```

## classList
使用 classList 增加、刪除 class of dom

```js
this.classList.add('playing');
this.classList.remove('playing');
```