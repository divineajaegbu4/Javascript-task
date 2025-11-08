// Tasks:
// Remove all products with no stock.


// List product names only.


// Find the highest-priced product.


// Check if any product costs less than $10.


// Add a discountedPrice property (10% off).


// Calculate total inventory value (price × stock).


// Log “Apple costs $20 and has 10 in stock.” for each product.

const products = [
  { id: 1, name: "Apple", price: 20, stock: 10 },
  { id: 2, name: "Banana", price: 5, stock: 0 },
  { id: 3, name: "Orange", price: 15, stock: 8 }
];



const storeSystem = products.filter(product => product.stock > 0)
const findObj = storeSystem.find(product => product.price > 10)
const totalPrice = storeSystem.reduce((multiple, product) => {
    multiple += product.price * product.stock
    return multiple
}, 0)


console.log(`${findObj.name} costs $${findObj.price} and has ${findObj.stock} in stock`);
console.log("TotalPrice:", totalPrice)