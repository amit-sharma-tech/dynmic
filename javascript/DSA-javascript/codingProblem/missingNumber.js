function missingNumber(arr, N) {
    /* if(arr.length > 0){
        let sumTotal =  N* (N + 1)/2;
        let sum = 0;
        console.log(arr);
        for(let num in arr){
            sum = sum + arr[num];
        }   
        return result =  sum - sumTotal; 
    } */

    let total = Math.floor((N + 1) * (N + 2)/2);
    for(let i = 0; i < N ; i++ ){
        total -= arr[i];
    }
    return total;
}



// let arr = [1, 2, 4, 6, 3, 7, 8];
let  arr = [1, 2, 3, 5];
let length = arr.length;
let resp =  missingNumber(arr, length);
console.log(resp);
