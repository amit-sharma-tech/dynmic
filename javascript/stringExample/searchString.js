let str =  "My name is Devendra Dode. I am a full-stack developer, entrepreneur, and owner of Tutsmake.com. I like writing tutorials and tips that can help other developers.I am also working as full stack developer";


let resp = str.indexOf('name');
console.log(resp);

// list of occurance

let pos = 0;
while(true){
    let strVal = str.indexOf('am',pos);
    if(strVal == -1){
        break;
    }
    console.log(`Matched str at the index ${strVal}` );
    pos = strVal + 1;
}





