const sbiBank={
      bankName:"State Bank Of India,",
      locatio:"shivaji Nagar, pune,",
      accountNo:"1234567890,",
      ifsc:"SBIN011110,",
      interestRate:"14%,",
      showDetails:function() {
        return this.bankName+this.locatio+this.accountNo+this.ifsc+this.interestRate;
      }
}
const axisBank={
    bankName:"Axis Bank,",
    location:"Ring Road Jalgoan,",
    accountNo:"1234567891,",
    ifsc:"ASBI01234,",
    interestRate:"12%,",
    showDetails:function() {
        return this.bankName+this.location+this.accountNo+this.ifsc+this.interestRate;
      }
}

const hdfcBank={
    bankName:"HDFC Bank",
    location: "Warli Mumbai",
    accountNo:"1234567892",
    ifsc:"HDFCI012340",
    interestRate:"8.5%",
    showDetails:function() {
       return  this.bankName+this.locatio+this.accountNo+this.ifsc+this.interestRate;
      }
}
const yesBank={
    bankName:"Yes Bank",
    location:"Rob Garden Bengalore",
    accountNo:"1234567893",
    ifsc:"YSBI0123412",
    interestRate:"11%",
    showDetails:function() {
        return this.bankName+this.locatio+this.accountNo+this.ifsc+this.interestRate;
      }
}
console.log(`-----------------------------------------------------------------------------------------------------------------------------------`);
console.log(sbiBank);
console.log(`-----------------------------------------------------------------------------------------------------------------------------------`);
console.log(axisBank);
console.log(`-----------------------------------------------------------------------------------------------------------------------------------`);
console.log(hdfcBank);
console.log(`-----------------------------------------------------------------------------------------------------------------------------------`);
console.log(yesBank);
console.log(`-----------------------------------------------------------------------------------------------------------------------------------`);
let temp3=sbiBank.showDetails();
console.log(temp3);
console.log(`-----------------------------------------------------------------------------------------------------------------------------------`);
let temp4=axisBank.showDetails();
console.log(temp4);
console.log(`-----------------------------------------------------------------------------------------------------------------------------------`);
let temp5=hdfcBank.showDetails();
console.log(temp5);
console.log(`-----------------------------------------------------------------------------------------------------------------------------------`);
let temp6=yesBank.showDetails();
console.log(temp6);
