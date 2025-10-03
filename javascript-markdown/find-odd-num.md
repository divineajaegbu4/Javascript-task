# How to Find the Odd Numbers in an Array — Step by Step

Finding odd numbers in an array is a common task in programming. Here’s a simple step-by-step guide to help you understand how to do it in JavaScript.

```javascript
const numbers = [7, 13, 9, 21, 8, 15];

const findOddNum = (arr) => {

    let oddNumbers = [];

    for(let i = 0; i < arr.length; i++) {

        console.log(arr[i] % 2 !== 0)

        if(arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i])
        }
    }

    return oddNumbers
}

console.log(findOddNum(numbers))
```
### How the Code Works

```javascript

 let oddNumbers = [];

    // for(let i = 0; i < arr.length; i++) {

        console.log(arr[i] % 2 !== 0)

        if(arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i])
        }
    // }

    // return oddNumbers
```

```javascript
 let oddNumbers = []
 false: arr[0] = 7  => 7 % 2 !== 0  => oddNumbers = [7]
 true: arr[1] = 13   => 13 % 2 !== 0  => oddNumbers = [7, 13]
 true: arr[2] = 9   => 9 % 2 !== 0  => oddNumbers = [7, 13, 9]
 true: arr[3] = 21  => 21 % 2 !== 0 => oddNumbers = [7, 13, 9, 21]
 false: arr[4] = 8   => 8 % 2 !== 0 => oddNumbers = [7, 13, 9, 21]
 true: arr[5] = 15   => 15 % 2 !== 0 => oddNumbers = [7, 13, 9, 21, 15]

 oddNumbers = [7, 13, 9, 21, 15];
```
```javascript
arr[i] after loop is just like:
arr[0] = 7
arr[1] = 13
arr[2] = 9
arr[3] = 21
arr[4] = 8
arr[5] = 15
It executed 5 times.
```





