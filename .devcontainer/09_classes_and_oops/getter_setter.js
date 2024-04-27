class user{
  constructor(username,password){
    this.username =username;
    this.password = password
  }
  get password(){
    return this._password.toUpperCase();
  }
  set password(value){
    this._password = value
  }
}

const users = new user('himanshu',"himanshu");
console.log(users.username)
console.log(users.password)