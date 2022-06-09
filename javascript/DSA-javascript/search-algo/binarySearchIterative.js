let binarySearch = function(arr, target) {

    let mid;
    let ub = arr.length - 1;
    let lb = 0;
    while(ub >= lb){

        // let mid = lb + Math.floor((ub - lb)/2);
        mid = lb + Math.floor((ub - lb)/2);

        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid > target]){
            ub = mid - 1;
        }
        else{
            lb = mid  + 1;
        }

    }
    return -1;
}

//call fucntion
// console.log(binarySearch(),'0000');
arr =new Array(2, 3, 4, 10, 40);
x = 10;
    n = arr.length;
    result = binarySearch(arr, x);
(result == -1)
    ?   console.log("Element is not found in array")
    :   console.log("Element is found at index "  + result);