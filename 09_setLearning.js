const setNumbers = new Set ();// set creation.
setNumbers.add(0);// adding element to set
setNumbers.add(1);
setNumbers.add(2);
setNumbers.add(3);
console.log(setNumbers);
console.log(`--------------------how to check set length------------------`);
let temp = setNumbers.size;
console.log(temp);
console.log(`--------------------how to delete value from set ------------------`);
let temp1 = setNumbers.delete(3);
console.log(temp1);// it will return true or false
console.log(`--------------------how to check value availalibity  from set ------------------`);
let temp2 = setNumbers.has(3);
console.log(temp2);

console.log(`--------------------how to clear set ------------------`);
let arrayEven = [ 2, 4, 6, 8];
let temp4 = arrayEven.length=[0];
console.log(temp4);
//setNumbers.clear();
//console.log(setNumbers);
console.log(`--------------------how to traverse set ------------------`);
for (const temp5 of setNumbers) {
    console.log(temp5);
}
console.log(`--------------------how to remove duplicate numbers from array ------------------`);
let temp5 = [2, 3, 4, 2, 3, 5, 6, 4,];
const mySet = new Set(temp5);
console.log(mySet);
