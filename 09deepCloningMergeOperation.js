const car = {
    carName : "Creta SX",
    company : "Hundai",
    launchYear : 2017,    
}
const carEngine = {
    enginePower : "1499CC",
    maxPower : "113BHP",
}
console.log(`-----------------------merging object using Object.assign operator-----------------------`);
console.log(`Car Details :  `);
let temp1 = Object.assign(car,carEngine);
console.log(temp1);
console.log(`-----------------------merging object using spread operator-----------------------`);
console.log(`Car Details :  `);
let temp = {...car,...carEngine}
console.log(temp);
