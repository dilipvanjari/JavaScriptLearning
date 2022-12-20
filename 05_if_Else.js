console.log(`Boomm, booom`);
var isRoadBlock = false;
if (isRoadBlock) {
    console.log(`traveling through Exprsessway`);
    console.log(`travel will be short for just for 2 hours`);
} else {
    console.log(`traveling through tunnel`);
    console.log(`travel will be long for just for 2 hours`);
} 

// function exp. with one org >>>age to check wheather he or she is eligible for voting 
var temp= function (age) {
    if (age>=18) {
        console.log(`you are eligible for vote: ${age}`);
    } else {
           if (age<=17 || age>=70) {
            console.log(`you are not eligible for vote`);
           } else {
            console.log('invalid data');
           }        
    }
}
temp(14);
temp(35)