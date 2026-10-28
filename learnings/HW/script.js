// 2a
let soup = 10;
let burger = 8;
let iceCream = 5;

let order = 1*soup + 3*burger + 1*iceCream;

console.log("Your total is $" + order);

// 2b
console.log("Your total is $" + order, "split between 3 people is $" + order/3);

// 2c
let toaster = 18.50;
let shirt = 7.50;

let total = 1*toaster + 2*shirt;

console.log("Your total is $" + total,);

// 2d
let totalWithTax = (total * 0.1)+total;
console.log("Your total with tax is $" + totalWithTax);

// 2e
let newtax = total*0.2;
let newTotal = total + newtax; 
console.log("Your total with tax is $" + newTotal);