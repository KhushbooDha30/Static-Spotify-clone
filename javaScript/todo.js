let todo =[];
let option = prompt("Enter you choice");
while(true){
 if(option == "quit"){
    console.log("Quitting...")
    break;
 }
 if(option == "list"){
    console.log("---------------");
    for (let i=0;i<=todo.length-1;i++) {
        console.log(todo[i]);
    }
    console.log("---------------");
}else if(option == "add"){
    let task = prompt("Please enter your task");
    todo.push(task);
    console.log("task added");
}else if(option == "delete"){
    let ind = prompt("Please enter the task index");
    todo.splice(ind,1);
    console.log("Task deleted");
}else{
    console.log("Invalid option..");
}
option = prompt("Enter you choice");
}