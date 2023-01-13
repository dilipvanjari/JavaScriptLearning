class Vehicle{
constructor (name,brand,colour,engine,milage){
    this.name= name;
    this.brand=brand;
    this.colour=colour;
    this.engine=engine;
    this.milage=milage;
}
}
let temp = new Vehicle("H250","Herlay Davidson","Blue","250CC",36);
let temp2 = new Vehicle("shine","Honda","Gray","125CC",50);
let temp3 = new Vehicle("Extreme","Hero","Black","200CC",40);
let temp4= new Vehicle("Indica ECS","TATA MOTORS","Red","1200CC", 20)
let temp5= new Vehicle("Thar","Mahindra","Dark Red","1500CC",10)
console.log(temp);
console.log(temp2);
console.log(temp3);
console.log(temp4);
console.log(temp5);
console.log(`-------------------------------- Collage Details ------------------------------`);
class Collage{
    constructor(name,location,Branches,campus,Activity){
            this.name= name;
            this.location= location;
            this.Branches=Branches;
            this.campus=campus;
            this.Activity=Activity;
          



    }
    details(){
        console.log(this.name,this.Location,this.Branches,this.campus,this.Activity);
       }
}
let temp6= new Collage("Godavari Collage Of Engineering","Jalgoan","EEE,CS,IT,E&TC,CIVIL","Acers 10","Sports");
let temp7= new Collage("A.G,R.Garud","Shendurni","Art,Commerce,Science","Acers 20","Gathering");
let temp8= new Collage("ABC","Jalgoan","Nursing","Acers 5","Sareeday");
let temp9= new Collage("SSBT","Jalgoan","EEE,CS,IT,E&TC,CIVIL","Acers 10","Sports");
let temp10= new Collage("NMU","Jalgoan","All","Acers 50","sports,Gathering, etc");
temp6.details();
temp7.details();
temp8.details();
temp9.details();
temp10.details();