// Given an array that may contain duplicates, 
// create a function that returns a new array with duplicates removed.

const fruitsDuplicate = ["Banana", "Apple", "Gova"];

const addFruits = () => {

    const fruits = ["Banana", "Apple", "Gova", "Watermelon", "Grape"];


    fruits.forEach((fruit) => {
        fruitsDuplicate.push(fruit);
    })

    console.log(fruitsDuplicate)

}



const removeDuplicateFruits = (arr) => {
    for(let i = 0; i < arr.length; i++) { // check original
        for(let j = i + 1; j < arr.length; j++) { // check the next
            if(arr[i] === arr[j]) {
                arr.splice(j, 1)
                console.log(`Duplicate found: ${arr[i]}`)
                // i-- 
            }else {
                arr[j]
            }
        }
    }

    console.log(arr)
}

console.log("-----------------add fruits------------");
addFruits()

console.log("-------------------remove duplicate values-------");
removeDuplicateFruits(fruitsDuplicate)