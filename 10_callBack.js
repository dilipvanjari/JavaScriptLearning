function anilAssignment(temp){
    console.log(`anil is doing homework`);
    console.log(`after some time anil did homework`);
    temp();
};
function sunilHomework(){
    console.log(`i am happy anil, you have completed homework`);
    console.log(`i am bit lazy and don't have time as wel`);
    console.log(`so copying as it is your homewok`);
}
anilAssignment(sunilHomework);// this comunication between two function

function show(){
    console.log(`this is show function`);
}
setTimeout(show,3000)
setTimeout( function show(){
    console.log(`this is show function`);
},3000);