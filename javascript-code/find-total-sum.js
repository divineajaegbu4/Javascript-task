const numbers = [4, 12, 7, 3];

const findTotalSum = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }

    return sum;
}

console.log(findTotalSum(numbers));