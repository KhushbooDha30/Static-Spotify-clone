let btns = document.querySelectorAll("button");
/*console.dir(btn);
btn.onclick = function () {
    console.log("Button was clicked!");
};*/
for (btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("You entered a button");
    };
    console.dir(btn);
}
function sayHello(){
    alert("Hello!");
}