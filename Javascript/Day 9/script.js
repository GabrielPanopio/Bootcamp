// // which method is used to convert date and time to local string?
// const date=new Date();
// console.log(date.toLocaleString());

// // which method return day of the week?
// console.log(date.getDay());

// // convert a date to local string and return day name from it.
// const dayName=date.toLocaleString('default',{weekday:'short'})



// The setTimeout(); call a function after a certain period of time. time is given in milliseconds.

// function greeting()
// {
//     console.log('Hello Everyone');
// }

// setTimeout(greeting, 10000);

// function greeting1(name)
// {
//     console.log('Hello ${name}');
// }
// const delay=1*3*1000;

// setTimeout(greeting1, delay, 'John');


// clearTimeout(); => clear the setTimeout();
// We should assign the setTimeout() to a variable

// clearTimeout(timeout);


// The setInterval(); call a function repeatedly at a specified interval of time.

// setInterval(greeting, 2000);
// console.log('Page load date and time', date);
// function currentTime(){
//     const date=new Date();
//     document.getElementById('p1').innerHTML=date.getSeconds();
//     console.log('Inside the function', date);
//     // console.log(date.getSeconds());
// }
// setInterval(currentTime, 1000);

// clearInterval(); - remove/stop the interval

// call a function four time
// function welcome(){
//     console.log('Welcome to JavaScript');
//     if(count==4)
//     {
//         clearInterval(call);
//     }
//     count++;
// }
// const call=setInterval(welcome, 2000);
// this will stop the interval after 4 repetitions


//***TASK - 

function timeNow() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(timeNow, 1000);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}


// Math Object

// .min() - used to find lowest value in list of arguments
// .max() - used to find highest value in list of arguments
// .round() - returns the value of (x) where x is a number rounded to the nearest integer (whole number)
// .sqrt() - used to return the square root of a number
// .pow() - takes (x, y), returns value of x to the power of y. x multiplied by y
// .floor() - takes (x), rounds value of x down to nearest integer
// .ceil() - takes x, returns value of x rounded up to nearest integer
// .random() - returns random number between 0-1


console.log(Math.min(10,47,650,84));
console.log(Math.max(232,345,65,678,898,999));
console.log(Math.round(3.5));
console.log(Math.round(Math.sqrt(21)));
console.log(Math.pow(3,3));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.random());

// ***TASK
// create a random generator between 0-100

console.log(Math.round(Math.random()*100))

console.log(Math.floor(Math.random()*100)+1)
//both correct



// Conditional (ternary) operator

//short and concise way of writing conditional statements
// condition ? trueExpression : falseExpression

let marks=80;
if(marks>70)
{
    console.log("Great Marks")
}
else {
    console.log("Study more!")
}

marks>70? console.log("Great Marks T"): console.log("Study more!");

// let score=50;
// let result;

// if(score>60)
// {
//     result="Excellent"
// }
// else if(score>50)
// {
//     result="Good";
// }
// else
// {
//     results="Poor Result";
// }
// console.log(result);

let score=50;
let result= score>60? "Excellent": score>50? "Good": "Poor Result"
console.log(result)