const products = [
 { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
 { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
 { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
 { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
 { id: 5, name: "AirPods Pro", price: 2000000, category: "accessory", stock: 15 },
 { id: 6, name: "Lenovo Legion", price: 13000000, category: "laptop", stock: 2 },
 { id: 7, name: "Samsung Buds", price: 1500000, category: "accessory", stock: 0 },
 { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
 { id: 9, name: "Xiaomi Band", price: 500000, category: "accessory", stock: 20 },
 { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 }
];


function getMostExpensiveProduct(arr){
    let init=arr[0];
    for (let i of arr){
        if(init.price<i.price){
            init=i;
        }
    }
    return init;
}
console.log(getMostExpensiveProduct(products));



function getCheapestProduct(arr) {
    let init=arr[0];
    for (let i of arr){
        if(init.price>i.price){
            init=i;
        }
    }
    return init;
}
console.log(getCheapestProduct(products));



function getProductsCount(arr){
    return products.length
}
console.log(getProductsCount(products));


function getProductById(id) {
  for (const product of products) {
    if (product.id === id) {
      return product;
    }
  }

  return "Product not found";
}
console.log(getProductById(99));
console.log(getProductById(9));



function getExpensiveProducts() {
  const result = [];

  for (const product of products) {
    if (product.price > 10000000) {
      result.push(product);
    }
  }

  return result;
}
console.log(getExpensiveProducts());





