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

// console.log(user1);
// user1.greet();
