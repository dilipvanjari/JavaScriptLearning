console.log(`---------------------------- while loop print 50 to 5 value ----------------------`);
var temp=50;
while (temp>=5) {
    console.log(temp);
    temp=temp-5
}

console.log(`----------------------- Do while loop print 50 to 5 value --------------------`);
var temp2=50;
do {
    console.log(temp2);
    temp2=temp2-5;
} while (temp2>=5);

console.log(`----------------------- Do while loop print 70 to 7 value --------------------`);
var temp3=70;
do {
    console.log(temp3);
    temp3=temp3-7;
} while (temp3>=7);

console.log(`----------------------- Infinite loop --------------------`);
while (true) {
 console.log(`Hello`);   
}

for (; ; ) {
console.log(`Hello`);
}