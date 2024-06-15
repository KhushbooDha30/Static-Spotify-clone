let smallImages = document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i]);
}

let links = document.querySelectorAll(".box a");
for(let i=0;i<links.length;i++){
    links[i].style.color = "purple";
}
//1
let newP = document.createElement("p");
newP.innerText = "Hey I'm red!";
document.querySelector(".div1").appendChild(newP);
newP.classList.add("red");
//2
let newH = document.createElement("h3");
newH.innerText = "I'm blue h3!";
document.querySelector(".div1").appendChild(newH);
newH.classList.add("blue");
//3
let newDiv = document.createElement("div");
newDiv.classList.add("con");
document.querySelector(".div2").appendChild(newDiv);
//3.1
let newH1 = document.createElement("h1");
newH1.innerText = "I'm in a div";
newDiv.append(newH1);
//3.2
let newHp = document.createElement("p");
newHp.innerText = "ME TOO!";
newDiv.append(newHp);

