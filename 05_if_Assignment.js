var temp= function (age) {
    if (age<=0 || age>120) {
        console.log(`if age is greater than 120: ${age}, invalid data`);
    }
    if (age>=18 && age<=120) {
        console.log(`your age is: ${age} you can vote`);
    }
    if(age<18 && age>0){
        console.log(`if your age is: ${age}, you are not eligible for vote`); 
    }
}
temp(20)
temp(89)
temp(1500)
temp(0)
temp(-10)

function gradeCalculation(marks) {
    if (marks<=0 || marks>100) {
        console.log(`please provide valid date`);
    }
    if (marks>=90 && marks<100) {
        console.log(`Excelent performence`);
    }
    if (marks>=75 && marks<=90) {
        console.log(`congratulations your are outstanding`);
    }
}
gradeCalculation(78)
gradeCalculation(98)