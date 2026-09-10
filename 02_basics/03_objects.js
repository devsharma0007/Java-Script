// object literals 
const mysym = Symbol("key1")

const jsUser = {
    name : "DKS",
    age : 21,
    [mysym] : "mykey1",
    location : "Faridabad",
    email : "dev716415@gmail.com"  
}
console.log(jsUser["age"]);
console.log(jsUser[mysym]);

jsUser.email = "dev716414@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "arunsharma12487@gmail.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
jsUser.greeting();
jsUser.greeting2();