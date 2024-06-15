const avg = (arr) => {
    let total =0;
    for(num of arr){
        total += num;
    }
    return total / arr.length;
};
let arr = [8,5,9,1,4,3,7];
console.log(avg(arr));
//ques 2
const isEven = (num) => {
    if(num%2 == 0){
        return "even" ;
    }else {
    return "odd";
}}
console.log(isEven(4));
//ques 4
let length = 4;
function callback(){
    console.log(this.length);
}
const object = {
    length : 5,
    method(callback){
        callback();
    },
};
console.log(callback());
object.method(callback,1,2);

const object1 = { 
    message :'Hello,World!',
    logMessage(){ 
        console.log(this.message);
    }
};
setTimeout(object1.logMessage,1000)