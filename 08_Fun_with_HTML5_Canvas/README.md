# **08 Fun with HTML5 Canvas**
![](../images/08_Fun_with_HTML5_Canvas.jpg)

## [Demo](https://jamestong10.github.io/Javascript30/08_Fun_with_HTML5_Canvas/index.html) | [GitHub](https://github.com/jamestong10/Javascript30/tree/master/08_Fun_with_HTML5_Canvas)

# 主題
動手玩 HTML5 Canvas 這次教你如何透過滑鼠在網頁畫出彩色的線條

## [Canvas](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API)

HTML 元件，可以透過 javascript 在元件上繪圖

canvas 會使用到的變數

```js
const canvas = document.querySelector("#draw");

// 設定內容以2D 呈現
const ctx = canvas.getContext('2d');

// 設定 canvas 大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 線條顏色
ctx.strokeStyle = '#BADA55';

// 線條連接樣式
ctx.lineJoin = 'round';

// 線條結束樣式
ctx.lineCap = 'round';

// 線條寬度
ctx.lineWidth = 1;
```

## 撰寫繪圖function

```js
function draw(e) {
  if (!isDrawing) return;
  console.log(e);
  // 動態產生線條顏色
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  
  // 動態產生線條寬度
  ctx.lineWidth = `${hue}`;

  // 繪圖Step 1.畫圖初始路徑
  ctx.beginPath();
  // 繪圖Step 2.將路徑移動到X,Y
  ctx.moveTo(lastX, lastY);
  // 繪圖Step 3.將目前位置與X,Y 連線
  ctx.lineTo(e.offsetX, e.offsetY);
  // 繪圖Step 4.繪製線條
  ctx.stroke();
  // 更新 X,Y 座標
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // 滑鼠移動時，讓顏色動態改變
  hue++;
  if (hue >= maxHue) { hue = minHue; }
  
  // 切換 flag 的方法
  // 根據 lineWidth() 調整 flag
  if (ctx.lineWidth >= maxLineWidth || ctx.lineWidth <= minLineWidth) {
    isChangeDirection = !isChangeDirection;
  }

  (isChangeDirection) ? ctx.lineWidth++ : ctx.lineWidth--;
}
```
## Add Event Listener

這次加入 mouse 相關的監聽事件

```js
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
```

## [globalCompositeOperation](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Compositing#globalCompositeOperation)

預設繪圖是新圖會直接覆蓋舊圖，然而可以透過globalCompositeOperation 設定想要呈現的裁減路徑

```js
ctx.globalCompositeOperation = 'source-in';
```