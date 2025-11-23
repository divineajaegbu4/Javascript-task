

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 250000,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Headphones",
    price: 35000,
    category: "Electronics",
    inStock: false,
  },
  { id: 3, name: "Chair", price: 15000, category: "Furniture", inStock: true },
  { id: 4, name: "Table", price: 45000, category: "Furniture", inStock: true },
  { id: 5, name: "Shoes", price: 20000, category: "Fashion", inStock: false },
];

let result = [];
let newId = products[products.length - 1].id + 1;

const NamesAndPriceOfProduct = () => {
  for (const product of products) {
    const { name, price } = product;

    result.push(name, price);
  }

  return result;
};

const filterInstockProdcut = () => {
  return products.filter((product) => product.inStock);
};

const filterProdcutBeyond50 = () => {
  return products.filter((product) => product.price < 50000);
};

const matchingProduct = () => {
  return products.map((product, id) => {
    if (product.id === id + 1) {
      return product.name;
    }
  });
};

const destructureProudcuts = () => {
  return products.map((product) => {
    const { name, price, category } = product;

    return {
      name,
      price,
      category,
    };
  });
};

const calculateTotalPriceOfAllProducts = () => {
  return products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
};

const groupCategory = () => {
  let electronics = [];
  let fashion = [];
  let furniture = [];

  products.map((product) => {
    if (product.category === "Electronics") {
      electronics.push(product);
    } else if (product.category === "Furniture") {
      furniture.push(product);
    } else {
      fashion.push(product);
    }
  });

  return {
    electronics,
    fashion,
    furniture,
  };
};

const mostExpensiveProduct = () => {
  return products.filter((product) => product.price > 50000);
};

const addProduct = (name, price, category, instock) => {
  const items = {
    id: newId++,
    name: name,
    price: price,
    category: category,
    instock: instock,
  };

  products.push(items);

  return products;
};

const productNames = () => {
  return products.map((product) => product.name);
};

const productOutOfStock = () => {
  return products.filter(product => {
    // return product.inStock === false
    if(product.inStock === false) {
      console.log("Product not available!")
      return true
    }
  })
}

const getAProduct = () => {
  const [{name, category, price, inStock}] = products;

  return {
    Name: name,
    Category: category,
    Price: price,
    Stock: `${inStock ? "Available" : ""}`
  }
}



console.log(NamesAndPriceOfProduct());
console.log("===============Add products============");
console.log(addProduct("Divine", 60000, "Electronics", true));
console.log(addProduct("Ezinwanne", 890000, "Furniture", false));
console.log("============filter instock products======");
console.log(filterInstockProdcut());
console.log("===============Product less than 50000=====");
console.log(filterProdcutBeyond50());
console.log("============Matching ID=======");
console.log(matchingProduct());
console.log("=========Destructure products======");
console.log(destructureProudcuts());
console.log("======Total Price===========");
console.log("Total price:", calculateTotalPriceOfAllProducts());
console.log("===========Group data===========");
console.log(groupCategory());
console.log("============Most expensive product========");
console.log(mostExpensiveProduct());
console.log("============Product name=======");
console.log(productNames());
console.log('===============Product out of stock=========');
console.log(productOutOfStock());
console.log("================Product format========");
console.log(getAProduct());