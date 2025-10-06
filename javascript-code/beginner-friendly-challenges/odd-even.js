const numbers = [2, 5, 4, 8, 3, 7, 13, 17, 30];

const classifyOddAndEven = () => {

    const result = []


    for(let i = 0; i < numbers.length; i++) {
      let indexNum = numbers[i];

      if(indexNum % 2 !== 0) {
        result.push(`odd: ${indexNum}`)
      }else {
        result.push(`even: ${indexNum}`)
      }
    }

    // loop through result array
    
    for(let i = 0; i < result.length; i++) {
        console.log(result[i])
    }   
}


const getOddAndEven = classifyOddAndEven();

console.log(getOddAndEven);