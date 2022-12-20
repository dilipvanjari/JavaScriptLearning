function squareOfWordLength(val){
var temp=val.length;
var temp1=temp*temp;
console.log(`The Length of Word "JavaScript" is:${temp} and its squre is: ${temp1}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart")
console.log("---------------------------------fuction expression---------------------------------------");
var temp2= function(){
 var temp3="I Am Angular Developer";
 var temp4=temp3.length;
 var temp5= temp3.split(" ");
 var temp6=temp5.length;
 var temp7= temp4/temp6;
 var temp8= temp4*temp6;
 console.log(`the length of string is ${temp4} and total word in string is: ${temp6}`);
 console.log(`After deviding length by total word the ans is :${temp7}`);
 console.log("------------------------------multiplication---------------------------------------");
 console.log(`After multiplying String length by total word: ${temp8}`);

}
temp2();