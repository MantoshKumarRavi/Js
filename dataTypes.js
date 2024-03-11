//Data Types in javascript
// Primitive Data Types 
// 7 category STRING| NUMBER| BOOLEAN|NULL|UNDEFINED|SYMBOL||BIGINT
// Non primitive data types
//

// ******** java script is dynamically type language
// Array,Objects,Functions,
const scoe=100;
const scoreValue=200.0;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;
const id = Symbol('1234')
const anotherId=Symbol('1234')
console.log(id== anotherId);
const  BigNumber=298994n;
console.log(typeof BigNumber)

const heros=[ "a","B","C"];
let myObj={
    name:"Mantosh",
    age:22,

}
;
function fun()
{
    console.log("Function");
}

fun();