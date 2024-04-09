function myName(){
    console.log("H")
    console.log("I")
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")
}

// myName();

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1,number2){
//  let result = number1+ number2;
//  return result
return number1+number2;
}

const result = addTwoNumber( 4,5);
// console.log(result);



function isLogedIn(username= "harsh"){

    if (!username) {
        return console.log("Please Enter a username");
        
    }
    return (`${username} is just Log In`);

}

// console.log(isLogedIn()); 

// 

function totalCartItem(val1,val2,...num1){
    console.log(val1,val2);
    return  num1;
}

// console.log(totalCartItem(200,400,500,600));
const user = {
    username: "himanshu",
    price: 199,
}

function handleObject(objects){
    console.log(`this is user ${objects.username} and the total price is ${objects.price}`);
}

// console.log(handleObject(user));
handleObject({
    username:"harshit",
    price: 200,
})

const newArray = [20,40,30,48,90];

function returnArray(getArray){
    console.log(getArray[1]);
}

returnArray(newArray);
