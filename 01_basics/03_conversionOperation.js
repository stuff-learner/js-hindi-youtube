// let score = 33 // number
// let score = "33abc" // string
let score = "33abc" // string output: NaN
// let score = null // output: 0
// let score = undefined // output: NaN
// let score = "aman kumar chaursiya" // output: NaN
// let score = true // output: 1

// jiska conversion nhi kr skta uska output NaN de dega!!

/*
summary:
1. "33" => 33
2. "33abc" => NaN
3. true => 1; false => 0
*/

// both way of coding is correct!!
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) // string convert to number
console.log(typeof valueInNumber); // output: number
console.log(valueInNumber); // output: NaN

let isLoggedIn = 1

