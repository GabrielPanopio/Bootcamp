// greeting

const personalisedGreeting = (firstName, surName) => {
    return `Hello ${firstname} ${surName}, how are you?`;
}

console.log(personalisedGreeting("Joe", "Bloggs"));


// Sort in alphabetical order

function stringSort(string) {
    return string.toLowerCase().split('').sort().join('');

console.log(stringSort("Hello World"));
}


//  ATM

let accBal = 1000;
let storedPin = 1234;

const withdraw = (withdrawAmount, pin) => {
    if (accBal >= withdrawAmount && pin === storedPin) {
        return `Transaction Approved. Pleased collect your £${withdrawAmount}.00`;
    } else if (accBal >= withdrawAmount && pin !== storedPin) {
        return `Transaction Denied. Incorrect Pin Number`; 
    } else {
        return  `Transaction Denied. Incorrect Funds`; 
    }
}

console.log(withdraw(200, 1234));

// when your learning, break code down into small problems and go through in stages



