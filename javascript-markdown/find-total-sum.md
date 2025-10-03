# How to Find the Total Sum of an Array — Step by Step

Finding the total sum of an array is a common task in programming. Here’s a simple step-by-step guide to help you understand how to do it in JavaScript.

```javascript
const numbers = [4, 12, 7, 3];

const findTotalSum = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }

    return sum;
}

console.log(findTotalSum(numbers));
```

### How the Code Works

```javascript
 let sum = 0;

    // for(let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    // }
```

```javascript
 sum = 0
 sum = sum + arr[0] => 0 + 4  => sum = 4
 sum = sum + arr[1] => 4 + 12 => sum = 16
 sum = sum + arr[2] => 16 + 7 => sum = 23
 sum = sum + arr[3] => 23 + 3 => sum = 26

 sum = 26;
```

