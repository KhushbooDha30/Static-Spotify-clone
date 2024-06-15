//ques 1
/*let arr=[1,2,3,4,5,6,2,3]
let num =2;
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log("Result ..");
for(ele of arr ){
    console.log(ele);
}
//ques 2
let number = 4523
let j=0;
n=number
while(n>0){
    j++;
    n= Math.floor(n/10);
   
}
console.log(`digits : ${j}`);
///ques 3
let num1 = 4523
let sum=0;
n1=num1
while(n1>0){
    r= n1%10;
    sum=sum+r;
    n1= Math.floor(n1/10);
   
}
console.log(`sum of digits is : ${sum}`);
//ques 4
let fac=1;
let num2=7;
for(let k=num2;k>=1;k--){
    fac= fac*k;
}
console.log(`factorial is :${fac}`);*/
//ques 5

let arr=[2,5,10,4,2,7,1,9];
let largest=0;
for(let i=0;i<=arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);