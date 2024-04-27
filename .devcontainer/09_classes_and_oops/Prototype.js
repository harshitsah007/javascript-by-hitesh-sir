// let myName = "himanshu"
// console.log(myName.trueLength);

 let myHeros = ["thor","spiderman"]

 let heroPower={
  thor:"hammer",
  spiderman:"sling",

  getSpiderPower:function(){
    console.log(`spiderman power is ${this.spiderman}`)
  }
 }

 Object.prototype.harsh = function(){
  console.log(`harsh is present in all objects`);
 }

//  heroPower.harsh()
// myHeros.harsh()

// inheritance
const user={
  usernam: "harsh",
  email: "harsh@example.com"
}
const teacher ={
  makeVideos: true,

}
const TeachingSupport={
  assisment: true,
}

const TAsupport={
  makeAssigment: 'js assignment',
  fullTime: true,
  __proto__:TeachingSupport
}

teacher.__proto__=user

// moder syntax
Object.setPrototypeOf(TeachingSupport, teacher)

const anotherUserName = "hellodosto      ";
String.prototype.trueLength= function(){
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is :${this.trim().length}`);

}
anotherUserName.trueLength();
"himanshu".trueLength();