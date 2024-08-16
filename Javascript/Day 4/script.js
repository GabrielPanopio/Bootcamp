// declaring a function
function greeting() {
    console.log("Hello World");
}

// calling/invoking a function
greeting();
greeting();

// User Login / Log-out function
let userOnline = false;

function updateUserStatus() {
    if (userOnline) {
        userOnline = false;
        console.log("User Signed-Out");
    } else {
        userOnline = true;
        console.log("User Signed-In");
    }
}

updateUserStatus();
updateUserStatus();
updateUserStatus();
updateUserStatus();

// parameter - example
function atm(accountNumber, amount) {
    console.log(`Account Number: ${accountNumber}. Amount Withdrawn: ${amount}.00.`);
}

atm();

// arguments - example
atm(12345678, 200)



// Nested / Inner Functions

function quadruple(num) {
    function double(num) {
        return num * 2
    }

    return double(num) * 2
}

console.log(quadruple(10));

// Different Function Syntax

// Function Declaration
function squaredDeclaration(num) {
    return num * num;
}

console.log(squaredDeclaration(100));



// Arrow Function *Cannot be hoisted, must be called after declaration

const squaredArrow = (num) => {
    return num * num;
};

// Arrow function with implicit return (no need for return keyword - only on one line)

const squaredArrowImplicit = (num) => num * num;

console.log(squaredArrowImplicit(4));


// Anonymous Function

const squaredAnon = function(num) {
    return num * num;
}

console.log(squaredAnon(2));