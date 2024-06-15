//ques 1
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText="Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(btn);

//ques 2
input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

//ques 3
 document.querySelector("#btn").classList.add("but");

//ques 4
let heading = document.createElement("h1");
heading.innerText="DOM practice";
heading.classList.add("heading");
document.querySelector("body").append(heading);

//ques 5
let para = document.createElement("p");
para.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);