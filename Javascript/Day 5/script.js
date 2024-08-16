const exampleObject = {
    key1: "value1",
    key2: "value2",
}

// CoffeeShop Object - Example

const coffeeShop = {
    name: "Costa",
    branchNumber: 250,
    specialOffers: true,
    drinks: [
        "Americano",
        "Latte",
        "Tea"
    ]
};

// We can access the data within the object via dot notation
console.log(coffeeShop.name)

// or bracket notation
console.log(coffeeShop["specialOffers"]);
console.log(coffeeShop.drinks[2]);

// add a new property to the object

coffeeShop.muffins = ["Blueberry", "Chocolate"]


// change or update a property

coffeeShop.branchNumber = 100;

console.log(coffeeShop);

// add some offers to the coffeeShop object

coffeeShop.breakfastOffer = "free bagel with any coffee.";
coffeeShop.lunchOffer = "free coffee with any sandwich";

let offer = "No current offer.";
let time = 1000;

if (time < 1100) {
    offer = coffeeShop.breakfastOffer;
    console.log(offer)
} else if (time < 1500) {
    offer = coffeeShop.lunchOffer;
    console.log(offer);
}

// Methods

coffeeShop.open = function () {
    return "We are open, come on in!"
}

coffeeShop.close = function () {
    return "Sorry we are closed. Come back tomorrow.";
}

console.log(coffeeShop.open());
console.log(coffeeShop.closed());