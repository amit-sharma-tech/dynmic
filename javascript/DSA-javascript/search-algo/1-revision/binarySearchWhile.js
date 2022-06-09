const binarySearchW = (arr, target, lb, ub) => {

    while(ub >= lb){
        let mid = Math.floor(lb + (ub - lb)/2);

        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid]  > target){
            // lb = 0;
            ub = mid - 1;
        }
        else{
            // ub = mid;
            lb = mid + 1;
        }
    }
    return -1;
}

arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170]; 
let target = 50;
let result = binarySearchW(arr,target,0, arr.length - 1);
if(result == -1 ){
    console.log(`Element not found in array`);
}
else{
    console.log(`Element found at index ${result}`);
}

