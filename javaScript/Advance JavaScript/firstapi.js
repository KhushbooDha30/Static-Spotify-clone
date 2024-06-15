// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res) =>{
//    return res.json();
// })
// .then((data) =>{
//     console.log("data1 :",data.fact);
//     return fetch(url);
// })
// .then((res) =>{
//     return res.json();
// })
// .then((data2) =>{
//     console.log("data2 :",data2.fact);
// })
// .catch((err) =>{
//     console.log("error :",err);
// });

let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
//     }catch(e){
//         console.log("error :",e);
//     }
// }

let btn = document.querySelector("button");
btn.addEventListener("click", async () =>{
   let fact = await getFacts();
   console.log(fact);
   let p = document.querySelector("#result");
   p.innerText =  fact;
});

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log(e);
        return "no fact found";
    }
}