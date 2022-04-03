// problem no:1
function productComponent(computer, watch, coffee) {
  if (typeof (computer, watch, coffee) != "number") {
    return "please enter a valid Product number";
  }
  let percomputer = 1000;
  let perwatch = 260;
  let percoffee = 50;

  // fastFood calculation
  let computerQuantaty = computer * percomputer;
  let watchQuantity = watch * perwatch;
  let coffeeQuantaty = coffee * percoffee;

  let totalProduct = computerQuantaty + watchQuantity + coffeeQuantaty;
  return totalProduct;
}

let totalProductPrice = productComponent(2, 2, 2);
console.log(totalProductPrice);

// problem no:2
var products = [
  {
      id: 1,
      title: "laptop",
      price: 567,
      description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
  },
  {
      id: 2,
      title: "Mobile",
      price: 367,
      description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
  },
  {
      id: 3,
      title: "Watch",
      price: 180,
      description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
  },
  {
      id: 4,
      title: "Coffee",
      price: 40,
      description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
  },

];
for(const product of products){
  if(product.title === 'Mobile'){
     console.log(product)
  }
  else{
    'Product Not Found';
  }
}

// problem no: 3
function isLeapYear(year) {
  // leap year if perfectly divisible by 400
  if (year % 400 == 0) {
    return 366 * 10;
  }
  // not a leap year if divisible by 100
  // but not divisible by 400
  else if (year % 100 == 0) {
    return 365 * 10;
  }
  // leap year if not divisible by 100
  // but divisible by 4
  else if (year % 4 == 0) {
    return 366 * 10;
  }
  // all other years are not leap years
  else {
    return 365 * 10;
  }
}

const myYearMoney = isLeapYear(2022);
console.log(myYearMoney);
