//practice of string methods
let msg = "help!";
console.log(msg.trim().toUpperCase());
//array practice
let months = ['January','July','March','August'];
months.shift();
months.shift();
months.unshift("June");
months.unshift("July");
console.log(months);
//using splice
let month = ['January','July','March','August'];
month.shift();
month.splice(1,0,"June");
console.log(month);
//tic tac toe
let array = [['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(array);