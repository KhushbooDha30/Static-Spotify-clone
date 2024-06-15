// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// h1 = document.querySelector("h1");
// //<!--h1.style.color ="red";-->

// // setTimeout(()=>h1.style.color ="red",1000);
// // setTimeout(()=>h1.style.color ="orange",2000);
// // setTimeout(()=>h1.style.color ="green",3000);

// function changeColor(color,delay,nextColorChange){
//    setTimeout(()=> { 
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//    },delay);
// }

// changeColor("red",1000,() =>{
//     changeColor("orange",1000,() =>{
//         changeColor("green",1000);
//     });
// });


// function saveToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random() * 10 )+1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDb("Khushboo Dhakciya", 
//     () => {
//     console.log("Success Khushboo Dhakciya Saved");
//     saveToDb("My Age", 
//         () => {
//         console.log("Success 2 My Age Saved");//one  more callback
//         saveToDb("Address", 
//             () => {
//             console.log("Success 3 Address Saved");//one more callback
//         },
//         () => {
//             console.log("Failure 3 data not saved");
//         }
//         );
//     },
//     () => {
//         console.log("Failure 2 data not saved");
//     }
//     );
// },
// () => {
//     console.log("Failure 1 data not saved");
// }
// );


function saveToDb(data){
    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random() * 10 )+1;
        if(internetSpeed > 4){
            resolve("Data saved");
        }else{
            reject("Data not saved");
        }
    });
}
// for single then nd catch
// let request = saveToDb("Khushboo Dhakciya");
// request
// .then(() => {
//     console.log("p Data saved");
// })
// .catch(() => {
//     console.log("p Data not saved");
// });

// for multi then and single catch

    saveToDb("Apna College")
    .then(()=>{
        console.log("Data 1 saved");
        return saveToDb("new data");
    })
    .then(() => {
        console.log("Data 2 saved");
        return saveToDb("new data");
    })
    .then(() =>{
        console.log("Data 3 saved");
    })
    .catch(() => {
        console.log("Failure occurred");
    });

    let h1 = document.querySelector("h1");

    function changeHeadingColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            h1.style.color = color;
            resolve("Color Success");
        },delay);
    });
    }

    changeHeadingColor("red",1000)
    .then(() =>{
        console.log("red color changed");
        return changeHeadingColor("blue",1000);
    })
    .then(() =>{
        console.log("blue color changed");
        return changeHeadingColor("orange",1000);
    })
    .then(() =>{
        console.log("orange color changed");
        return changeHeadingColor("green",1000);
    })
    .then(() =>{
        console.log("green color changed");
    })
    .catch(() =>{
        console.log("Color cant change");
    });