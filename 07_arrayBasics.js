let arrayofnames=[];// Thia Is Empty Array
// what is array :----> collection of element
console.log(arrayofnames);
let arrayOfNumbers=[5,10,4,6,7,10,6];
console.log(arrayOfNumbers);
// hot find length
console.log(`----------------total number of element in array--------------`);
var temp=arrayOfNumbers.length;
console.log(`Total Element In array: ${temp}`);
// hot find type of array
var temp2=typeof arrayOfNumbers;
console.log(`type of array is : ${temp2}`);
// Object data type= it can contain different data types ex string ,boolean, number 
console.log(`----------------Accessing element in array--------------`);
var temp3=arrayOfNumbers[0];
console.log(`Element At 0 index Is: ${temp3}`);
console.log(`Element At 0 index Is: ${arrayOfNumbers[4]}`);
console.log(`The Last Element of Index is: ${temp-1}`);
console.log(`----------------update or modify value using index in array--------------`);
arrayOfNumbers[2]=100;
console.log(arrayOfNumbers);
console.log(`----------------how to find index in array--------------`);
var temp4=arrayOfNumbers.indexOf(7);
console.log(`index of 7 is: ${temp4}`);
console.log(`---------------- traversing element using for loop--------------`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);    
}
console.log(`---------------- how to find even number using for loop--------------`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayOfNumbers[index];
        console.log(element);    
    }
}
console.log(`---------------- traversing even value using for loop--------------`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}
console.log(`---------------- traversing arry using for loop in reverse order --------------`);
let temp5=arrayOfNumbers.length-1;
for (let index = temp5; index >=0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
}

[10000,20000,30000,20000,40000]; // this is non reference array or undefined array
let arrayOfSalleries=[10000,20000,30000,20000,40000];
let sumOfSal=0;
for (let index = 0; index < arrayOfSalleries.length; index++) {
    const element = arrayOfSalleries[index];
    sumOfSal=sumOfSal+element;
}
console.log(`Total Sum Of Sallery Is:${sumOfSal}`);

console.log(`---------------- how to add element in array at last using Push() --------------`);
let temp6=[4, 5, 6, 8, 9, 1];
console.log(temp6);
temp6.push(3,11,22,33);
console.log(temp6);
console.log(`---------------- how to add element in array at start using Unshift() --------------`);
let temp7=[4, 5, 6, 8, 9, 1];
console.log(temp7);
temp7.unshift(77,99,111,333);
console.log(temp7);
console.log(`---------------- how to remove element at last using pop() --------------`);
let temp8=[4, 5, 6, 8, 9, 33];
var temp9=temp8.pop();
console.log(temp9);
console.log(temp8);

console.log(`---------------- how to remove element at start using shift() --------------`);
let temp10=[4, 5, 6, 8, 9, 33];
var temp11=temp10.shift();
console.log(temp11);
console.log(temp10);

console.log(`---------------- how to reflect middle element using slice() --------------`);
let temp12=[4, 5, 6, 8, 9, 33, 66];
let temp13=temp12.slice(3);
let temp14=temp12.slice(2,5)
console.log(temp12);
console.log(temp13);
console.log(temp14);

console.log(`---------------- how to reflect middle element using splice() --------------`);
let temp15=[4, 5, 6, 8, 9, 33, 66];
console.log(temp15);
console.log(`after spilce using result is`);
let temp16=temp15.splice(3);
console.log(temp15);
console.log(`Array after deleting element`,temp15);
console.log(`Total deleted elements:`,temp16);

let temp17=[4, 5, 6, 8, 9, 33, 66];
console.log(temp15);
console.log(`after spilce using result is`);
let temp18=temp17.splice(2,4);
console.log(temp17);
console.log(`Array after deleting element`,temp17);
console.log(`Total deleted elements:`,temp18);

console.log(`---------------- how to insert middle element using splice() --------------`);
let temp19=[4, 5, 6, 8, 9, 33, 66];
console.log(temp19);
let temp20=temp19.splice(2,0,88)
console.log(temp19);
let temp21=temp19.splice(1,0,55,99,22);
console.log(temp19);

console.log(`---------------- how to replace element using splice() --------------`);
let temp22=[4, 5, 6, 8, 9, 33, 66];
console.log(temp22);
temp22.splice(3,1,22);
console.log(temp22);
temp22.splice(2,3,99,77);
console.log(temp22);

console.log(`--------use of (for of loop) in array -----------------`);
let temp23=[4, 5, 6, 8, 9, 33, 66];
console.log(temp23);
for (const element of temp23) {
    console.log(element);
}

console.log(`------------- hown to check value pressent or not in array using include() --------`);
let temp24=[4, 5, 6, 8, 9, 33, 66];
var temp25=temp24.includes(9);
console.log(temp25);

console.log(`---------------------------------- hown to use join() -----------------------------`);
let temp26=[4, 5, 6, 8, 9, 33, 66];
let joinRes=temp26.join("/");
console.log(joinRes);
console.log(`----------------------------- concating Array() ---------------------------------`);
var temp27=[4, 5, 6, 8, 9, 33, 66];
var temp28=["mumbai","dehli","chennai","kolkata","benglore"]
var temp29=["pune","jenny","cloud","dust"];
let temp30=temp27.concat(temp28,temp29);
console.log(temp30);
console.log(`---------------------------------- hown to resize array -----------------------------`);
let temp31=[4, 5, 6, 8, 9, 33, 66];
console.log(`before resize ${temp31}`);
var temp32= temp31.length=5;
console.log(`after resize ${temp32}`,temp31);
var temp33=temp31.length=10;
console.log(`maximizing array ${temp33}`,temp31);