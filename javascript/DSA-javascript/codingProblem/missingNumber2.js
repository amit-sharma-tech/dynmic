function missingNumber(arr, N){
    let x1 = arr[0];
    let x2 = 1;

    for(let i = 1;  i < N; i++ ){
        x1 = x1 ^ arr[i];
    }

    for(let j = 2; j <= N; j++){
        x2 = x2 ^ 1;
    }

    return x1 ^ x2;

}

let arr = [1, 2, 4, 5, 6];

let length = arr.length;

let result = missingNumber(arr, length);
console.log(result);