let fav = "avatar";
let guess = prompt("Guess the movie name");
while(guess != fav){
    if(guess === 'quit'){
        break;
    }else{
    guess = prompt("Wrong Answer! Try again");
    }
}