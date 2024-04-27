class user{
  constructor(username,email,password){
     this.email=email;
     this.username = username;
     this.password= password;
  }
  encryptPassword(){
    return `${this.password}abc`
  }
}

// const users = new user("himanshu","himanshu@example",123)
// console.log(users.encryptPassword());
// console.log(users);

//behind the seen

function user2(username,email,password){
  this.email=email;
  this.username = username;
  this.password= password;
}

user2.prototype.encryptPassword = function(){
   return `${this.password}ABC`
}

user2.prototype.ChangeuserName= function(){
  return `${this.username.toUpperCase()}`
}

const users2 = new user2("harsh","harsh@123",12345)

console.log(users2.encryptPassword());
console.log(users2.ChangeuserName());
