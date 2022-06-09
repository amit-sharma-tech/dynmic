/* const sweetArray = [2, 3, 4, 5, 35];
let resp = sweetArray.map(el => {
    return el * 2;
});

console.log(resp);


var arr = [{
    id: 1,
    name: 'bill'
  }, {
    id: 2,
    name: 'ted'
  }]
  
  var result = arr.map(person => ({ value: person.id, text: person.name }));
  console.log(result) */


  // conveting a String to an Array

  const name = "Amit";
  const map = Array.prototype.map;
//   console.log(map);

const newName = map.call(name,eachLetter =>{
    console.log(eachLetter,'------', name);
})