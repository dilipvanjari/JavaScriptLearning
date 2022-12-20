console.log(`-------------------voting Eligibility check----------------------------`);
var temp= function (age) {
    if (age<=0 || age>90) {
        console.log(`invalid data: ${age}`);
    } else {
        if (age>=18) {
            console.log(`congratulations you are eligible for vote if you are older than 18: ${age}`);
        } else {
            console.log(`sorry you are not eligibile for vote if less than 18: ${age}`);
        }
    }
    
}
temp(45);
temp(17);
temp(8);
temp(20);
temp(10);
temp(200);
temp(0);

console.log(`-------------------Grade calculation----------------------------`);
var temp2= function gradeCalculation(marks) {
    if (marks<=0 || marks>100) {
        console.log(`Please Provid Valid Marks: ${marks}`);
    } else {
        if (marks>=90) {
            console.log(`Fantastic Marks: ${marks} Your Grade Is A+`);
        } else {
            if (marks>=75) {
                console.log(`Excellent Marks: ${marks} Yor Grade is A`);
            } else {
                if (marks>=50) {
                    console.log(`Good Mrks: ${marks} Your Grade Is B`);
                } else {
                    if (marks>=35) {
                        console.log(`Mark Is: ${marks} Your Grade Is C, Need Improovement`);
                    } else {
                        console.log(`Sorry Your Are Fail: ${marks}`);
                    }
                    
                }
                
            }
        }
        
    }
}
temp2(98);
temp2(80);
temp2(90);
temp2(0);
temp2(150);
temp2(-7);
temp2(35);
temp2(29);
temp2(64);
temp2(64);
temp2(49);
temp2("91");
temp2("Eighty");