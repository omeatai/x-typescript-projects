// Using Interfaces

interface Player {
  name: string;
  age: string | number;
  isCool?: boolean;
  schools: (number | string)[];
}

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
