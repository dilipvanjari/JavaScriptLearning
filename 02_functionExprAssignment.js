var square=function (num) {
    var result = num * num;
    console.log("square of number",num,"=",result);
    return result;
}
var result=square(5);
square(6);
square(25);
square(100);
console.log("-------------------------------------------");
console.log("type of square is=", typeof square)
console.log("-------------------------------------------");
var area= function(num1,num2){
    var triangle= num1*num2;
    console.log("area of rectangle is ",triangle);
}
area(499,917)
console.log("--------before swap-------------------");
var swapValues= function(value1,value2){
   console.log(value1,value2);
}
swapValues("virat","Anushka")
console.log("--------Aftre swap-------------------");
var swapValues= function(value1,value2){
    var temp = value1;
    value1=value2;
    value2=temp;
    console.log(value1,value2);
}
swapValues("virat","Anushka")
console.log("-------------------------------------------");
var dil="JS the most popular language"
console.log(dil);
console.log("Total character Available in String is=",dil.length);
console.log("The character at index 6 is=", dil.charAt(6));
console.log("the character at index 11 is=",dil.charAt(11));
var totalLenth=dil.length;
console.log("The last character is",dil.charAt(totalLenth-1));
console.log("The first character is=",dil.charAt(0));

