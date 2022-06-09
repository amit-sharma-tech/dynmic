/* const arr = [2, ,4, 6, 8, 10, 40, 50,55,65];

const filtered = arr.filter((ele) => {
    if(ele === 8 || ele === 10){
        return ele;
    }
});

console.log(filtered);
 */


/* const arr = [4, 6, 10,90,45,23,89];

let filtered = arr.filter(ele => ele === 10 || ele === 45);

console.log(filtered); */

let arr = [
    {name  : "amit", age  :40, address : 'Delhi'},
    {name : 'Tejas' , age  : 56, address : 'Thawe' },
    {name : 'Mamta' , age : 20, address : 'Patna'}
];

let respData = arr.filter((val,inde) => {
    if(val.name === 'Tejas') {
        return val;
    }
});

console.log(respData);


