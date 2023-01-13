const temp = new Map(); // creating map
temp.set(2,"two");      // adding key and values
temp.set(11, "Eleven");
temp.set(22, "tentyTwo");
console.log(temp);
let eleven = temp.get(11);  //accessing value
console.log(eleven);
temp.delete(22);           //deleting values
console.log(temp,);