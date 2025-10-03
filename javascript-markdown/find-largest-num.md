# How to Find the Largest Number in an Array — Step by Step

Finding the largest number in an array is a common task in programming. Here’s a simple step-by-step guide to help you understand how to do it in JavaScript.

```javascript
const numbers = [20, 5, 8, 15];

const findLargestNum = (arr) => {
    let max = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] > max) {
            max = arr[i]
        }

    }

    return max
    
}
```

### How the Code Works

```javascript
 let max = 0;

    // for(let i = 0; i < arr.length; i++) {

        if(arr[i] > max) {
            max = arr[i]
        }

    // }
```

```javascript
 max = 0
 true: arr[o] = 20  => 20 > 0  => max = 20
 false: arr[1] = 5   => 5 > 20  => max = 20
 false: arr[2] = 8   => 8 > 20  => max = 20
 false: arr[3] = 15  => 15 > 20 => max = 20

 max = 20;
```
NB: If the number is `false`, it will keep the previous value of `max`. If the number is `true`, it will update the value of `max` to the current number in the array.

### Step 1: Initialize the Array

```javascript
const numbers = [20, 5, 8, 15];
```

We start by defining an array called `numbers` that contains a list of numbers. 


### Step 2: Create the Function

```javascriptconst findLagestNum = (arr) => {
    let max = 0;
```


We create a function named `findLagestNum` that takes an array `arr` as an argument. Inside the function, we initialize a variable `max` to `0`. This variable will hold the largest number we find in the array. 


### Step 3: Loop Through the Array

```javascript    
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}
```

We use a `for` loop to iterate through each element in the array. The loop runs until it has gone through all the elements. Inside the loop, we check if the current element is greater than the current maximum value (`max`). If it is, we update `max` to be the current element. 


### Step 4: Return the Result

```javascript
return max;
```

After the loop has finished, we return the largest number found in the array. 


### Step 5: Test the Function

```javascript
console.log(findLagestNum(numbers));
```

Finally, we call the function with our `numbers` array and log the result to the console. This will print the largest number in the array.