/* let names = {
    fname : 'Tejas',
    lname : 'Sharma'
};

console.log(names.fname);
console.log(names.hasOwnProperty("lname"));
console.log(names.valueOf()); */


function Animals(name, specie) {
    this.name = name;
    this.specie = specie;
}
Animals.prototype.sing = function(){
    return `${this.name} can sing`;
}
Animals.prototype.dance = function() {
    return `${this.name} can dance`;
}
let Bingo = new Animals("Bingo", "Hairy");