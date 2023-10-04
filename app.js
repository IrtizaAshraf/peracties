// let complexNestedObject = {
//       prop1: "value1",
//       prop2: {
//           nestedProp1: "nestedValue1",
//           nestedProp2: [1, 2, 3, 4],
//           nestedProp3: {
//               deepNestedProp1: "deepNestedValue1",
//               deepNestedProp2: [5, 6, 7, 8],
//               deepNestedProp3: {
//                   deeperNestedProp1: "deeperNestedValue1",
//                   deeperNestedProp2: [9, 10, 11, 12]
//               }
//           }
//       },
//       prop3: [
//           {
//               arrayProp1: "arrayValue1",
//               arrayProp2: [13, 14, 15]
//           },
//           {
//               arrayProp1: "arrayValue2",
//               arrayProp2: [16, 17, 18]
//           }
//       ],
//       prop4: {
//           nestedProp4: "nestedValue4",
//           nestedProp5: [
//               {
//                   deeperArrayProp1: "deeperArrayValue1",
//                   deeperArrayProp2: [19, 20, 21]
//               },
//               {
//                   deeperArrayProp1: "deeperArrayValue2",
//                   deeperArrayProp2: [22, 23, 24]
//               }
//           ]
//       }
//   };

//   console.log(complexNestedObject.prop4.nestedProp5[1].deeperArrayProp2[2]);
//   console.log(complexNestedObject.prop4.nestedProp5[0].deeperArrayProp2[1]);
//   console.log(complexNestedObject.prop3[1].arrayProp2[2]);
//   console.log(complexNestedObject.prop1);









//   const num = 10;
//   console.log(num.toFixed(2));




//   let  date = ('junaurary')
//   console.log(date.toloaclestri);



//   const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 'Pineapple', 'Grapes', 'Cherry', 'Pear', 'Peach'];
//   for (const iterator of fruits) {
//     console.log(iterator);
//   }



//   const person = {
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


// for (const key in person) {
//     if (person.hasOwnProperty.call(person, key)) {
//         const element = person[key];
//         console.log(element);
//     }
// }








const getItem = name => `hello ${name}`

console.log(getItem("Irtiza Ashraf"));



const letItem = (user) => {
    return `hello ${user}`
};

console.log(letItem('saad'));



// const value =document.querySelector('#value');
// const submit =document.querySelector('#submit');

// submit.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log(value.value);


// })




const names =document.querySelector('#name');
const fname =document.querySelector('#fname');
const age =document.querySelector('#age');
const email =document.querySelector('#email');
const submit =document.querySelector('#submit');


const obt=[]

submit.addEventListener('click', (e) =>{
    e.preventDefault();
 obt.push(user)
    const user{
        "Name": names.value,
        "Father Name": fname.value,
        "email": email.value,
        "age": age.value
    }
    console.log(user);

})