// let complexNestedObject = {
//     prop1: "value1",
//     prop2: {
//         nestedProp1: "nestedValue1",
//         nestedProp2: [1, 2, 3, 4],
//         nestedProp3: {
//             deepNestedProp1: "deepNestedValue1",
//             deepNestedProp2: [5, 6, 7, 8],
//             deepNestedProp3: {
//                 deeperNestedProp1: "deeperNestedValue1",
//                 deeperNestedProp2: [9, 10, 11, 12]
//             }
//         }
//     },
//     prop3: [
//         {
//             arrayProp1: "arrayValue1",
//             arrayProp2: [13, 14, 15]
//         },
//         {
//             arrayProp1: "arrayValue2",
//             arrayProp2: [16, 17, 18]
//         }
//     ],
//     prop4: {
//         nestedProp4: "nestedValue4",
//         nestedProp5: [
//             {
//                 deeperArrayProp1: "deeperArrayValue1",
//                 deeperArrayProp2: [19, 20, 21]
//             },
//             {
//                 deeperArrayProp1: "deeperArrayValue2",
//                 deeperArrayProp2: [22, 23, 24]
//             }
//         ]
//     }
// };

// console.log(complexNestedObject.prop4.nestedProp5[1].deeperArrayProp2[2]);
// console.log(complexNestedObject.prop4.nestedProp5[0].deeperArrayProp2[1]);
// console.log(complexNestedObject.prop3[1].arrayProp2[2]);
// console.log(complexNestedObject.prop1);









// const num = 10;
// console.log(num.toFixed(2));




// let date = ('junaurary')
// console.log(date.toloaclestri);



// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 'Pineapple', 'Grapes', 'Cherry', 'Pear', 'Peach'];
// for (const iterator of fruits) {
//     console.log(iterator);
// }



// const person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York",
//     isEmployed: true,
//     hobbies: ["Reading", "Traveling", "Cooking"],
//     address: {
//         street: "123 Main St",
//         zipCode: "10001"
//     }
// };


// for (const hobbies in person) {
//     if (person.hasOwnProperty.call(person, hobbies)) {
//         const element = person.isEmployed;
//         console.log(element);
//     }
// }








// const getItem = name => `hello ${name}`

// console.log(getItem("Irtiza Ashraf"));



// const letItem = (user) => {
//     return `hello ${user}`
// };

// console.log(letItem('saad'));



// const value = document.querySelector('#value');
// const submit2 = document.querySelector('#submit');

// submit2.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(value.value);


// })




// const names = document.querySelector('#name');
// const fname = document.querySelector('#fname');
// const age = document.querySelector('#age');
// const email = document.querySelector('#email');
// const submit = document.querySelector('#submit');


// const obt = []

// submit.addEventListener('click', (e) => {
//     e.preventDefault();



//     const user = {
//         "Name": names.value,
//         "Father Name": fname.value,
//         "email": email.value,
//         "age": age.value
//     }

//     obt.push(user)


//     console.log(user);

// })




// const names = document.querySelector('#name');
// const fname = document.querySelector('#fname');
// const age = document.querySelector('#age');
// const email = document.querySelector('#email');
// const submit = document.querySelector('#submit');

// const obt = [];

// submit.addEventListener('click', (e) => {
//     e.preventDefault();

//     const user = {
//         "Name": names.value,
//         "Father Name": fname.value,
//         "email": email.value,
//         "age": age.value
//     };

//     obt.push(user); // Push the user object into the array after it's created
//     console.log(user);
// });




// const mcqs = [
//     {
//         question: "What is the capital of France?",
//         options: ["London", "Paris", "Berlin", "Madrid"],
//         correctAnswer: "Paris"
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Venus", "Jupiter"],
//         correctAnswer: "Mars"
//     },
//     {
//         question: "What is the powerhouse of the cell?",
//         options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
//         correctAnswer: "Mitochondria"
//     },
//     {
//         question: "Who painted the Mona Lisa?",
//         options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
//         correctAnswer: "Leonardo da Vinci"
//     }
// ];

// // Example usage:
// const currentQuestion = mcqs[0]; // Get the first question
// console.log("Question: " + currentQuestion.question);
// console.log("Options: " + currentQuestion.options.join(", "));
// console.log("Correct Answer: " + currentQuestion.correctAnswer);


// const mixedArray = [1, 'hello', true, null, { key: 'value' }];
// console.log(mixedArray[4].key);


// const fruits = ['apple', 'banana', 'orange', 'mango'];
// fruits.push("anananas", "nashpati")
// // fruits.pop()
// // fruits.shift("mango")
// fruits.unshift("mango", "peach")
// fruits.splice(0, 1, "watermalan", "anar")
// fruits.slice(2, 5)

// console.log(fruits);


// const numbers = [1, 2, 3, 4, 5];
// const slicedNumbers = numbers.slice(2, 5);
// console.log(slicedNumbers); // Output: [3, 4, 5]


// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// const cityToCheck = "Santa Fe"
// if (cityToCheck === cleanestCities[0]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) { alert("It's one of the cleanest cities"); }
// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities");
// }

// else {
//     alert("It's not on the list");
// }

// console.log(cleanestCities);

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }
// console.log([i]);

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// var matchFound = "no";
// for (var i = 0; i <= 4; i++);
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = "yes";
//     alert("It's one of the cleanest cities");
// }

// if (matchFound === "no") {
//     alert("It's not on the list");
// }
// console.log(cityToCheck);



// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck == cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
//     else {

//         alert("It's not include cleanest cities");
//     }



// console.log(cityToCheck);

// var firstChar = cityToCheck.slice(0, 1);
// var someChars = cityToCheck.slice(2);
// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;

// var cityToCheck = ["karachi", "parois", "landon"]; // Replace "exampleCity" with the actual city name you want to process

// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);

// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();

// var cappedCity = firstChar + otherChars;

// console.log(cappedCity); // Output: "Examplecity"

// const tlogext = "heloo world"
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
//     console.log(i);
// }
// console.log(text);

// firstChar = text.indexOf("World War II");
// console.log(firstChar);

// var text = "To be or not to be.";
// var segIndex = text.indexOf("ot");
// console.log(segIndex);



// const text = text.replace("World War II", "the Second World War");

// console.log(text);


// var numberOfStars = Math.round(5);
 
// console.log(numberOfStars );

// scoreAvg = Math.round(7);

// console.log(scoreAvg);


// var scoreAvg = Math.round(12.558437);
// console.log(scoreAvg);

// var scoreAvg = Math.ceil(-1.450000);
// console.log(scoreAvg);

// var scoreAvg = Math.floor(4.5);
// console.log(scoreAvg);


// var randomNumber = Math.random(5);
// console.log(randomNumber);

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// console.log(numberOfStars);

// var total = 20000 + (20000.342245 * 1.5);
// console.log(total);
// var prettyTotal = total.toFixed(6);
// var currencyTotal = "$" + prettyTotal;
// var prettyTotal = total.toFixed(5);

// console.log(prettyTotal);


// var rightNow = new Date();
// console.log(rightNow);

// var dateString = rightNow.toString();
// console.log(dateString);

// var theDay = rightNow.getDay();
// console.log(theDay);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// console.log(nameOfToday);

// var d = new Date();
// var currentMonth = d.getMonth();
// var dayOfMonth = d.getDate();
// var currYr = d.getFullYear();
// var currentHrs = d.getHours();
// var currMins = d.getMinutes();
// var currSecs = d.getSeconds()

// var currMills = d.getMilliseconds();

// var millsSince = d.getTime( 3/5/2020);

// console.log(dayOfMonth,currYr,currentHrs, currMins, currSecs, currMills, millsSince);
// var millsSince = d.getTime();
// console.log(millsSince);

// var now = new Date().toDateString();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);


// tellTime();
// function tellTime() {
//  var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  alert("Current time: "+ theHr + ":" + theMin);
// }
    

// const newdate = newdate().toDateString()
// console.log(newdate);

// const arry =[1,2,3,4,5,6,7,8,9,10]

// const renderarry = arry.map( function(item)){
//     return +10
// };

// const renderarry = arry.map( item => item +10);

// console.log(renderarry);


// const date = new Date(Date.UTC(2020, 6, 12, 8, 0, 0));

// toLocaleDateString() without arguments depends on the implementation,
// the default locale, and the default time zone
// console.log(date.toLocaleDateString());

// const date = new Date(Date.UTC(2012, 8, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order
// console.log(date.toLocaleDateString("en-US"));
// "12/20/2012"

// British English uses day-month-year order
// console.log(date.toLocaleDateString("en-GB"));
// "20/12/2012"

// Korean uses year-month-day order
// console.log(date.toLocaleDateString("ko-KR"));
// "2012. 12. 20."

// Event for Persian, It's hard to manually convert date to Solar Hijri
// console.log(date.toLocaleDateString("fa-IR"));
// "۱۳۹۱/۹/۳۰"

// Arabic in most Arabic speaking countries uses real Arabic digits
// console.log(date.toLocaleDateString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
// console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// "24/12/20"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
// console.log(date.toLocaleDateString(["ban", "id"]));
// "20/12/2012"





// const productCart = [
//     { 
//         productName: "Product 1", 
//         price: 10.99 
//     },
//     { 
//         productName: "Product 2", 
//         price: 19.99 
//     },
//     { 
//         productName: "Product 3", 
//         price: 8.50 
//     },
//     { 
//         productName: "Product 4", 
//         price: 12.00 
//     },
//     { 
//         productName: "Product 5", 
//         price: 15.75 
//     },
//     { 
//         productName: "Product 6", 
//         price: 6.99 
//     },
//     { 
//         productName: "Product 7", 
//         price: 24.50 
//     },
//     { 
//         productName: "Product 8", 
//         price: 17.25 
//     },
//     { 
//         productName: "Product 9", 
//         price: 11.49 
//     },
//     { 
//         productName: "Product 10", 
//         price: 14.99 
//     }
// ];


