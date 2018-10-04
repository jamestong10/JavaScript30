# **18 Tally String Times with Reduce**
![](../images/18_Tally_String_Times_with_Reduce.jpg)

## [Demo][018Demo] | [GitHub][018Js]

[018Demo]:https://jamestong10.github.io/Javascript30/18_Tally_String_Times_with_Reduce/index.html
[018Js]:https://github.com/jamestong10/Javascript30/tree/master/18_Tally_String_Times_with_Reduce

# 主題

加總所有影片的播放時間

## Array#map

建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合

```
const seconds = timeNodes.map(node => node.dataset.time)
```

作者介紹一種不錯的方式，如果要把陣列內容的字串轉成浮點數

使用`#map` 時傳入`parseFloat` 即可

```
const [mins, secs] = time.split(":").map(parseFloat);
```

## Array#reduce

將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值

作者用來加總每部影片的秒數

```
.reduce((total, value) => total + value);
```

## 時間計算方法

先算出所有秒數

小時：總秒數除以3600 並無條件捨去

```
const hours = Math.floor(secondsLeft / 3600);
```

算出小時候，使用 mod 取得剩餘的秒數

```
secondsLeft = secondsLeft % 3600;
```

以此類推，算出分和秒數

```
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
```