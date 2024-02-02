"use strict";
// Using Interfaces
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
