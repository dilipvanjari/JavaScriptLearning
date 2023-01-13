const arrayNums = [20, 3, 4, 56, 90, 400, 49];
let temp1 = arrayNums;
temp1.push(55, 66);
console.log(`Orignal Array is : "${arrayNums}"`);
console.log(`Cloned Array is : "${temp1}"`);
console.log(
  `--------------------------------------------deep cloning using spread operator------------------------------------------------------------------`
);
let temp2 = [...arrayNums];
console.log(temp2);
console.log(
  `----------------------------------------------- updating value in orignal array ---------------------------------------------------------------`
);
arrayNums.push(10, 25);
console.log(`Orignal Array with updated Values : "${arrayNums}"`);
console.log(`Cloned array is : "${temp2}"`);
console.log(
  `----------------------------------------------- merging both arrays using spread operator -----------------------------------------------------`
);
const arrayEven = [2, 30, 14, 8];
console.log(arrayEven);
console.log(arrayNums);
let temp3 = [...arrayNums, ...arrayEven];
console.log(temp3);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  sallery: {
    july_month: "40,0000 INR",
    aug_month: " 50,0000 INR",
    jun_month: "65,0000 INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch pokhali 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 86003456 88,", "1800-4567 32,", "+91 9096 5678 77"],
};
let temp4 = employee_info.address.locality.colony;
temp9 = employee_info.address.locality.street;
let temp5 = employee_info.address.city;
let temp6 = employee_info.address.state;
let temp7 = employee_info.address.country;
let temp8 = employee_info.mobiles;
console.log(
  `----------------------------------------  mr. John Doe's Address ----------------------------------------------------------------`
);
console.log(
  `Mr. John Doe' Address is : "${temp4}" "${temp9}", City : "${temp5}", State : "${temp6}", Country : "${temp7}"`
);
console.log(`Mr. John Doe's Mo.Are : "${temp8}"`);
let temp10 = JSON.parse(JSON.stringify(employee_info));
temp10.sallery.july_month = "80,0000 INR";
employee_info.address.country = "United Kingdom";
console.log(
  `--------------------------------------- updating values of country and july month sallery---------------------------------------`
);
console.log(
  `Mr. John Doe's Sallery Of July Month is: "${temp10.sallery.july_month}"`
);
console.log(
  `Mr. john Doe's Native Place is : "${employee_info.address.country}`
);
