# How to Find the Average of Numbers — Step by Step

Finding the average of a set of numbers is a common mathematical task. When the numbers are stored in an array, you can use a loop to go through each number, add them all together, and then divide by how many numbers are in the array. This step-by-step process makes it easy to calculate the average (or mean) of any set of numbers.

```javascript

const numbers = [10, 20, 30, 40];

const calculateSum = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {

        sum += arr[i];
    }

    return sum
}

const getCalculateSum = calculateSum(numbers);

const averageNum = getCalculateSum / numbers.length;

console.log(averageNum);
```

## How the Code Works

```javascript
  for(let i = 0; i < arr.length; i++) {

        sum += arr[i];
    }
```

We initialize a variable called `i` in the loop, and then used the arr.length(numbers.length) to express the condition or logic of the loop. The loop will continue to run as long as `i` is less than the length of the array. Inside the loop, we add each number in the array to the `sum` variable using `sum += arr[i];`.

Now, let's break down the code step by step.

`i < arr.length` will count from  0 to 3; 
`i++` will increment the value of `i` by `1` in each iteration of the loop. e.g `i = 0` then `i = 1` then `i = 2` then `i = 3` and finally `i = 4` which will break the loop because `4 < 4` is false. 

If you run `i <= arr.length`, it will show `NaN` because the loop will run one extra time when `i` is equal to the length of the array, which is 4 in this case. Since arrays are zero-indexed, trying to access `arr[4]` will result in `undefined`, and adding `undefined` to `sum` will lead to `NaN` (Not a Number).


`sum += arr[i]` is the same with `sum = sum + arr[i]`. It adds the current element of the array (arr[i]) to the existing value of `sum` and updates `sum` with this new value.

```
sum = 0 + 10 = 10
sum = 10 + 20 = 30
sum = 30 + 30 = 60
sum = 60 + 40 = 100
```

## Code Explanation

1. **Define the Array**: We start by defining an array called `numbers` that contains the set of numbers we want to find the average of.

2. **Create a Function to Calculate the Sum**: We define a function `calculateSum` that takes an array as an argument. Inside this function, we initialize a variable `sum` to 0.

3. **Call the Sum Function**: We call the `calculateSum` function and pass the `numbers` array to it. The result is stored in a variable called `getCalculateSum`.

4. **Loop Through the Array**: We use a `for` loop to iterate through the array and add each number to the `sum` variable.

5. **Calculate the Average**: Finally, we calculate the average by dividing the total sum by the length of the array and log the result to the console.