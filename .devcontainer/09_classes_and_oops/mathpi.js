const discript =Object.getOwnPropertyDescriptor(Math,"PI")
console.log(discript);


const user ={
  username: "himanshu",
  password: "1234",
  email:"email.com"
}

 const discripUser = Object.getOwnPropertyDescriptor(user,"username");

 console.log(discripUser);

 Object.defineProperty(user, "username",{
  writable: false,
  enumerable:false
 })

//  for (let [key, value] of user.entries(user)) {
//   console.log(`${key} : ${value}`);
//  }

console.log(Object.getOwnPropertyDescriptor(user,"username"));

// console.log(discripUser);