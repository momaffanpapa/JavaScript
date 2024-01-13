const name = "hitesh";
const repoCount = 50;

const fName="anish";
const lName="Abdullah";

// console.log(`Could you please enter your FirstName ${fName} and LastName ${lName}`);
// console.log(name + repoCount + " Value");
// console.log(fName+lName+" awesome ");


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
// const gameName2=gameName.toUpperCase();
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.charAt(3));
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log("**********");
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));