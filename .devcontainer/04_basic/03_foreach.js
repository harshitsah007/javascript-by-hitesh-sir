const coding = ["JS", "cpp", "c", "java", "ruby", "python", "c#"]

// coding.forEach( function (s){
//     console.log(s)
// })

// coding.forEach( (hello)=>{
//     console.log(hello)
// })

// function printU(item){
//     console.log(item);
// }

// coding.forEach(printU)

// coding.forEach( (item, index, Arr)=>{
//     console.log(item, index, Arr)
// })

const myCoding = [


    {
    languageName: "javascript",
    fileName: "js"
},
{
    languageName: "c++",
    fileName: "cpp"
},
{
    languageName: "Python",
    fileName: "py"
}



]

myCoding.forEach((item) => {
    console.log(item.fileName)
})