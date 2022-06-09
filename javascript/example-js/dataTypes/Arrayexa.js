let str = "Before ES2017, to access the JavaScript Object properties, we used the combination of for...in loop and Object.hasOwnProperty() method to access values of own enumerable properties of an object. But after ES2017, it is no longer needed.&*%^&*(*&^%$#$%^&*( ES2017"


//Searching method is string js
let pos = 0;
while(true){
    let indexof_val = str.indexOf("ES2017",pos);
    console.log(indexof_val);
    if(indexof_val == -1){
        break;
    }
    pos = indexof_val + 1;
}

console.log("\n\n");

let pos1 = str.length;
while(true){
    let indexof_val = str.lastIndexOf("ES2017",pos1);
    console.log(indexof_val);
    if(indexof_val == -1){
        break;
    }
    pos1 = indexof_val - 1;
}
