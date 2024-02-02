// Arrays
let stringArr: string[] = ["one", "hey", "Dave"];
let guitars: (string | number)[] = ["Strat", "Les Paul", 5150];
let mixedData: (string | number | boolean)[] = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.push("Jazzmaster");
guitars.unshift("Jimmy");

let bands: string[] = [];
bands.push("Van Sar", "Metallica", "Iron Maiden");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

myTuple[1] = 45;

// Objects
let myObj: object;
myObj = ["bob", 2, true];

// Type setting

type Player = {
  name: string;
  age: string | number;
  isCool?: boolean;
  schools: (number | string)[];
};

let myObj2: Player = {
  name: "Dave",
  age: 42,
  isCool: true,
  schools: ["UCLA", "USC"],
};

let jp: Player = {
  name: "Jimmy",
  age: "40",
  schools: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Player) => {
  return `Hello ${guitarist.name}!`;
};

console.log(greetGuitarist(jp));
