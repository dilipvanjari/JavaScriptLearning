console.log(`----------------- Normal Loop Statment -----------------------------------------`);
var temp=0;
while (temp<=10) {
    console.log(temp);
    temp=temp+1;
}

console.log(`----------------- Use Of Break Statment In While Loop-----------------------------------------`);
// if we want to stop at prticuler step or number user break statment
var temp=0;
while (temp<=10) {
    console.log(temp);
    if (temp==5) {
        break;
    }
    temp=temp+1;
}

console.log(`----------------- Use of Break Statment In for Loop -----------------------------------------`);
for (let index = 0; index <=20; index=index+1) {
console.log(index);
if (index==12) {
    break;
}
    
}

console.log(`----------------- Use of Continue Statment In for Loop -----------------------------------------`);
for (let index = 0; index <=20; index=index+1) {
console.log(index);
if (index==12) {
    continue;
}
    
}