# **05 Flex Panels Image Gallery**
![](../images/05_Flex_Panels_Image_Gallery.jpg)

## [Demo](https://jamestong10.github.io/Javascript30/05_Flex_Panels_Image_Gallery/index.html) | [GitHub](https://github.com/jamestong10/Javascript30/tree/master/05_Flex_Panels_Image_Gallery)

# 主題

學習如何使用 Css: flex, transition, tranform 等方式建立動畫效果，透過 js 聆聽事件實現動畫效果

## Flexbox

flexbox 已是版面配置的主流

若要使用需將顯示設為 flex

```css
display: flex;
```

flex 是 flexbox 最重要的屬性，定義 flex item 依照什麼比例分配 flex container 間距

flex 可設定三個屬性，flex-grow,flex-shrink,flex-basis

作者設定為 1 表示平均分配等同 `auto`

```
flex: 1;
flex: auto;
flex: 1 1 auto;
```

flex-direction: flex item 排列方向

justify-content: flex item 對齊方式

align-items: flex item 內元素對齊方式

## Css Pseudo classes

說明[Learning css](https://jamestong10.github.io/blog/2017/04/13/learning-css/)

```
.panel>*:first-child {
  transform: translateY(-100%);
}
.panel>*:last-child {
  transform: translateY(100%);
}
```

### Reference
- [css flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- [css flexbox](https://www.oxxostudio.tw/articles/201501/css-flexbox.html)

## Javascript
作者有提到addEventListener的callback加`()`的差別

```js
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("click", toggleOpen()));

```
- 有加，在 windows onload 就會執行，此時要注意 onload 抓取的 dom element 是否正確
- 沒加，事件觸發才會執行

## classList methods

```
classList.toggle()
classList.remove()
```