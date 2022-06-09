const binarySearchRec = (arr, target, lb, ub) => {

    if(ub  >= lb){

        let mid = Math.floor(lb + (ub - lb)/2);

        if(arr[mid] === target){
            return mid;
        }   
        console.log(arr[mid],'**');
        if(arr[mid] > target){
            return binarySearchRec(arr,target,lb, mid - 1);
        }
        else{
            return binarySearchRec(arr, target, mid + 1, ub);
        }
    }
    return -1;
}


arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170]; 
let target = 170;
let result = binarySearchRec(arr,target,0, arr.length - 1);
if(result == -1 ){
    console.log(`Element not found in array`);
}
else{
    console.log(`Element found at index ${result}`);
}

