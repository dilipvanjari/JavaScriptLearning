var showResult = function () {
console.log("show------");
};
showResult();
//we can store function as value
//ca this type of function using variable
var substraction= function (num1,num2) {
    var result = num1-num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(34,45);
console.log(result);