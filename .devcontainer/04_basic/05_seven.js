const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.map( (num)=>num +2);
// console.log(newNums);

// let newNums=[];
// myNumber.forEach( (num)=>{
//   newNums.push(num + 10);
// })
// console.log(newNums);

// const newNums = myNumber.map( (num)=>num *10).map( (num)=>num +1).filter( (num)=>num>=30)
// console.log(newNums);


// const totalNum = myNumber.reduce( (num, numm)=>{
//     console.log(`accumulator value is ${num} and current value is ${numm} `)
//   return num + numm;
// },0)

// console.log(totalNum);


const shoppingCart = [
    {
        itemname: "Shoes",
        price : 5699
    },
    {
        itemname: "T-shirt",
        price : 1699
    },
    {
        itemname: "Shirt",
        price : 2699
    },
    {
        itemname: "Jeans",
        price : 3999
    },
]

const totalBill = shoppingCart.reduce((acc, item)=>{return acc + item.price},0)
console.log(totalBill);