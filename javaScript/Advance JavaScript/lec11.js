async function greet(){
    //throw "weak connection";
    return "hello";
}
greet()
.then((result)=>{
    console.log("Success with result :",result);
})
.catch((error) =>{
    console.log("Rejected with error :",error);
});

//random number
function getNum(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let random = Math.floor(Math.random() * 10)+1;
            console.log("Random number : ",random);
            resolve();
        },1000);
    });
}

async function randomNumber(){
     await getNum();
     await getNum();
     getNum();    
}

randomNumber();
//color change

let h1 = document.querySelector("h1");
function changeHeadingColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            h1.style.color = color;
            resolve("Color Success");
        },delay);
    });
    }

async function demo(){
    await changeHeadingColor("red",1000);
    await changeHeadingColor("blue",1000);
    await changeHeadingColor("green",1000);
    await changeHeadingColor("orange",1000);
    await changeHeadingColor("yellow",1000);
    await changeHeadingColor("purple",1000);
}

demo();