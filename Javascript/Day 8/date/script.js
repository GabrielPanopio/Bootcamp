// Date and Time in JavaScript

// Date
const date=new Date();//return current date and time
console.log(date);

// we can place 7 numbers inside the brackets (2022, 3(April), etc.
// new date (year, month, day, hours, minutes, seconds, ms)
// BUT we must have at least 2 (Year, Month)
// Numbers start from 0 eg. month 11(December)

const date2=new Date(2023, 10, 11);
console.log(date2);

// toLocaleString() => convert date to the local string
const localDate=date.toLocaleString('default', {month:'long'});
const dayName=date.toLocaleString('default',{weekday:'short'})

console.log(localDate);
console.log(dayName)

const differentZone=date.toLocaleString('en-UK', {timeZone:'Asia/Kolkata', year:'numeric', month: 'long', weekday: 'long', day: 'numeric'});
console.log(differentZone);

// toLocaleDateString - only displays date
// toLocalString - displays date and time

console.log(date.getFullYear());//2023
console.log(date.getMonth());//10
console.log(date.getDate());//15
console.log(date.getDay());//3
console.log(date.getHours());//16
console.log(date.getMinutes());//30

const newDate=Date.now()