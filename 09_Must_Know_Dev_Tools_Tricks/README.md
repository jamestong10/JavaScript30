# **09 Must Know Dev Tools Tricks**
![](../images/09_Must_Know_Dev_Tools_Tricks.jpg)

## [Demo](https://jamestong10.github.io/Javascript30/09_Must_Know_Dev_Tools_Tricks/index.html) | [GitHub](https://github.com/jamestong10/Javascript30/tree/master/09_Must_Know_Dev_Tools_Tricks)

# 主題
14 個開發工具小技巧

## Regular
```js
console.log("Hello");
```

## Clear
```js
console.clear();
```

## Interpolated
```js
console.log("My name is %s", "James");
```

## Styled
```js
console.log("%c You can tailor text", 'font-size: 20px; color: white; background: #5b5b5b; padding: 3px')
```

## Warning
```js
console.warn("This is warning");
```

## Error
```js
console.error("This is error!");
```

## Info
```js
console.info("Hippo kills a hundred of people every year in Africa.");
```

## Testing
```js
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "the class is missing.");
console.assert(1 === 2, "the value is not match.");
```

## Viewing DOM Elements
```js
console.log(p);
console.dir(p);
```

## Grouping together
```js
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});
```

## Counting
```
console.count('A');
console.count('A');
console.count('B');
console.count('B');
```

## Timeing
```js
console.time('fetching data');
fetch('https://api.github.com/users/jamestong10')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
```

## Table
```js
console.table(dogs);
```