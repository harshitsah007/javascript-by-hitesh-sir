let mySyb = Symbol("newKey");

const myDetails = {
    Name : "Himanshu",
    "full name":"himanshu sah",
    [mySyb]: "himanshu",
    email : "himashu@google.com",
    location: "haldwani",
    isloggedIn: false
}

// console.log(myDetails.Name);
// console.log(myDetails["Name"]);
// console.log(myDetails["full name"]);
// console.log(myDetails[mySyb]);

// myDetails.Name="harshitsah";
// console.log(myDetails["Name"]);
// Object.freeze(myDetails);
// myDetails.Name="harshitsah";
// console.log(myDetails.Name);
// console.log(myDetails);


myDetails.greeting = function(){
    console.log("hello My Lovly friend ");
}

myDetails.greetingTwo = function(){
    console.log(`hello my lovly friend, My name is ${this.Name}`)
}

console.log(myDetails.greeting());
console.log(myDetails.greetingTwo());
console.log(myDetails);
