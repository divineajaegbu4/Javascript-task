// Given a list of numbers (array), create functions to:

// Find the largest number

// Find the smallest number

// Find the sum of all numbers

// Find the average



const numbers = [12, 45, 43, 23, 14, 10];

const findMax = () => {
    let max = numbers[0];

    for(const num of numbers) {

        if(num > max) {
            max = num
        }
    }

    console.log(max)
}

findMax();

const findMin = () => {
    let min = numbers[0];

    for(const minNum of numbers) {

        if(minNum < min) {
          min = minNum
        }
    }

    console.log(min)
}

findMin();


const sum = (arr) => {
    let sum = 0;

    for(sumNum of arr) {
        sum += sumNum;
    }

   return sum;
}

const getSum = sum(numbers);

console.log(getSum)


const average = getSum / numbers.length

console.log(average);