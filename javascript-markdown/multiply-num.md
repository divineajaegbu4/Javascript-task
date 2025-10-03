# How to Multiply All Numbers in an Array — Step by Step

Multiplying all numbers in an array is a common task in programming. Here’s a simple step-by-step guide to help you understand how to do it in JavaScript.

```javascript

const numbers = [1, 2, 3, 4, 5];

const multiplyNumbers = (arr) => {
    let multiple = 1;

    for(let i = 0; i < arr.length; i++) {

        multiple *= arr[i];
    }

    return multiple;
}

console.log(multiplyNumbers(numbers))
```

### How the Code Works

```javascript
    let multiple = 1;
    
        // for(let i = 0; i < arr.length; i++) {
    
            multiple *= arr[i];
        // }
```
    
```javascript

    multiple = 1
    multiple = multiple * arr[0] => 1 * 1  => multiple = 1
    multiple = multiple * arr[1] => 1 * 2 => multiple = 2
    multiple = multiple * arr[2] => 2 * 3 => multiple = 6
    multiple = multiple * arr[3] => 6 * 4 => multiple = 24
    multiple = multiple * arr[4] => 24 * 5 => multiple = 120
    
    multiple = 120;
```
