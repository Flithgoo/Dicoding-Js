// const { coffeeStock, isCoffeeMachineReady } = require("./state");

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// };

// makeCoffee("robusta", 50);

/* output
Kopi berhasil dibuat!
*/

import { coffeeStock, isCoffeeMachineReady as redy } from "./state.js";

console.log(coffeeStock);
console.log(redy);

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);
