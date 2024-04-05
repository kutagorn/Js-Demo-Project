//import { apiKey, abc as content } from "../scripts/util";
//import apiKey from "./util.js";

// import * as util from "./util.js";
//console.error(apiKey)

//console.log(util.default, util.abc);

// function greetUser(userName, message = "Hello!"){
//     return "Hi, I am " + userName + ". " + message;
// }
// function combine(a,b,c){
//     let newValue = a * b / c;
//     return newValue   
// }
// const greeting1 = greetUser("Kutay");
// const greeting2 = greetUser("Hazal");

// console.log(greeting1, greeting2);
// console.log(combine(10,23,4));

//arrow functions
// export default function(userName,message){
//     console.log('Hello!');
//     return userName,message
// }
//function at on top of this and the below arrow function are the same
/*
If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

Instead of

number => { 
  return number * 3;
}
you could write

number => number * 3;
 */
// export default (userName,message) /*Instead of writing function before the parameter we put an arrow after the parameter*/=>{
//     return userName,message
// }

// const user = {
//        name: "Max",
//        age: 34,
//        greet() {
//          console.log("Hello!");
//          console.log(this.age);
//        }
//      };
//      console.log(user.name);
//      user.greet();
     
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(this.name);
//         console.log("Hi!");
//     }
// }
// const user1 = new User("Manuel", 35);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);
// hobbies.push("Working");
// console.log(hobbies);
// const index = hobbies.findIndex((item) => item === "Sports");
// console.log(index);
// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);
// const [firstName, lastName] = ["Max", "Schwarzmüller"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];
// console.log(firstName);
// console.log(lastName);

//spread operator
// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// };
// console.log(extendedUser);

//statements, prompt for input and for loops
// const password = prompt("Your password");
// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }


//functions as values
// function handleTimeout() { //normal function creation
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => { // arrow version
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000); // in order to pass a function as a value we do not use () at the end
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function greeter(greetFN){
//   greetFN(); //when the () is added the function ll be executed 
// }
// greeter(() => console.log("Hi"));

