{var a = 29;
let b = 67;
const c = 88;
}
// if(true){
//     var a = 39;
//     let b = 55;
//     const c = 00;
// }

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
   const username= "himanshu sah";
    function two(){
        const college="NPSEI";
        console.log(username);
    }
// console.log(college);
console.log(`${username} and 1`);
two();
console.log(`${username} and 2`);
}

// one();

// declaration of the function in a variable

console.log(oneAdd(5));

function oneAdd(num){
    return num +1;

}

// console.log(oneAdd(5));



// console.log(twoAdd(5));// there are no access of the fun because the funcation are declare in the variable
 const twoAdd = function(num){
    return num +2;
}
console.log(twoAdd(5));
