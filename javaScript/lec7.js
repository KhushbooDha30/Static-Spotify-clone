let multi = [19,50,67,10,80];
console.log(multi.every((el) => el%10 ==0));

let min = multi.reduce((min,el) => {
    if(min >el){
        return el;
    }else{
        return min;
    }
}
)
console.log(min);