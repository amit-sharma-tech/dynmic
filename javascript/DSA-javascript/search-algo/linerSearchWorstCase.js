function search(arr,target) {
    let n = arr.length;
    let left = 0;
    let right = arr.length -1;
    let i;
    for(i = 0; i < n; i++){
        if(arr[left] == target){
            return left;
        }

        if(arr[right] == target){
            return right
        }

        right--;
        left++;
    }
    return -1;
}

let arr = [2,3,4, 10 , 20, 55];
let target = 100;
let result = search(arr,target);
(result == -1)
    ? console.log("Element is not found in array")
    : console.log("Element is found at index " + result);