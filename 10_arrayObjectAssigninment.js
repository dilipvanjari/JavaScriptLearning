class Bank {
    constructor (bankName, location, account_no, ifsc_code, interest_rate){
this.bankName = bankName;
this.location = location;
this.account_no = account_no;
this.ifsc_code = ifsc_code;
this.interest_rate = interest_rate;
    }
}
let axisBank = new Bank("Axis BAnk", "Pune", 12345678,"ASB1234", "14.5%");
let sbiBank = new Bank ("State Bank Of India", "Mumbai", 1234554321, "SBIN0321","9.5%");
let iciciBank = new Bank ("ICICI Bank", "Pune", 2345678901, "ICB012345", "12%");
let kotakBank = new Bank("Kotak Mahindra Bank", "Bengalore", 321456879, "KTB078965", "11%");
let hdfcBank = new Bank("HDFC Bank", "Delhi", 432109889, "HDFCB123097", "10%");
let panjabBank = new Bank("PAnjab National Bank", "Chandigar", 5678912430, "PNJB0432190", "13.5%");

console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);
console.log(
    `----------------------------------- Bank Name and Location using for of loop --------------------------------`
);
let bankDetails = [axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,panjabBank];
for (const temp of bankDetails) {
    console.log(`Bank Name : "${temp.bankName}" and Location is :"${temp.location}"`);
};
console.log(
    `---------------------------------------- find kotak bank using for of loop ----------------------------------- `
);
for (const temp1 of bankDetails) {
    if (temp1.bankName=="Kotak Mahindra Bank") {
        console.log(`Bank Name : "${temp1.bankName}", Location is :"${temp1.location}"Account No.: "${temp1.account_no}",IFSC Code "${temp1.ifsc_code} and Interest Rate :"${temp1.interest_rate}`);
    }
}
 console.log(
    ` -----------------------------------------loging details using for loop ----------------------------------------`
 );

 for (let index = 0; index < bankDetails.length; index++) {
    const element = bankDetails[index];
    console.log(element);
    
 }