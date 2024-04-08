// Arrays

const myArr = [1,2,3,4,5,6];
// console.log(myArr);

const newArr = new Array("himanshu","harshit",67,87);
// console.log(newArr[0], newArr[2]);

// Array Method 

// myArr.push(6);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

const yourArr = myArr.join();


// console.log(myArr);
// console.log( typeof yourArr);

//  slice and splice 

console.log("A " ,myArr);
const myArr3 = myArr.slice(1,3);
console.log("B",myArr);
console.log(myArr3);

const myArr4 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myArr4);

