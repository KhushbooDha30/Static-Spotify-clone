let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async () =>{
   let image = await getImage();
   console.log(image);
   let img = document.querySelector("#result");
   img.setAttribute("src",image); 
});

async function getImage(){
    try{
        let res = await axios.get(url);
        return res.data.message ;
    }catch(e){
        console.log(e);
        return "no image found";
    }
}

getImage();