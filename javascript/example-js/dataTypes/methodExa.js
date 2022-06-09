/* let arr = ['I', "am", "Amit"];

console.log(arr.length);

delete arr[0];

console.log(arr.length); */

let arr = ["I", "study", "JavaScript"];

let removed = arr.splice(0,1,"Amit");

console.log(removed);
console.log(arr);