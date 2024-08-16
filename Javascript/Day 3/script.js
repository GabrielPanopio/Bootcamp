let coffeeOrder = [
    "James - Americano",
    "Hannah - Frappuccino",
    "Alex - Latte"
];
// [] square brackets are used for arrays

console.log(coffeeOrder);

console.log(coffeeOrder[0])
// Javascript index starts at 0 rather than 1

coffeeOrder[1] = "Hannah - Tea"
console.log(coffeeOrder);

coffeeOrder[3] = "New Array Item";
console.table(coffeeOrder);

// Array Property
console.log(coffeeOrder.length);
// When working with Arrays, the .length property refers to the number of items in the array

// Array Methods
coffeeOrder.push("Gabriel - Water");
console.log(coffeeOrder);

coffeeOrder.pop();
console.log(coffeeOrder);


// loops
let colours = [
    "blue",
    "green",
    "red",
    "yellow",
    "orange",
    "black",
    "purple",
    "pink",
    "brown",
];

console.log(colours);

let a = 0
console.log(a++);
console.log(a);

for (let i = 0; i < colours.length; i++) {
    console.log(`Loop counter ${i}`)
    console.log(colours[i]);
}
// i++ increment operator, Placed before adds 1 then reads the value - Prefix, Placed after reads the value then adds 1 - Postfix

let multiplesTwo = []

for (let i = 1; i < 21; i++) {
    console.log(`Loop Counter ${i}`)
    if (i % 2 === 0){
multiplesTwo.push(i)}
}

// While Loop *make sure you only save once you have closed the loop

let number = 0

while (number < 10) {
    console.log(number)
    number++;
}

// While Loop - Card Game
let cards = ["diamond", "hearts", "club", "spade"];
let currentCard = "";

while (currentCard !== "spade") {
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random() * 4)]
}

console.log("Game Over!")

// Do While Loop. A do while Loop will always run at least once, It runs the loop body, then checks the condition

let num = 10;

do {
    console.log(num)
} while (num < 1)



