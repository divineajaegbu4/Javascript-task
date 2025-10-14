const numbers = [7, 13, 9, 21, 8, 15];

const findOddNum = (arr) => {

    let oddNumbers = [];

    for(let i = 0; i < arr.length; i++) {

        // console.log(arr[i] % 2 !== 0)

        console.log(arr[i]);

        if(arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i])
        }
    }

    return oddNumbers
}

console.log(findOddNum(numbers))