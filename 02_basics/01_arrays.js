// array

const myArray = [0,1,2,3,4,5]
// console.log(typeof myArray);

// const myArrays = myArray; //shallow copy

// myArrays[0] = 10;

// console.log(myArray[0]);

// console.log(myArray);

// const myHeros = ["ironman","captionamerica","thor","hulk"];

// // Array methods

// // myArray.push(6);
// // myArray.pop();
// myArray.unshift(9);
// console.log(myArray);

// const newArr = myArray.join();

// console.log(myArray);
// console.log(newArr);

console.log("A ",myArray);

const myn1 = myArray.slice(1,3);

console.log(myn1);

console.log("B ", myArray);

const myn2 = myArray.splice(1,3);

console.log("C ", myArray);
console.log(myn2);