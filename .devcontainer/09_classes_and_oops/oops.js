const user = {
  userName: "himanshu",
  userId: "1234567",
  signedIn: true,

  getUserDetail: function(){
    // console.log('got user full details form database');
    // console.log(`username: ${ this.userName}`)
    // console.log(this)
  }
}

// console.log(user.userName);
// console.log(user.getUserDetail())

function userone(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn
  return this
}

const userOne = new userone('himanshu',23,true);
const userTwo =  new userone('harshit',22,false);
console.log(userOne)
console.log(userOne.loginCount)
console.log(userOne.constructor)