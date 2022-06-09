const searchingRec = (arr,target,i ) =>{
    let length = arr.length;
    if(i > length){
        return -1;
    }
    if(arr[i] === target){
        // console.log(arr[i], target);
        return arr[i];
    }
    
    searchingRec(arr,target,i+1);
}


const arr = [10, 20, 80, 30, 60, 50, 
    110, 100, 130, 170];
const target = 110;

let length = arr.length;
let i = 0;
let result = searchingRec(arr,target,i);
console.log(result);
if(result === -1){
    console.log(`No found element`);
}
else{
    console.log(`Element found at index ${result}`);
}
