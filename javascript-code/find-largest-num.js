const numbers = [20, 5, 8, 15];

const findLagestNum = (arr) => {
    let max = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] > max) {
            max = arr[i]
        }

    }

    return max
    
}

console.log(findLagestNum(numbers));
