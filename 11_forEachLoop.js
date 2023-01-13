const temp = [10, 3, 4, 50, 6];
temp.forEach(function(currentValue, index, array){
console.log(currentValue, index, array);    
});
temp.forEach(function(currentValue){
    console.log(currentValue);
});
temp.forEach((currentValue)=>console.log(currentValue));
const array =[2,3,4,5,6,7,34,57];
console.log(array);
array.forEach((currentValue)=>{
    if (currentValue%2==0) {
        console.log(currentValue);
    }
})