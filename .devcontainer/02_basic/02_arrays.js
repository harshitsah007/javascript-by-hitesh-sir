let ipl_Team = ["csk","mi","Gi","srh"];

let wordcup_Team = ["India","Pakistan","Australia","Egland"];
// ipl_Team.push(wordcup_Team);

// console.log(ipl_Team);

let mix_team = ipl_Team.concat(wordcup_Team);
// console.log(mix_team);
// console.log(typeof mix_team);


const newMix_team = [...ipl_Team, ...wordcup_Team, ...mix_team];
// console.log(newMix_team);


let mix_arr = [1,2,3,[34,56,78,[7,59,30,2],4],85,66,[56,89,74]];
// console.log(mix_arr.flat(Infinity));

// console.log(Array.isArray("Himanshu"));
// console.log(Array.from("himanshu"));
// console.log(Array.from({Name: "himanshu"}));// intresting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


