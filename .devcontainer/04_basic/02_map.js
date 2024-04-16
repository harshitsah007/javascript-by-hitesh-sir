// maps

const map = new Map();
map.set('IN', 'India')
map.set('US', "Amrica")
map.set('FR','France')
map.set('IN', 'India')

// console.log(map);

for(const [su, res] of map){
    // console.log (su + "-:" + res);
}


const myObject = {
    "Game1": "coc",
    "Game2": "Pubg",
    "Game3": "freeFire"
}

// for(const [key, value] of myObject){
//     console.log(key, "-:", value);
// }

for (const key in myObject) {
    // console.log(`this is all games ${key}, ${myObject[key]}`)
}

const programing= new Array("cpp","js","java","rb","py");

for(const key in programing){
    // console.log(programing[key]);
}


for(const key of programing){
    // console.log(key);
}

// for(const key in map){
//     console.log(key);
// }

