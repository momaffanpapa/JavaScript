const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// console.log("AccountId:- "+accountId+" AccountEmail:- "+accountEmail+ 
// " AccountPAssword:- "+accountPassword+" AccountCity:- "+accountCity+" AccountState:- "+accountState)

const empId=155666
let empEmailId="employee@google.com"
var empPassword="1234STR"
empPassword="98678jhjg"
// empId=87678

console.log(empId);
console.log(empEmailId)
console.log(empPassword)



// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId, accountPassword, accountCity, accountEmail);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// let n1=22;
// let n2=21;
// let sum;

function sum(n1,n2)
{ 
    return n1+n2;
}

let res=sum(-2.5,2);
console.log(res);




// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])