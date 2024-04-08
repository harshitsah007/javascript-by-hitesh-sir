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

// console.log(myDetails.greeting());
// console.log(myDetails.greetingTwo());
// console.log(myDetails);


const user = {
    email: "himanshu@chatgtp.com",
    name:{
        userName:{
            fullName :{
                firstName:"harshit",
                lastName: "bhole"
            }
        }
    }
}

// console.log(user.name.userName.fullName.lastName);

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"A",4:"B"}
const obj3 = {5:"A",6:"B"}

// const obj4= {obj1,obj2,obj3};
// const obj4 = Object.assign({},obj1,obj2,obj3);
const obj4 = {...obj1,...obj2,...obj3};

// console.log(obj4);

// console.log(Object.keys(myDetails));
// console.log(Object.values(myDetails)); // value pair array
// console.log(Object.entries(myDetails));//make all key value pair in array

// console.log(myDetails.hasOwnProperty('Name'));


//  destructuring in object

const course ={
    courseName: "Learn English",
    price :"99",
    courseInstructure: "harsh",
}

console.log(course.courseInstructure);

const {courseInstructure:instructor}= course;
console.log(instructor);