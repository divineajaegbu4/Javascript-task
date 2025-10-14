const numbers = [1, 2, 3, 4, 5];

const multiplyNumbers = (arr) => {
    let multiple = 1;

    for(let i = 0; i < arr.length; i++) {

        multiple *= arr[i];
    }

    return multiple;
}

console.log(multiplyNumbers(numbers))