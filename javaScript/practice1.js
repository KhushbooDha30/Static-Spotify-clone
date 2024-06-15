//ques 1
let num=240;
if((num%10)==0){
    console.log("Good");
}else{
    console.log("Bad");
}
//ques 2
let uname= prompt("Enter user name :");
let age = prompt("Enter you age :");
let msg = `${uname} is ${age} years old.`;
alert(msg);
//ques 3
let quar = 3;
switch(quar){
    case 1 : console.log("Months in quarter 1 : January,February,March");
             break;
    case 2 : console.log("Months in quarter 2 : April,May,June");
             break;
    case 3 : console.log("Months in quarter 3 : July,August,September");
             break;
    case 4 : console.log("Months in quarter 4 : October,November,December");
             break;
    default : console.log("Invalid");   
} 
// ques 4
let str = "Absolute";
if(((str[0]=== 'A') || (str[0]==='a')) && (str.length >5)){
    console.log("Golden String");
}else{
    console.log("Not a golden string");
}
//ques 5
let n1 =9;
let n2 = 4;
let n3 =6;
if(n1>n2 && n1>3){
    console.log("Number 1 is larger");
}else if(n2>n1 && n2>n3){
    console.log("Number 2 is larger");
}else{
    console.log("Number 3 is larger");
}
let num1 = 3456;
let num2 = 5676;
if(num1[num1.length-1]=== num2[num2.length-1]){
    console.log("Have same last digit");
}else{
    console.log("Don't have same last digit");
}