// arrow function with no aurgument and no return value.
let temp = ()=>{ 
    console.log(`hello`);
}
temp(); 

// this is arrow function with arguments.
let sum = (n1,m3)=>{
console.log(n1+m3);
}
// this is arrow function with argument and return value.
sum(2,1);
let mul =(n0,n1)=>{
    let multi = n0*n1;
    return multi;
}
let temp1= mul(3,8);
console.log(temp1);
// you can wright without curly braces if function contains only 1 line.
let add = (n,m)=>console.log(n+m);
add(6,3);

// you can wright without paranthisis if function contains only argument line.
let mult = n1=>{
    console.log(n1);
}
mult(200);