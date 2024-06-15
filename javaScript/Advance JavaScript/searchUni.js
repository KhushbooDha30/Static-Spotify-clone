let url ="http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click",async () =>{
    let country = document.querySelector("input").value;
    let colleges = await searchUni(country);
    console.log(colleges);
    show(colleges);
});

4   
async function searchUni(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("Error :",e)
        }

}

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText ="";
    for(col of colleges){
       console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}