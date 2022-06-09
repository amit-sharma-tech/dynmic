let age = 19;

let welcome;

if(age >= 18){
    welcome = function(){
        console.log("hello !!");
    }
}
else{
    welcome = function(){
        console.log("Greetings!!");
    }
}

welcome();