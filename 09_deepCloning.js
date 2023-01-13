console.log(`----------------depp cloning using spread operator(...)----------------`);
let Employee = {
    name :"anil",
    age:"23",
    salarry: "70k",
}
console.log(Employee);
let jenny = Employee;//  this is shallow cloning
console.log(jenny);
let jonny = {...Employee}; // this is deep cloning using  spread operator(...) this is not able to clone nested object
jonny.name="jonny";
console.log(jonny);
console.log(`----------------depp cloning of nested object using JSON.stringify----------------`);
const studentStew ={
    sName: "stew",
    age : "50",
    marks : {
        science : "70",
        math : "90",
        english : "87",
    }
}
let bill = JSON.parse(JSON.stringify(studentStew));
console.log(studentStew);
bill.sName="bill";
console.log(bill)
studentStew.marks.science="85";
console.log(studentStew.marks.science);// property update
