// Tasks:
// Filter out numbers greater than 50.


// Double all numbers.


// Find the first even number.


// Check if all numbers are positive.


// Check if at least one number is divisible by 10.


// Calculate the total sum of all numbers.


// Print each number with its index.


const numbers = [10, 55, 30, 80, 5, 100];

// filter
const filterNum = numbers.filter(number => number > 50)

// map
const doubleNum = numbers.map(number => number * 2)

// find
const firstEvenNum = numbers.find(number => number % 2 === 0)

// if number greater than 0 -> positive
// if number less than 0 -> negative

// every
const positiveNum = numbers.every(number => number > 0)

// some
const numDivisibleBy10 = numbers.some(number => number / 10)

// reduce
const totalNum = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

// map
const eachNumWithTheirIndex = numbers.map((number, index) => {
    return `number: ${number}, index: ${index}`
})




console.log(`filter: ${filterNum}`)
console.log(`DoubleNum: ${doubleNum}`)
console.log(`firstEvenNumber:${firstEvenNum}`)
console.log(`positiveNum: ${positiveNum}`)
console.log(`numDivisibleBy10: ${numDivisibleBy10}`)
console.log(`totalNum: ${totalNum}`)
console.log(`indexNum: ${eachNumWithTheirIndex}`)