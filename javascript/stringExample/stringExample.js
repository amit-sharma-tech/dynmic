let str = "Hello";

console.log(str[0], typeof str[0]);

console.log(str.charAt(0), typeof str.charAt(0));
console.log(str.length);

console.log(str.charAt(100));
console.log(str[100]);

console.log(str[str.length - 3]);

for(let s of str){
    console.log(s,'-*****');
}

let str2 = "Amit";
str2 = 'T' + str[0];

console.log(str2);