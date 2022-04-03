// problem no:1
function productComponent(computer, watch, coffee) {
    if(typeof (computer,watch,coffee) !='number'){
        return'please enter a valid Product number';
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
// console.log(totalProductPrice);

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
if(typeof (products) =='-'){
  'please enter a valid Product number';
}
// console.log(products.pandaCost);


// problem no: 3
function isLeapYear(year) {
  if(year % 4 == 0) {
    return 366 * 10;
  }
  else{
    return 365 * 10;
  }
}

const myYearMoney = isLeapYear(2022);
console.log(myYearMoney);

