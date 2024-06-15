let gameSeq = [];
let userSeq = [];

let gameStart = false;
let level =0;
let highScore = 0;

let h2 = document.querySelector("h2");
 let btns = ["yellow" ,"red" , "purple" , "green"];
document.addEventListener("keypress",function(){
    
    if(gameStart == false){
        console.log("Game started");
        gameStart = true;
        levelUp();
    }
})
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}
function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function (){
    btn.classList.remove("flash");
  },250);
  }

  function checkAns(idx){
    
   
    if(userSeq[idx] == gameSeq [idx]){
        if(userSeq.length == gameSeq.length ){
           setTimeout(levelUp,1000);
        }
    }else{
        if(level>highScore){
            highScore = level;
        }
       h2.innerHTML = `Game Over ! Your score was <b>${level}</b><br>Highest score is : ${highScore} <br> Press any key to start. `; 
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";
       },150);
       reset();
    }
  }
  function btnPress (){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameStart =  false;
    gameSeq= [];
    userSeq = [];
    level = 0;
}