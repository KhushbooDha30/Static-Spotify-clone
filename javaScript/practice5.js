//ques 1
function larger(array,num){
    for(let i=0;i<array.length;i++){
        if(array[i]>num){
            console.log(array[i]);
        }
    }
}
let array1=[45,85,12,63,11,22,34,70];
let num =22
larger(array1,22);
//ques 2
function extract(str){
    let ans="";
  for(let i=0;i<str.length;i++){
    if(str[i]!=str[i+1]){
     ans = ans + str[i];
    }
  }
  return ans;
}
let string = "abbcdefggghiijk";
console.log(`New String is : ${extract(string)}`);
//ques 3
function country(ct){
    let large = " ";
    for(let i=0;i<ct.length;i++){
        if(ct[i].length > large.length){
            large = ct[i];
        }
    }
    return large;
}

let ct =["Australia","India","Germany","United States Of America"];
console.log(`Largest name is : ${country(ct)}`);
//ques 4
function vowelCount(str){
    let count =0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            count++;
        }
    }
    return count;
}
console.log(`Number of vowels : ${vowelCount("khushboo")}`);
//ques 5
function randomGenerate(start,end){
 random = Math.floor(Math.random()*(end-start))+start;
 return random;
}
console.log(randomGenerate(5,10));