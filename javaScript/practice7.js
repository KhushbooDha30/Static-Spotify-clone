//ques 1
let sub1 = [1,4,7,9,3,6];
let sqr = sub1.map((el) => el*el)
console.log(sqr);
let sum = sqr.reduce((res,ele) => (res + ele));

let avg = sum/sub1.length;
console.log(avg);
//ques 2
let sub2 = [1,9,6,2,7,2,3];
let newar = sub2.map((el) => el+5);
console.log(newar);
//ques 3
let sub3 =["Khushboo","Akshay","Isha","Vishesh"];
let newsub = sub3.map((el) => el.toUpperCase());
console.log(newsub);
//ques 4
let sub4 = [1,6,,8,2,6];
const same = (arr,...args) => [
    ...arr,
    ...args.map((v) =>  v*2),
];
console.log(same(sub4,5,9,7));
//ques 5
const mergeObjects = (obj1,obj2) => ({
    ...obj1,
    ...obj2,
});
obj1 = {
    name : "shreya",
    age : 23
};
obj2 = {
    name2 : "Khushboo",
    age2 : 21
};
console.log(mergeObjects(obj1,obj2));
