const linerSearchWorstCase = (arr,target,length) => {
    let left = 0;
    let right = length - 1;
    let position = 0;

    for(left = 0; left < right;){

        if(arr[left] === target){
            position = left;
            console.log(`Element found from left at index ${position  + 1 } and ${left + 1} attempts`);
            break;
        }

        if(arr[right] === target){
            position = right;
            console.log(`Element found  from right at index ${position  + 1 } and ${length -  right} attempts`);
            break;
        }

        left++;
        right--;
    }
}

const arr = [10, 20, 80, 30, 60, 50, 
    110, 100, 130, 170];
const target = 110;

let length = arr.length;
linerSearchWorstCase(arr,target,length);