// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toJSON);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof  myDate);

// let myCreateDate = new Date(2026,8,5);
// console.log(myCreateDate.toDateString());
 
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long"
})
