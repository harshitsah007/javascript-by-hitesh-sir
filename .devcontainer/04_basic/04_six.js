// const coding = ["JS", "cpp", "c", "java", "ruby", "python", "c#"]


// const values = coding.forEach( (item)=>{
//   console.log(item);
// })

// console.log(values);

const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.filter( (num)=> num >4 )
// console.log(newNums);
// const newNums = myNumber.filter( (num)=>{
//     return num>4;
// } )
// console.log(newNums);

// const newNums = [];

// myNumber.forEach( (num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums)


const books = [
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Fiction",
        "year_published": 1960
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian Fiction",
        "year_published": 1949
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Fiction",
        "year_published": 1925
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance",
        "year_published": 1813
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "genre": "Fiction",
        "year_published": 1951
    }
]

let newBooks = books.filter( (bk)=>{return bk.genre === "Fiction"});
newBooks = books.filter( (bk)=>{return bk.year_published >= 1950});

console.log(newBooks);