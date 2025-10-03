# How to Find the Smallest Number in an Array — Step by Step

Finding the smallest number in an array is a common task in programming. Here’s a simple step-by-step guide to help you understand how to do it in JavaScript.

```javascript

const numbers = [5, 9, 14, 1, 3];

const findSmallestNum = (arr) => {
    let min = 0;

    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] < min) {
            min = arr[i]
        }
    }

    return min
}

console.log(findSmallestNum(numbers));
```


### How the Code Works

```javascript
    let min = 0;

    // for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] < min) {
            min = arr[i]
        }
    // }
```

```javascript
 min = 0
 false: arr[0] = 5  => 5 < 0  => min = 0
 false: arr[1] = 9   => 9 < 0  => min = 0
 false: arr[2] = 14   => 14 < 0  => min = 0
 false: arr[3] = 1  => 1 < 0 => min = 0
 false: arr[4] = 3   => 3 < 0 => min = 0

 min = 0;
```
NB: If the number is `false`, it will keep the previous value of `min`. If the number is `true`, it will update the value of `min` to the current number in the array.