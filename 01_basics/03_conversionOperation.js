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
2. "33abc" => NaN (not-a-number)
3. true => 1; false => 0
*/

// both way of coding is correct!!
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) // string convert to number
console.log(typeof valueInNumber); // output: number
console.log(valueInNumber); // output: NaN

let isLoggedIn = 1 // output: true
// let isLoggedIn = "" // output: false
// let isLoggedIn = "aman kumar chaursiya" // output: true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "aman kumar chaursiya" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//--------------------OPERATIONS--------------------
let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " aman kumar chaursiya"
let str3 = str1 + str2
console.log(str3);

// aise code nhi likhne hote => yeh code likhne ka sahi tareeka nhi hai
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log((3+4)*5%3);

console.log(true); // output: true
console.log(+true); // output: 1, yeh code likhne ka sahi tareeka nhi hai
// console.log(true+); // error
console.log(+""); // output: 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 