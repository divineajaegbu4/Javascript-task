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