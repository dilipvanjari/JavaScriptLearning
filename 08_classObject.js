const employeei={
    name:"prathmesh",
    id:123432,
    age:30,
    city:"pune",

}

const employeed={
    name:"prathmesh",
    id:123432,
    age:30,
    city:"pune",

}
const employees={
    name:"prathmesh",
    id:123432,
    age:30,
    city:"pune",

}
console.log(`-------------------instead of eringhting same properties you can use class--------------------`);
class Employee{
    name   //you can remove this
    id    //you can remove this
    age    //you can remove this
    city   //you can remove this
      constructor(name,id,age,city){
        this.name=name;
        this.id=id;
        this.age=age;
        this.city=city;
      }
      details(){
        console.log(this.name,this.id,this.age,this.city);
      }
}
let smith= new Employee("smith",1,23,"pune");
let poonam= new Employee("poonam",2,19,"pune");
let creta = new Employee("Creta",3,17,"new york")
//console.log(smith);
//console.log(poonam);
//console.log(creta.age,creta.city,creta.name,creta.id);

smith.details();
poonam.details();