//if ssc marks is greater than or equal to 35 then pass or fail.

var temp =25;
var temp1= temp>=35 ? "pass" : "fail";
console.log(temp1);

var step= function(mark){
    var dream= mark>=35 && mark<100? "pass" : "fail";
    return dream;
}
console.log(`The Rersult for 24 Is: ${step(24)}`);
console.log(`The Rersult for 54 Is: ${step(54)}`);
console.log(`The Rersult for 120 Is: ${step(120)}`);