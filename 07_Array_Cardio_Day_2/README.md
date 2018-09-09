# **07 Array Cardio Day 2**
![](../images/07_Array_Cardio_Day_2.jpg)

## [Demo](https://jamestong10.github.io/Javascript30/07_Array_Cardio_Day_2/index.html) | [GitHub](https://github.com/jamestong10/Javascript30/tree/master/07_Array_Cardio_Day_2)

# 主題

接續 Day 4 再介紹 Array methos

## 1. arr.some()

查看 array *其中之一個*元素是否符合條件，會回傳true/false

```js
const isAdult = people.some((person) =>
  ((new Date()).getFullYear() - person.year) >= adultAge
);
```

## 2. arr.every()

查看 array *全部*元素是否符合條件，會回傳true/false

```js
const allAdult = people.every((person) =>
  ((new Date()).getFullYear() - person.year) >= adultAge
);
```

## 3. arr.find()

有點類似`filter()` 但`find()` 只回傳*第一個符合條件*的元素

```js
const theComment = comments.find((comment) => comment.id === commentId);
```

## 4. arr.findIndex()

只回傳*第一個符合條件*元素的索引值

```js
const index = comments.findIndex((comment) => comment.id === commentId);
```

## 刪除陣列中的元素

要直接從陣列中移除使用`splice()` 指定位置和刪除數量

```js
comments.splice(index, 1);
```

不想更動原本的陣列，要另外產生新的陣列並刪除元素

```js
const newComments = [
  ...comments.splice(0, index),
  ...comments.splice(index)
]
```