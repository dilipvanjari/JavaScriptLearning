let arrayOfNum =[0, 2, 4, 6, 8];
let num = arrayOfNum;  // this is shallow cloning
num[1]= 10;
console.log(arrayOfNum);
console.log(num);
console.log(`----------------deep cloning-----------------------------`);
clone= [...arrayOfNum];// this is deep cloning.
clone[2]=100;
arrayOfNum[2]=200;
console.log(clone);
console.log(arrayOfNum);
console.log(`---------------- deep cloning concatination  -----------------------------`);
let temp = arrayOfNum.concat(clone);
console.log(temp);
console.log(`----------------  concatination using spread operator -----------------------------`);
let temp1=[...arrayOfNum,...clone,1,2,3,4,];
console.log(temp1);