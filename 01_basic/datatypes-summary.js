//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// const score1 = 100
// const scoreValue = 100.3
// console.log(score1+"   "+scoreValue);

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// console.log(isLoggedIn, outsideTemp, userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')

const score=null;

// console.log(id);


// console.log(id === anotherId);

const bigNumber = 3456543576654356754n

/* // console.log(bigNumber)

// Reference (Non primitive)
// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// console.log(heros);
 */
// let arraycolor=["blue","red","black","white"];
// console.log(arraycolor);

// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// console.log(myObj);

let empObj={
     empId: 101,
     empName:"anish",
     empSal:2550.65,
     empAddress:"sherghati",

}
console.log(empObj);



const myFunction = function(){
    console.log("Hello world");
}

console.log(datatypes-summary.myFunction);

console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3