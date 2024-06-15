let btn = document.querySelector("button");
let para = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let inp = document.querySelector("input");
/*function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}
btn.addEventListener("click",changeColor);
para.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
/*h3.addEventListener("click",function () {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});*/

h1.addEventListener("mouseout",changeColor);
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
window.addEventListener("scroll", print);
function print(){
    console.log("Page scrolled");
}

inp.addEventListener("input",function(){
    console.log(inp.value);
    if( inp.value > 'a' && inp.value < 'z'){
        h1.innerText=inp.value;
    }
});