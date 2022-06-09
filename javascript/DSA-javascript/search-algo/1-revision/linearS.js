function forEachMethod(arr,target) {
    let result = false;
    arr.forEach((element,index) => {
        if(element === target){
            result =  index;
        }
    });
    return result;

}
/* const forEachMethod = (arr, target) => {
    let result = -1;
    arr.forEach((element,index) => {
      if (element === target) {
        result = index;
      }
    }); 
    return result;
  }; */

const arr = [10, 20, 80, 30, 60, 50, 
    110, 100, 130, 170];
const target = 110;
let result = forEachMethod(arr,target);
console.log(result,')))');
if(result == -1){
    console.log(`No element is found`);
}
else{
    console.log(`Element is found at ${result}`);
}
