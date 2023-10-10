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




const mcqs = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        correctAnswer: "Mitochondria"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    }
];

// Example usage:
const currentQuestion = mcqs[0]; // Get the first question
console.log("Question: " + currentQuestion.question);
console.log("Options: " + currentQuestion.options.join(", "));
console.log("Correct Answer: " + currentQuestion.correctAnswer);


const mixedArray = [1, 'hello', true, null, { key: 'value' }];
console.log(mixedArray[4].key);


const fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.push("anananas", "nashpati")
// fruits.pop()
// fruits.shift("mango")
fruits.unshift("mango", "peach")
fruits.splice(0, 1, "watermalan", "anar")
fruits.slice(2, 5)

console.log(fruits);


const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(2, 5);
console.log(slicedNumbers); // Output: [3, 4, 5]


var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
const cityToCheck ="Santa Fe"
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

for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 alert("It's one of the cleanest cities");
 }
}
console.log([i]);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


var matchFound = "no";
 for (var i = 0; i <= 4; i++);
 if (cityToCheck === cleanestCities[i]) {
 matchFound = "yes";
 alert("It's one of the cleanest cities");
 }
 
 if (matchFound === "no") {
 alert("It's not on the list");
 }
 console.log(cityToCheck);