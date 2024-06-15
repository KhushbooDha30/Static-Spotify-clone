alert("Are you Ready to play");
let max = prompt("Enter the maximum number between which you wanna guess num?");
let gnum = Math.floor(Math.random() * max)+1;

let number = prompt("Now guess the number :");
while(true){
    if(number=="quit"){
        alert("You Quit....");
        break;
    }
    if(number == gnum){
        alert("You guessed it right..!");
        break;
    }else if(number > gnum){
        number = prompt("Wrong Answer ,You guessed greater number . Try Again  :");
    }else{
        number = prompt("Wrong Answer ,You guessed lesser number . Try Again  :");
    }
}