// const totalprtice = productCart.reduce((cartvalue , arryvalue)=>{
//     return cartvalue + arryvalue.price
// },0)
 
// console.log(totalprtice);
 


// // const maprender = productCart.map(item =>{item.price}) 

// //stopwatch

// // const div = document.querySelector('.container')
// // const start = document.querySelector('.start');
// // const stop = document.querySelector('.stop');
// // const reset = document.querySelector('.reset');







// // let seconds = 0
// // let interval;
// // start.addEventListener('click' , ()=>{
// //     interval = setInterval(() => {
// //         seconds += 1;
// //         div.innerHTML = seconds
// //     }, 1000);
// //     start.disabled = true
// // })


// // stop.addEventListener('click' , ()=>{
// //     clearInterval(interval)
// //     start.disabled = false

// // })


// // reset.addEventListener('click' , ()=>{
// //     clearInterval(interval);
// //     seconds = 0
// //     div.innerHTML = 0
// //     start.disabled = false
// // })

// const hoursBox = document.querySelector('#hours');
// const minutesBox = document.querySelector('#minutes');
// const secondsBox = document.querySelector('#seconds');
// const milliSecBox = document.querySelector('#milli-sec');

// const play = document.querySelector('#play');
// const split = document.querySelector('#split');
// const pause = document.querySelector('#pause');
// const reset = document.querySelector('#reset');

// const splitRecord = document.querySelector('#split-record');


// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let milliSec = 0;

// let hoursInterval;
// let minutesInterval;
// let secondsInterval;
// let milliSecInterval;

// split.disabled = true;
// split.style.backgroundColor = '#979797'

// pause.disabled = true;
// pause.style.backgroundColor = '#979797'

// reset.disabled = true;
// reset.style.backgroundColor = '#979797'



// // ===>> PLAY BUTTON

// play.addEventListener('click', () => {

//     play.disabled = true;
//     play.style.backgroundColor = '#979797'

//     split.disabled = false;
//     split.style.backgroundColor = '#0061e0'

//     pause.disabled = false;
//     pause.style.backgroundColor = '#0061e0'

//     reset.disabled = false;
//     reset.style.backgroundColor = '#0061e0'


//     milliSecInterval = setInterval(() => {

//         if (milliSec === 100) {
//             milliSec = 1;
//         }
//         else {
//             milliSec += 1;
//         }

//         if (milliSec < 10) {
//             milliSecBox.innerHTML = `0${milliSec}`;
//         }
//         else {
//             milliSecBox.innerHTML = milliSec;
//         }

//     }, 1);


//     secondsInterval = setInterval(() => {

//         if (seconds === 60) {
//             seconds = 1;
//         }
//         else {
//             seconds += 1;
//         }

//         if (seconds < 10) {
//             secondsBox.innerHTML = `0${seconds}`;
//         }
//         else {
//             secondsBox.innerHTML = seconds;
//         }

//     }, 1000);


//     minutesInterval = setInterval(() => {

//         if (minutes === 60) {
//             minutes = 1;
//         }
//         else {
//             minutes += 1;
//         }

//         if (minutes < 10) {
//             minutesBox.innerHTML = `0${minutes}`;
//         }
//         else {
//             minutesBox.innerHTML = minutes;
//         }

//     }, 60000);


//     hoursInterval = setInterval(() => {

//         if (hours === 60) {
//             hours = 1;
//         }
//         else {
//             hours += 1;
//         }

//         if (hours < 10) {
//             hoursBox.innerHTML = `0${hours}`;
//         }
//         else {
//             hoursBox.innerHTML = hours;
//         }

//     }, 3600000);

// });

// pause.addEventListener('click', () => {
//     clearInterval(milliSecInterval);
//     clearInterval(secondsInterval);
//     clearInterval(minutesInterval);
//     clearInterval(hoursInterval);

//     pause.disabled = true;
//     pause.style.backgroundColor = '#979797'

//     play.disabled = false;
//     play.style.backgroundColor = '#0061e0'

// });


const tittle = document.querySelector(".tittle")
const discript = document.querySelector(".dis")
const btn  = document.querySelector(".btn")
 
const array =[]


btn.addEventListener('click',(event) =>{
    event.preventDefault()
    console.log(tittle.value);
    console.log(discript.value);

    const value={
        tittleL:tittle.value,
        disL: discript.value
    }

    array.push(value)
    console.log(value);
    tittle =''
    discript =''
})


let model = "alto";

model > "audi" ? console.log('mubarak ho') :
model> "alto" ? console.log('na hai'): console.log('abu man gaye'); 