const numbers = [5, 9, 14, 1, 3];

const findSmallestNum = (arr) => {
    let min = 0;

    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] < min) {
            min = arr[i]
        }
    }

    return min
}

console.log(findSmallestNum(numbers));