// const promiseOne =new Promise(function(resolve,reject){
//   //do an async task
//   // DB calls , cyptography, network
//   setTimeout(function () {
//     resolve()
//     console.log("async task is complete")
//   },1000)
// })

// promiseOne.then(function(){
//   console.log('promise consumed')
// })

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task is completed 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promise consumed 2");
// });

// const promiseThree = new Promise(function(resolve, reject){
//   setTimeout(function(){
//      resolve([1,2,3,4,5,6,7,8,9])
//   },1000)
// })
// promiseThree.then(function(arr){
//   console.log(arr);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const ERROR = true;
//     if (!ERROR) {
//       resolve({ username: "himanshu", password: "123" });
//     } else {
//       reject("Error : Somthing went Wrong");
//     }
//   }, 1000);
// });

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//   console.log(error);
// })

// promiseFour.then((user)=>{
//    console.log(user);
//    return user.username;
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//    console.log(error)
// }).finally(()=>{
//   console.log("the Promise either resolve and rejected")
// // })

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const error = 1;
//     if (!error) {
//       resolve({ usernam: "harsh", password: "123" });
//     } else {
//       reject('ERROR : js went wrong')
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();


// async function getallUsers(){
 
//   try {
//     const response= await fetch("https://jsonplaceholder.typicode.com/users");

//     const data =  await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('E: ', error)
//   }
// }
// getallUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
   return response.json()
})
.then(function(response){
  console.log(response)
})
.catch(function(error){
  console.log(error);
})

