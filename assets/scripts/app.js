//import { apiKey, abc as content } from "../scripts/util";
//import apiKey from "./util.js";
// import * as util from "./util.js";
//console.error(apiKey)

//console.log(util.default, util.abc);

function greetUser(userName, message = "Hello!"){
    return "Hi, I am " + userName + ". " + message;
}
function combine(a,b,c){
    let newValue = a * b / c;
    return newValue   
}
const greeting1 = greetUser("Kutay");
const greeting2 = greetUser("Hazal");

console.log(greeting1, greeting2);
console.log(combine(10,23,4));
