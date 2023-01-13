console.log(`-------------------------------Empty Object-------------------------------------------`);
const professor={
  degree:{
    degree1:"Engineering,",
    degree2:"CSC,",
    degree3:"Phd,",
    degree4:"advComputing,",
    degree5:"dataScience,",
    add:function() {
      return this.degree1+ this.degree2 + this.degree3 + this.degree4 + this.degree5;
    }
  }  ,   
  certificate:{
    cetrificate1:"Hacker Rank",
    certificate2:"IFE Course",
    certificate3:"adv Programing",

  }
     }
console.log(professor);
console.log(`----------------------------------adding property to object----------------------------`);
professor.name="Ganesh";
professor.subject="Programin";
professor.age="40";
console.log(professor);
console.log(`----------------------------------adding nested object----------------------------`);
console.log(professor);
console.log(`----------------------------------professor degrees----------------------------`);
let temp=professor.degree.add();
console.log(temp);
console.log(`----------------------------------adding new property in object----------------------------`);
professor.award="Best programer";
console.log(Object.values(professor));
console.log(`----------------------------------updating property in object----------------------------`);
professor.age=50;
console.log(professor);
console.log(`----------------------------------deleting property in object----------------------------`);
delete professor.certificate.certificate2;
console.log(professor);
console.log(`----------------------------------adding property in object----------------------------`);
professor.certificate.certificate2="hacker";
let temp1=professor.certificate.certificate2;
console.log(`new added certification: "${temp1}"`);
console.log(`--------------------logging nested property certificate o console--------------`);
let temp2=professor.certificate;
console.log(temp2);