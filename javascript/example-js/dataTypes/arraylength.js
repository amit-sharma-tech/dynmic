/* let fruits = ['Apple', 'Orangee', 'plum'];


console.log(fruits.length);
console.log(fruits.at(-1));
 */

let fruits = ['Mongo'];

let arr = fruits;

if(arr = fruits){
    console.log('HI');
}
else{
    console.log('NO');
}

arr.push('Apple');

arr.age = 40;

console.log(arr,'-----', fruits);


for(let ar of arr){
    console.log(ar);
}
console.log('\n\n');
for(let ar in arr){
    console.log(arr[ar]);
}
