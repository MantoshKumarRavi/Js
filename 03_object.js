// singleton
// objects literals

const mySym= Symbol("key1")
const JsUser={
    name: "mantosh",
    "full name" : "Mantosh Kumar Ravi",
    roll:  18,
    [mySym] :"mykey",
    location:"jaipur",
    email: "mantosh@gmai.com",
    isLoggedIn:false,
    lastLoginDay: ["monday","tuesday"]

} 
// console.log(JsUser.name)
// console.log(JsUser.full name)
// console.log(JsUser["name"])
// console.log(JsUser[mySym])

// JsUser.email="mantoshKumar@g445mail.com";
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email="mantoshKumar123@gmail.com";
// console.log(JsUser.email)
// console.log(JsUser)
JsUser.greeting = function (){
    console.log("Heloo User")
}
JsUser.greetin2 = function (){
    console.log(`heloo ghgh ggjjhj,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetin2())





