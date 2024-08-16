// What is setInterval() used for?
// -- call a function repeatedly after some time delay


// call greeting method after three seconds delay?
// const interval= setInterval(greeting, 3000);


// how to stop setInterval()
// clearInterval(interval);


// **String** in Javascript

// single quotes, double quotes, backticks

let subject="JavaScript";
let subject2='javascript';
let subject3=`JavaScript`;

const date=new Date();
console.log(`Todays date is ${date.getDate()} Rest of the String`);

// **slice** (startIndex, endIndex)
// startIndex - inclusive
// endIndex - exclusive

console.log(subject2.slice(2,-5));
// minus values in brackets start from the right side instead of left


const firstletter= subject2.slice(0,1);
console.log(`${firstletter.toUpperCase()}${subject2.slice(1)}`);


// **substring** - is similar to slice()
// the difference is that start and end values less than 0 are treated as 0 in substring(), so you cannot use negative values.

// **subStr** - start index and number of character to be displayed
console.log(subject2.substr(3,6));

// **replace** / **replaceAll**
console.log(subject2.replace('S','Z'));

// **trim** - remove extra space from the sides
console.log(subject2.trim());


// *Task, how to remove extra spaces from the middle of the string

console.log(subject2.replaceAll(/\s\s+/g,' '));

console.log(subject.length);
console.log(subject.charAt(2));
console.log(subject.toLowerCase());
console.log(subject.toUpperCase());
// camelCase method*

// **JSON - Javascript Object Notation, a format is which to represent data
// all programming languages support JSON
// JSON is easier to understand than XML, simpler for human/machine

let jsonObj=`{"firstName":"John", "lastName":"Math", "Education":true}`;

let jsObj={firstName:"John", lastName:"Math", Education:true};

//JSON.parse() - will convert JSON string into the javascript object
script=JSON.parse(jsonObj)
console.log(script);

//JSON.stringify() - convert a javaScript object back to JSON string
let jasonData=JSON.stringify(script);
console.log(jasonData);

// let Configuration=``;
// console.log(JSON.parse(Configuration));


// *Task - write a JS code to print Even numbers from below array

// let numbers=[2,4,7,32,7,9,8,10,4]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       console.log(numbers[i]);
//     }
//   }

// for(let i=0; i<=numbers.length-1; i++)
// {
//     if(numbers[i]%==0)
//     {
//         console.log(numbers[i]);
//     }
// }


  // *Task 2 - write a code which should return highest value - do not use built in function

//   let numbers=[2,4,7,32,7,9,8,10,4]
//   let smallestNumber= numbers[0]
//   let largestNumber = numbers[0]
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber){largestNumber=numbers[i]}
//     if (numbers[i]<smallestNumber){smallestNumber = numbers[i]}
//   }

function maximumValue(){
    let numbers=[2,4,7,32,7,9,8,10,4]
let maxValue=numbers[0];
for(let i=0; i<numbers.length; i++)
{
    if(numbers[i]>maxValue)
    {
        maxValue=numbers[i]
    }
}
    console.log(maxValue);
}
maximumValue();