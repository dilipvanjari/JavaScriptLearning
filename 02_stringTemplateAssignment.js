    console.log(`-------------------------------1------------------------------------------`);
    var temp = "     Hey You Are Doing Good, Keep It Up     ";
    console.log(temp);
    console.log(`-------------------------------2------------------------------------------`);
    var temp2= temp.length;
    console.log(`The Length Of Given String iS : ${temp2}`);
    console.log(`-------------------------------3------------------------------------------`);
    var temp3= temp.trim();
    console.log(`Removing The Extra Spaces Of String: ${temp3}`);
    console.log(`-------------------------------4------------------------------------------`);
    var temp4= temp3.length;
    var temp5=temp2-temp4;
    console.log(`The Count Of Total Extra Spaces Removed in Step 3 Is: ${temp5}`);
    console.log(`-------------------------------5------------------------------------------`);
    var temp6= temp3.charAt(0);
    var temp7=temp3.charAt(33);
    console.log(`The First Character of String Is "${temp6}" the last Character of String Is "${temp7}" `);
    console.log(`-------------------------------6-------------------------------------------`);
    var temp8=temp3.split(" ");
    var temp9=temp8.length;
    console.log(`the count of the word available in string After Trim Is: ${temp9}`);
    console.log(`-------------------------------7-------------------------------------------`);
    var temp10=temp3.indexOf("Good");
    console.log(`the index of word "good" in string is: ${temp10}`);
    console.log(`-------------------------------8-------------------------------------------`);
    var temp11=temp3.substring(22);
    var temp12=temp3.slice(22)
    console.log(`the substring starting from index 22(using substring) is: ${temp11}`);
    console.log(`the substring starting from index 22(using slice) is: ${temp12}`);
    console.log(`-------------------------------9-------------------------------------------`);
    var temp13=temp3.endsWith("Up")
    console.log(`to check Either given string ends with "up" after trim: ${temp13}`);
    console.log(`-------------------------------10------------------------------------------`);
    var temp14=temp3.startsWith("Hey");
    console.log(`to check either given string is starts with "Hey" After trim: ${temp14}`);
    





















