//practice for if
let light = "red";
if(light==="red"){
    console.log("Stop..!light is red");
}
if(light==="green"){
    console.log("Go on..light is green");
}
if(light==="yellow"){
    console.log("Slow down..light is yellow");
}
//practice for nested else if
let size='XL'
if(size==='XL'){
 console.log("Price is 250 rs.")
}
else if(size==='L'){
    console.log("Price is 200 rs.")
}else if(size==='M'){
    console.log("Price is 100 rs.")
}else {
    console.log("Price is 50 rs.")
}
// practice for string
let string="akshay";
if((string[0]=='a') &&(string.length>3)){
    console.log("It is a good string");
}else{
    console.log("It is not a good string");
}
//practice for switch
let day=1;
switch(day){
    case 1 : console.log("Monday");
               break;
    case 2 : console.log("Tuesday");
               break;
    case 3 : console.log("Wednesday");
               break;
    case 4 : console.log("Thursday");
               break;
    case 5 : console.log("Friday");
               break;
    case 6 : console.log("Saturday");
               break;
    case 7 : console.log("Sunday");
               break;
    default : console.log("Invalid");           
}
//alert and prompt
let fname= prompt("Enter your first name :");
let lname=prompt("Enter your last name :");
let msg= fname+" "+lname;
alert(msg);