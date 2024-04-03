//export default function transformToObjects;
function transformToObjects(numberArray) {
    // Todo: Add your logic
    //map(you need to put a function inside with a parameter, then you return what do you want to be transformed to. )
    const arrayToObject = numberArray.map((item) => ({val: item}));
    return arrayToObject
    // should return an array of objects
}
const hobbies = ["Sports", "Cooking", "Reading"];
hobbies.push("Working");
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);