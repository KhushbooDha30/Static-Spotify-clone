//square arrow function
const square = (n) => (n*n);
console.log(square(4));
//setinterval
let id = setInterval(() => {
    console.log("Hello World");
} , 2000)
setTimeout(() =>{
    clearInterval(id)},10000);