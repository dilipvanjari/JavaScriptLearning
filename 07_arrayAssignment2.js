const arrayNumbers=[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`The Length Of Array is: "${arrayNumbers.length}"`);
console.log(`---------------------- First and last number of Array ---------------------------`);
console.log(`The First Number Is: "${arrayNumbers[0]} And Last Number Is:"${arrayNumbers[10]}"`);
console.log(`----------------- third last Element of Array Using length proper ---------------`);
var temp=arrayNumbers[arrayNumbers.length-3];
console.log(`third last Number of Array Is: "${temp}`);
console.log(`---------------------- Sum Of All Numbers using for loop ------------------------`);
let  sumOfSal=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumOfSal=sumOfSal+element;
    
}
console.log(`The Sum Of All Numbers Is: "${sumOfSal}"`);
console.log(`---------------------- checking using include() --------------------------------`);
var temp1=arrayNumbers.includes(115);
console.log(`Is Number 115 Available in Array: "${temp1}"`);
var temp2=arrayNumbers.includes(23);
console.log(`Is Number 23 Available in Array: "${temp2}"`);
console.log(`--------------------- insertion of value using splice() ------------------------`);
console.log(`array Before adding: "${arrayNumbers}"`);
var temp3=arrayNumbers.splice(3,0,55,66)
console.log(`adding values 55,66 before index 3: "${arrayNumbers}"`);
console.log(`--------------------- Removing value using splice() ------------------------`);
console.log(`array Before adding: "${arrayNumbers}"`);
var temp4=arrayNumbers.splice(4,3);
console.log(`Removing Values From Index 4: "${arrayNumbers}"`);