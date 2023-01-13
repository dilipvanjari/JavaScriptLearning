// if variable is defined using var key word then it will be accessible only inside the function and 
// if variable is defined using var keyword inside the block it will accessible outside the block.
function add(num1, num2) {
    var result= num1+num2;
    console.log(`result is: ${result}`); // variable is accessible only inside the function block it means function scope
    var isMarried= true;
    if (isMarried) {
        var greet =`congratulations`;  // function scope means variable is accessible inside only in function block
    }
    console.log(greet);
}
add(5,5);
console.log(`outside result is: ${result}`);

// if variable is created using let key word then it will be accessible in block only

