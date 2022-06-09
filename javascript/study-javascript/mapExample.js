/* let myUsers = [
    {
        name : 'Shark', likes : 'ocean'
    },
    {
        name : 'turtle', likes : 'pound'
    },
    {
        name : 'otter', likes : 'fish biscuits'
    }
];

let respData = myUsers.map((val,index,array) => {
    let container = {};
    if(val.name === "Shark"){
        container[val.name] = "Amit kumar";
        container.son= "Tejas Sharma" 
    }
    return container
});

console.log(respData); */


let arr = [2, 4, 6, 8, 10];

arr.map(function(element, index, array) {
    console.log(this);
},90)  ;

let arr1 = [2, 3, 5, 7]

arr1.map(function(element, index, array){
	console.log(this) // 80
}, 80);