class user{
   constructor(username){
    this.username = username;

   }
   logMe(){
    console.log(`username is ${this.username}`);
   }
}

class Teacher extends user{
  constructor(username,email,password){
    super(username)
    this.email= email;
    this.password= password;
    
  }
   logTeacher(){
     console.log(`A new teacher is added name is  ${this.username}`);
   }
}

const users = new user("harsh");
const users2 = new Teacher("harshit","example@123",1234)
users.logMe()
users2.logTeacher()
// console.log(users)
// console.log(users2)

console.log(users2 instanceof user);

