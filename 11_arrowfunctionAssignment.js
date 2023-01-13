console.log(`---------Arrow Function With No Arguments And No Return Value--------------------------------------`);
let temp = ()=>{
    console.log(`"Good Morning, Today Is Monday"`);
}
temp();
console.log(`------------------- With 3 Arguments And No Return values -----------------------------------------`);
let temp1 = (l1,m1,n1=1)=>{
    console.log(`The Result After Multiplication Of 3 Values Is : "${l1*m1*n1}"`);
}
temp1(5,5,2)
temp1(10,4)
console.log(`--------------arrow function with 5 arguments and return values------------------------------------`);
let temp2 = (m1,m2,m3,m4,m5)=>{
let temp3= m1+m2+m3+m4+m5;
return temp3;
}
let temp4 =temp2(100,100,200,349,756);
console.log(`Q3,A) After Adding All 5 values : "${temp4}"`);
let temp5 = temp2(`Q3.C) "I Am"`, `"learning"`, `"ES6"`,`'featurs'`, `"in Depth"`)
console.log(temp5);