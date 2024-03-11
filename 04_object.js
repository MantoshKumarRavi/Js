// const tinderUser= new Object()   second Methode to create objects

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email: "sammy@gmail.com",
    fulname : {
        userFullName:{
            fname:"Mantosh",
            lName:"Ravi"
        }

    } 
}
//  console.log(regularUser.fulname)
//  console.log(regularUser.fulname.userFullName.fname)

// objects combine

const obj1={ 1:"a", 2:"b"}
const obj2={ 3:"s",4:"d"}


const obj3={obj1,obj2}
// console.log(obj3)
const obj4=Object.assign({},obj1,obj2)
console.log(obj4)
console.log(obj1)
const obj5= { ...obj1,...obj2}
console.log(obj5)


//.......................

const usersa= [
    {
        id:1,
        email:"ABC@GMAIL.COM"
    },
    {
        id:1,
        email:"ABC@GMAIL.COM"
    },
    {
        id:1,
        email:"ABC@GMAIL.COM"
    },
    {
        id:1,
        email:"ABC@GMAIL.COM"
    },
]
const a=usersa[1].email

// console.log(a)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))    /// object to array covert
// console.log(Object.values(tinderUser))    /// object to array covert[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.entries(tinderUser))    /// object to array covert [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
//console.log(tinderUser.hasOwnProperty('isLoggedIn'))    /// object to array covert [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

