// let num = "0";
// console.log(typeof num);
// console.log(typeof (num));

// let isLogIsLoggin  = "himanshu";

// let booleanIsLoggin = Boolean(num);
// console.log(booleanIsLoggin);

// 1 => true ; 0 = false;
// "" => false; "himanshu" = true;


let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **************************Operations*************************


let value = 6;
let negValue = -value;
// console.log(negValue);

// console.log(3 + 4 * 5 % 6);

//  === strict check 

// data types are mainly two types  1- primitiv , 2- non-primitiv

/* 7 types : String, Number, Boolean, Null, undefined, Symbol,
BigInt,

const id = symbol('1233');
const secondId = symbol('1233'); give uniquness

In dynamically typed languages all type checks are performed in 
a runtime, only when your program is executing. So this means you can
 just assign anything you want to the variable and it will work.

refrence(Non Premitive): Array, Object, Functions

*/

// const team =['MI','csk','GL','srh'];
// const myObj={
//     name: 'Himanshu',
//     classs: '12th',
//     school : hhhhsss,
// }

// const myFunction = function(){
//     console.log("hello world")
// }

// ***********************Memory**************************

// stack(premitiv) , Heap (Non-premitiv)

let myName = "harshit";

let nickName = myName;

// console.log(myName);
// console.log(nickName);

nickName = 'himanshu';

// console.log(myName);
// console.log(nickName);


const myDetail={
    name: "harshit",
    upiid: "harshitsah@ybl",

}

// console.log(myDetail);

const myDetail2 = myDetail;
myDetail2.name = "himanshu";

// console.log(myDetail);
// console.log(myDetail2);