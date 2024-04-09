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

console.log(isLogedIn()); 

