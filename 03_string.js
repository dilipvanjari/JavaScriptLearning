var name = "dilip A. pawar"
console.log(name);
console.log("lenth of string",name.length);
console.log("character at index 5 is ", name.charAt(6));
var totalLength = name.length;
console.log("character at last index",name.charAt(totalLength-1));

var greet="good morning afternoon sir"
var indexof = greet.indexOf("f");
console.log("index of substring t:",indexof);

var per= "may i come in sir";
var op=per.indexOf("om");
console.log("index of substring (om) is :",op);
console.log("-------replace word using (.replace)------");
var temp= "good morning";
var ex= temp.replace("mor","eve");
console.log("after replacement good morning is :",ex);

var last="      good morning      ";
console.log("before trim length os last:",last.length);
var trm = last.trim();
console.log("result after trim is :",trm,trm.length);
console.log("----------------(.Slice(0,3))---------------");
var dl="good morning";
var dp=dl.slice(0,4)
console.log(dp);
console.log(dl.slice(5));
console.log("slice with negatvive -,", dl.slice(-2,-7));
console.log("----------------includes---------------");
var temp= "good mrning"
var son=temp.includes("good");
console.log(son);
console.log("----------------(.touppercese)---------------");
var upper="good morning";
var casechange=upper.toUpperCase();
console.log(casechange);
console.log("----------------(.tolowercese)---------------");
var lower= "GOOD MORNING";
var caselow=lower.toLowerCase();
console.log(caselow);
console.log("----------------(.split)---------------");
var studlist="jatin,divya,virat,samru,chimani";
var studsplit=studlist.split(",")
console.log(studsplit);
console.log("----------------(hot get total word in sentence)---------------");
var sentence="yes you can do it guys, just keep learning and practicing as wel";
var sentenceSplit= sentence.split(" ");
console.log(sentenceSplit);
console.log(sentenceSplit.length);
console.log("----------------(string templet use it using ``)---------------");
var star=`yes you can do it "sanket"`;
console.log(star);
console.log("----------------( substitution of variable in strinf using ``)---------------");
var name1= "dilip";
var name2= "ajamal";
console.log("first name is : "+name1+ "last name is "+name2);
console.log(`first name is: ${name1} and last name is: ${name2}`);
console.log("----------------( for printing on next line use \n)---------------");
console.log("hello","\n5good","\nhelp");



var name= function(num1,num2,city){
    var result=num1*num2;
    return result;

}
var res=name(10,20,"pune")
console.log(res);