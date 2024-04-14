// const userName = ' ';
// if (userName) {
//     console.log("got user email");
// }else{
//     console.log("Don`t have user email");
// }

// falsy value - false, 0, -0,bigInt, 0n, null, undefined,NaN,"",
// truthy value - "0",'false'," ",[].{},function(){},

// if(userName.length===0){
//     console.log("this is empty");
// }
const emptyObj = {}

// if(Object.keys(emptyObj).length ===0){
//     console.log("this is empty")
// }

// NUllish coalescing Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 12;


console.log(val1);

// terniary Operator 

// condition ? true : false
const petrolPrice = 94.6;
petrolPrice <=100 ?console.log("abhi to chal jayega") : console.log("ab muskil ho jayegi")