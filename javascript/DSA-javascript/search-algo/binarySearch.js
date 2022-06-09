function binarySearch(arr, lb, ub, target) {
    if(ub >= lb){
        
        let mid = lb + Math.floor((ub - lb)/2);

        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid] > target){
            return binarySearch(arr, lb, mid -1, target);
        }
        else{
            return binarySearch(arr, mid + 1, ub, target);
        }
    }

    return -1;
}

//call fucntion

const arr = [ 2, 3, 4, 10, 40 ];
const target = 2;

let result = binarySearch(arr,0,arr.length - 1, target);
(result == -1)
    ?   console.log("Element is not found in the array")
    :   console.log("Element is found at index "  +result);