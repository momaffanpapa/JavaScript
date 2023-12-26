//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const score=null;

// console.log(id);


console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// console.log(heros);

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
// console.log(empObj);




const myFunction = function(){
    console.log("Hello world");
}

// console.log(datatypes-summary.myFunction);

console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3