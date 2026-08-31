const heros = ["IronMan","Thor","CaptionAmerica"]

const myobj = {
    name : "dev",
    age : 22,
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof heros);


// +++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive), Heap(Non-Primitive)
 
let myname = "dev"
let anothername = myname 
anothername = "ourname"

console.log(myname)
console.log(anothername);

let userOne ={
    email : "user&google.com",
    upi : "user@ybl"
}

let userTwo = userOne

// userTwo = {
//     email : "user2&google.com",
//     upi : "user2@ybl"
// }
userTwo.email = "nitin@yahoo.com"

console.log(userOne.email);
