const fruits_seasonal=["Banana", "Orange", "Apple", "Mango", "Water Melon"];
var temp=fruits_seasonal[0];
var temp1=fruits_seasonal[4];
console.log(`The First Element Of Array Is:"${temp}"\nThe Last Element Of Array Is: "${temp1}"`);
console.log(`----------------------------Adding Element using Unshift()------------------------------`);
fruits_seasonal.unshift("Papaya");
console.log(`Adding Papaya At Starting : ${fruits_seasonal}`);
console.log(`-------------------------------Adding Element using Push()------------------------------`);
fruits_seasonal.push("Pineapple");
console.log(`Addign Pineapple At Last : ${fruits_seasonal}`);
console.log(`--------------------Adding Element in middle using Splice()-----------------------------`);
fruits_seasonal.splice(5,0,"Dragonfruit");
console.log(`Adding Element in middle in Array: "${fruits_seasonal}"`);
console.log(`----------------------Replacing Element in middle using Splice()------------------------`);
fruits_seasonal.splice(2,1,"Kiwi")
console.log(`Replacing Element Orange By Kiwi: "${fruits_seasonal}"`);
console.log(`--------------------Reflecting Element using Splice()-------------------------- --------`);
fruits_seasonal.splice(1,4)
console.log(`Element From Index 1 to 4 is: "${fruits_seasonal}"`);
console.log(`--------------------Reflecting Last 3 Element using Splice()----------------------------`);
var temp3=fruits_seasonal.length;
console.log(`The Length Of Array is: "${temp3}"`);
temp4=fruits_seasonal.splice(1);
console.log(`Last 3 Element Of Array is:${temp4}`);