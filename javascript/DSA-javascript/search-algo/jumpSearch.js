function jupmSearch(arr,target, length) {
    
    let n = length;
    let step = Math.floor(Math.sqrt(n));

    let prev = 0;
    while(arr[Math.min(step,n)]){
        
    }

}


let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

let n = arr.length - 1;
// console.log(Math.floor(Math.sqrt(n)));
let target = 55;

let result = jupmSearch(arr, target, n);
(result == -1)
    ? console.log("Element is not found in array")
    : console.log("Element found at index " + result)