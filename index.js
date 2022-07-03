/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

// 1 Qution solution
function getUniqueProductCount(arrOfProducts) {
  var obj = {}
  let uniquePrductsCount = {};
  for (var i = 0; i < arrOfProducts.length; i++) {
    if (uniquePrductsCount[arrOfProducts[i].productName]) {
      uniquePrductsCount[arrOfProducts[i].productName] = uniquePrductsCount[arrOfProducts[i].productName] + 1;
    } else {
      uniquePrductsCount[arrOfProducts[i].productName] = 1;
    }
  }
  return uniquePrductsCount
}

var ans = getUniqueProductCount(listOfProducts);
console.log(ans)



// 2 Qution solution
function getUniqueProduct(arrOfProducts) {
  var uniqueProduct = []
  for (var i = 0; i < arrOfProducts.length; i++) {
    var flag = true;
    for (var j = 0; j < uniqueProduct.length; j++) {
      if (arrOfProducts[i].productName == uniqueProduct[j].productName) {
        flag = false
        break;
      }
    }
    if (flag) {
      uniqueProduct.push(arrOfProducts[i])
    } else {
      arrOfProducts[j].quantity = arrOfProducts[j].quantity + arrOfProducts[i].quantity;
    }
  }
  return uniqueProduct
}

ans = getUniqueProduct(listOfProducts);
console.log(ans)
