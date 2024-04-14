//for

for(let index = 0;index<=10;index++){
    const elm = index;
    if(elm ==5){
        // console.log("5 is the best number");
    }
// console.log(elm);

}

for (let i = 1; i <=10; i++) {
    // console.log(`outerloop${i}`);
    // console.log(" ")
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop ${j} and outer Loop${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
        
    }
    
}


let myArray =[ "MI","csk","GT","RCB"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
//     console.log(element);
//    console.log(typeof element);
    
}


// break and continue 
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`Value of i is ${index}`)
    
// }

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is detected");
//         continue;
//     }
//     console.log(`Value of i is ${index}`)
    
// }



// while loop
//  let index = 1;
//  while (index<=20) {
//     console.log(`this is value ${index}`)
//     index = index+2;
//  }
let arr=0;
while (arr< myArray.length) {
    console.log(myArray[arr]);
    arr++;

}