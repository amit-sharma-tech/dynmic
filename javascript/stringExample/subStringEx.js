// substring,substr and slice

let str = "My name is Devendra Dode. I am a full-stack developer, entrepreneur, and owner of Tutsmake.com. I like writing tutorials and tips that can help other developers.I am also working as full stack developer";

console.log(str.substring(1,100));

console.log(str.substring(10,0));


//slice example
console.log('\n\n');
console.log(str.slice(1));
console.log(str.slice(10,0)); // no output start shouldn;t be greater then end


// substr 
console.log(str.substr(3,3));
let name = "amit";

console.log(name[0].toUpperCase() + name.slice(1));