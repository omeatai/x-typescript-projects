"use strict";
// Arrays
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.push("Jazzmaster");
guitars.unshift("Jimmy");
let bands = [];
bands.push("Van Sar", "Metallica", "Iron Maiden");
// Tuple
let myTuple = ["Dave", 42, true];
myTuple[1] = 45;
// Objects
let myObj;
myObj = ["bob", 2, true];
let myObj2 = {
    name: "Dave",
    age: 42,
    isCool: true,
    schools: ["UCLA", "USC"],
};
let jp = {
    name: "Jimmy",
    age: "40",
    schools: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
