function Bank(bankName, Location, ifscCode, branchCode){
    this.bankName = bankName;
    this.Location = Location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
let yesBank = new Bank("YesBank", "Pune","YESB01231", "yesp1231")
let temp = Bank.prototype.openingTime = "9 AM IST";
let temp2 = Bank.prototype.closingTime = "6 PM IST";
console.log(temp);
console.log(yesBank);
console.log(`opening time & closing time of Bank: "${temp}`);
let sbiBank = new Bank("State Bank Of India", "Mumbai", "SBIN085", "sb1536538");
console.log(sbiBank);
console.log(`opening time & closing time of Bank: "${temp}`);
let axisBank = new Bank("Axis Bank", "Bengalore", "ASB123434", "ab6526");
console.log(axisBank);
console.log(`opening time & closing time of Bank: "${temp}`);
let mahBank = new Bank("Maharastra Bank", "Jalgoan", "MHB015246", "mh9782216");
console.log(mahBank);
let temp1 = sbiBank.bankName;
console.log(`opening time of "${temp1}" "${temp}" And Closing Time is: "${temp2}` );
let temp3 = axisBank.bankName;
console.log(`Closing Time Of "${temp3}" Is "${temp2}`);
let temp4 = yesBank.bankName;
let temp5 = yesBank.branchCode;
console.log(`Branch Code Of : "${temp4} is : "${temp5}" And Open Time Is: "${temp}"`);