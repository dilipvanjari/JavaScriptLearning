const array_numbers = [1,-7,40,502,-77,91,0,108,89,-601];
array_numbers.forEach((currentValues, index)=>{
    console.log(currentValues, "And index is :", index)});
    console.log(`---------------------- Positive Values in Array --------------------------------------------------`);
array_numbers.forEach((currentValues)=>{
    if (currentValues>0) {
        console.log(`The Positive Values of Array Are : "${currentValues}"`);
    }
});
console.log(`---------------------- Negative Values in Array --------------------------------------------------`);
const array =[];
array_numbers.forEach((currentValues)=>{
    if (currentValues<0) {
        array.push(currentValues);
    };

});
console.log(array);
console.log(`---------------------- Negative Values in Array --------------------------------------------------`);
array_numbers.forEach((currentValues)=>{
    if (currentValues%2==0) {
        console.log(`Even Numbers in index is`, currentValues);
    }
});

console.log(`---------------------- Addition of Values in Array --------------------------------------------------`);
let tem2 = 0;
array_numbers.forEach((currentValues)=>{
    tem2 = tem2+currentValues
});
console.log(`The Sum Of All Element is : "${tem2}"`);