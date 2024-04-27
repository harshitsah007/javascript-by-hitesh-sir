class user{
  constructor(username){
   this.username = username;

  }
  logMe(){
   console.log(`username is ${this.username}`);
  }
  static creatId(){
    return `1234`
  }
}

const users = new user("himanshu");
// console.log(users.creatId())

class Teacher extends user{
  constructor(username,email){
    super(username)
    this.email=email
  }
}

const iphone = new Teacher("iphon","i@phone.com");
iphone.logMe()
// console.log(iphone.creatId())
