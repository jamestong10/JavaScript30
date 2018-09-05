# **04 Array Cardio Day 1**
![](../images/04_Array_Cardio_Day_1.jpg)

Photo by Chris Ried on Unsplash

## [Demo](https://jamestong10.github.io/Javascript30/04_Array_Cardio_Day_1/index.html) | [GitHub](https://github.com/jamestong10/Javascript30/tree/master/04_Array_Cardio_Day_1)

# 主題

作者設計八個範例介紹 Array methods 操作

## Array

這次用到的都是 instance methods of Array

只有 `Array.from()` 是 class method of Array

## 0. console.table
基本的輸出使用 `console.log()`
但這邊有教到使用 `console.table(variables)` 讓資料以表格呈現

## [1. arr.filter()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

此函式為一個斷言，用於測試陣列中的每個元素。回傳值為 true 時將當前的元素保留至新陣列中，若為 false 則不保留。

結果會回傳新陣列。

題目：找出出生於 1500~1599 年的inventor
```js
const fifteens = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});

// 使用 arrow function
const fifteens = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
```

## [2. arr.map()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

map 會將所有陣列中的元素依序分別傳入一次至 callback 函式當中，並以此回呼函式每一次被呼叫的回傳值來建構一個新的陣列。

題目：產生所有 inventors 的 full name (last name + first name)

```js
const full_name = inventors.map(function (inventor) {
  return `${inventor.first} ${inventor.last}`
});
// 使用 arrow function
const full_name = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
```

## 比較 arr.forEach() v.s. arr.map() 的差別
forEach: 執行每個 element 執行callback，直接修改原array object
map: 產生新的array object存入每個元素執行 callback 的結果

## [3. arr.sort()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

傳入比較函式，比如兩個參數 `a, b`， `a > b` 回傳 1 , `a < b` 回傳 -1, 不改變順序回傳 0

題目：列出 inventors 的生日，從老到年輕排序

```js
const birth_order = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  }
  else {
    return -1;
  }
});

// arrow function
const birth_order = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);
```

## [4. arr.reduce(callback[accumulator, currentValue], initialValue)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

使用 `reduce()` 做數值加總

題目： 計算所有 inventor 的年齡總合

一般都會使用
```js
let total_years = 0;
inventors.forEach(inventor => {
  total_years += (inventor.passed - inventor.year)
});
```

使用 reduce 結合 arrow function

```js
const reducer = (total, inventor) => total + (inventor.passed - inventor.year);
const totalyears = inventors.reduce(reducer, 0);
```

## [5. arr.sort()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

題目： 依序由大到小排列所有 inventor 的年齡

```js
const sorted = inventors.sort(function (a, b) {
  let alives = a.passed - a.year;
  let blives = b.passed - b.year;
  return (a.lives > b.lives) ? -1 : 1;
});
```

## 6. map() + filter() & includes()

題目：列出wiki中巴黎所有包含'de'的路名

```js
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));
const de = links
  .map(link => link.textContent)
  .filter(streetName => streetName.includes('de'));
```

這題重點整理：
- `querySelector` 的dom 元件可以在呼叫 `querySelectorAll`
- `querySelector`, `querySelectorAll` 回傳 NodeList
- 使用 `Array.from()` 產生 array
- `map()` + `filter()` 結合使用

## 7. sort() & [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

題目： 依據 last name 排序所有 people 的資料

```js
const alpha = people.sort(function (a, b) {
  let [aLast, aFirst] = a.split(", ");
  let [bLast, bFirst] = b.split(", ");
  return aLast > bLast ? 1 : -1
});

const alpha = people.sort((a, b) => {
  let [aLast, aFirst] = a.split(", ");
  let [bLast, bFirst] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
```

這題用到 ES6 陣列解構賦值的特性，直接將 split() 的結果賦值和命名

## 8. reduce()

題目：計算每個種類的數目

這題做法真的很棒，一定要學起來，以前使用 reduce 使用來加總數字，還能利用 hash 做統計

reduce 初始資料為 empty hash

```js
const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
```