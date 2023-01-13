// there are three type of object in JS.
//1)object literals, [key : value]
let person ={
    hieght:5,    
    weight:70,
    age:30,
    temp:function () {
        console.log(`Hay i can speak English and Hindi`);
    }
}
console.log(typeof person);
console.log(`------------------------How to access property from object -------------------------`);
const temp=person.age;
console.log(temp);
const temp1=person["age"]
console.log(temp1); // other way to access property
console.log(`------------------------How to add property in object -------------------------`);
person.company = "ACL digital",
console.log(person);
person.city="pune",
console.log(person);
console.log(`------------------------How to update present property in object -------------------------`);
person.age=65;
console.log(person);
console.log(`------------------------How to delete property in object -------------------------`);
delete person.weight;
console.log(person);
console.log(`------------------------Creating An empty object and adding properties, -------------------------`);
const mobile= {


}
mobile.company="samsung";
mobile.camera="48px";
console.log(mobile);
console.log(`------------------------adding function in object -------------------------`);
console.log(person);
console.log(`------------------------How To Access function form an object -------------------------`);
person.temp();
console.log(`------------------------nested object -------------------------`);
const ideal={
    name: "steve job",
    age: "50",
    marks:{
        Math:90, // this is call entry
        science:70,
        English:87,
        add:function () {
            return this.English+this.Math+this.science;
        }
    } ,
    array:["will","tony", "clark","Herminie"]
}
console.log(`------------------------Accessing property from nested object -------------------------`);
temp3=ideal.marks.Math;
console.log(temp3);
console.log(`------------------------updating property in nested object -------------------------`);
ideal.marks.English=97;
let temp4=ideal.marks.English;
console.log(temp4);
console.log(`------------------------deleting property from nested object -----------------------`);
//delete ideal.marks.English;
console.log(ideal);
console.log(`------------------------Adding property in nested object ---------------------------`);
ideal.marks.programing=100;
console.log(ideal);
console.log(`------------------------Accessing nested object function ---------------------------`);
let temp6=ideal.marks.add();
console.log(temp6);
console.log(`------------------------Accessing array in objec -----------------------------------`);
console.log(ideal.array);
console.log(`------------------------object entries----------------------------------------------`);
let billgate={
    name:"billgates",
    hieght:"5.6",
    weight:"65",
    age:"56",
    company: "microsoft",
    valuetion:"130B$",
}
console.log(Object.entries(billgate));
console.log(Object.keys(billgate));
console.log(Object.values(billgate));
console.log(`----------------------------------------for in loop-------------------------------------------`);
for (const key in billgate) {
    if (Object.hasOwnProperty.call(billgate, key)) {
        const element = billgate[key];
        console.log(key,element);
        
    }
}
console.log(`---------------------------how to check property available or not using in operastor ----------------------------`);
let temp21="hieght" in billgate;
console.log(temp21);
if (temp21) {
    delete billgate.hieght;
    console.log(`height property is deleted successfully`);
} else {
    console.log(`not deleted`);
}
/*myName=[11, 22, 76, 66, 98, 90];
console.log(myName);
for (let index = 0; index < myName.length; index++) {
    if (index%2==0) {
        const element = myName[index]; 
        console.log(element);
    }
    
    
}*/