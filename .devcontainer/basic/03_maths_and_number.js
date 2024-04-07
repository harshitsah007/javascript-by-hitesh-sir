const num = 600;
// console.log(num);

const balance = new Number(300);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); 

const otherNumber = 123.8945;
// console.log(otherNumber.toPrecision(3));

const hundredss = 12323232312321;
// console.log(hundredss.toLocaleString('en-IN'));



// ********************** Math *****************

console.log(Math);
console.log(Math.abs(-4));// find absolute value
console.log(Math.round(4.6)); // find round of value
console.log(Math.ceil(4.6)); //upper round of value
console.log(Math.floor(4.6)); // lower round of value
console.log(Math.random());// random value
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1)) + min);
