// Shopping List Manager

// Start with an empty shopping list (array).

// Add items to the list using a function.

// Remove items from the list by name or index.

// Show the full list after each change.


let shoppingList = [];

let nextId = 1


const addShoppingList = (item, shop, complete) => {

    const items = {
        id: nextId++,
        item: item,
        shop: shop,
        complete: complete
    }

    shoppingList.push(items);

    console.log(shoppingList)
}


console.log("-------------------------addShoppingList------------------")
addShoppingList("Cream", "Mowe", true);
addShoppingList("Book", "Jumia", false);
addShoppingList("Pen", "Ibafo", true);
addShoppingList("Body spray", "Assese", true);
addShoppingList("Laptop", "N/A", false);


console.log("---------------------remove items-----------------")

const removeItem = (itemsId) => {
    for(let i = shoppingList.length - 1; i > 0; i--) {
        const shoppingId = shoppingList[i];

        if(shoppingId.id === itemsId) {
            shoppingList.splice(i, 1);

            console.log(`${itemsId} deleted!`)
            console.log(shoppingList);
        }

       
    }
}


removeItem(2)