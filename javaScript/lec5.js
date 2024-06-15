function poem(){
    console.log("Twinkle Twinkle Little Star..");
    console.log("How I Wonder What You Are,");
    console.log("Up Above The World So High!");
    console.log("Like A Diamond In The Sky!");
}
poem();
function dice(){
    console.log("Rolling a dice..");
    let val = Math.floor(Math.random()*6)+1;
    console.log(`Value of dice ${val}`);
}
dice();
function average(num1,num2,num3){
  return (num1+num2+num3)/3;
}
console.log(`Average : ${average(5,5,5)}`);
function table(num){
for(let i=1;i<=10;i++){
    console.log(i*num);
}
}
table(7);
function sum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(sum(10));
let con ="";
function concat(array){
    for (let i=0;i<=array.length-1;i++){
       con=con+array[i];
    }
    return con;
}
let array=["I ","Am ","Khushboo ","Dhakciya "];
console.log(concat(array));