const name = "Dev"
const repoCount = 50

// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Dev-manuscript')

console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString  = gameName.substring(0,1); 
console.log(newString);

const newStringOne = "  digvesh  rathi "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dev.com/dev716415@gmail.com"

console.log(url.replace('15','14'));

console.log(url.includes('dev716415'));

console.log(gameName.split('-'));