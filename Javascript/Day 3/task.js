let favouriteFilms = [
    "Rush Hour - 1",
    "Rush Hour - 2",
    "Rush Hour - 3",
    "Fight Club",
    "Goldeneye",
];

favouriteFilms.push ("Die Another Day", "The Spy Who Shagged Me");
console.log(favouriteFilms);

// for(i = 0; i < favouriteFilms.length; i++) {
//     console.table(favouriteFilms[i]) }

// for (let film or favouriteFilms) {
//     console.log(film);
// }

// let initNum = 0;
 
// while(initNum < 10) {
//     console.log(Math.floor(Math.random() * 100) +1)
//     initNum ++
// }

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) +1
    console.log(randomNumber)
}

// i = 20
// while(i>=0) {
//     console.log(i)
//     i--
// }

// i = 0;
// whlle (i <= 5) {
//     let randNum = Math.floor(Math.random() * 50)
// }

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    if (randomNumber % 5 === 0) {
        console.log(`${randomNumber} Is divisible by 5!`);
    } else {
        console.log(`${randomNumber} Is not divisble by 5!`)
    }
}
