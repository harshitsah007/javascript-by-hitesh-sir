function createUser(username, score) {
  this.username = username
  this.score = score
}
// this means jis
createUser.prototype.increment =function(){
  this.score++
}
createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`)
}

const chai =  createUser('chai',25)
const coffe = createUser('tea', 250)

chai.printMe()

