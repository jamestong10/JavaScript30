# **14 Reference VS Copy**
![](../images/14_Reference_VS_Copy.jpg)

## [Demo](https://jamestong10.github.io/Javascript30/14_Reference_VS_Copy/index.html) | [GitHub](https://github.com/jamestong10/Javascript30/tree/master/14_Reference_VS_Copy)

# 主題
Javascript 原始型別 vs 物件

## Boolean, Number, String

這三個原始型別當被assign時，是直接產生新的原始型別並賦值

資料被異動也不會受影響

```
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'james';
let name2 = name;
console.log(name, name2);
name = 'tong';
console.log(name, name2);

let isPass = true;
let isPass2 = isPass;
console.log(isPass, isPass2);
isPass = false;
console.log(isPass, isPass2);
```

## Array

array assign 要注意reference，也就是指到同一個Array

```
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(team, players);
team[3] = 'Lux';
console.log(team, players);
```

需要使用複製的手段才能避免此問題

作者提供以四種方法複製Array

```
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
```

## Object

object與array一樣是reference

可以使用 `Object.assign()` 複製物件
```
Object.assign({}, person, { number: 99 });
```

可是 `Object.assign()` 只能複製一層

作者提供一種解法可以處理多層複製的方法

```
const dev2 = JSON.parse(JSON.stringify(wes));
```