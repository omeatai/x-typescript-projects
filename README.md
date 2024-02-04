# Learn Typescript

# 1-dave-ts

<details>
<summary>1. Introduction </summary>

# Typescript site

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

# Install Typescript

```x
npm install typescript -g
npm install typescript --save-dev
```

# Check Typescript version

```x
tsc -v
```

# Compile Typescript file

```x
tsc main.js
tsc main.js -w
tsc main.js --watch
tsc -w
tsc --noEmitOnError -w
```

# Setup ts-config file

```x
tsc --init
```

# Change Source and Output Dir in ts-config file

```x
  "rootDir": "./src", /* Specify the root folder within your source files. */
  "outDir": "./build/js", /* Specify an output folder for all emitted files. */
  "noEmitOnError": true, /* Disable emitting files if any type checking errors are reported. */
  "target": "es2016", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
  "strict": true, /* Enable all strict type-checking options. */

  "include": [
      "src"
  ]
```

```js
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */
    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
    /* Language and Environment */
    "target": "es2016", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    /* Modules */
    "module": "commonjs", /* Specify what module code is generated. */
    "rootDir": "./src", /* Specify the root folder within your source files. */
    "outDir": "./build/js", /* Specify an output folder for all emitted files. */
    "noEmitOnError": true, /* Disable emitting files if any type checking errors are reported. */
    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
    /* Type Checking */
    "strict": true, /* Enable all strict type-checking options. */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "include": [
    "src"
  ]
}
```

# #End</details>

<details>
<summary>2. Basic Types </summary>

# Basic Types

```ts
let username: string;
let password: string;
let deskNumber: number;
let isAdmin: boolean;
let isActive: number | boolean | string;
let nickname: any;
let postId: string | number;

username = "Hope Guild";
deskNumber = 6;
isAdmin = false;
const re: RegExp = /\w+/g;

const sum = (a: number, b: number) => {
  return a + b;
};

const userNode: HTMLElement | null = document.getElementById("userNode");

userNode ? (userNode.innerHTML = username) : null;
```

# #End</details>

<details>
<summary>3. Arrays, Objects and Type Setting </summary>

# Arrays, Objects and Type Setting

```ts
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
```

# #End</details>

<details>
<summary>4. Using Type Aliases </summary>

# Using Type Aliases

```ts
// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];
type stringOrNumberArray2 = Array<string | number>;

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

```

# #End</details>

<details>
<summary>5. Using Literal Types </summary>

# Using Literal Types

```ts
// Literal types

let userName: "Dave" | "John" | "Amy";
userName = "Amy";
```

# #End</details>

<details>
<summary>6. Using Interfaces </summary>

# Using Interfaces

```ts
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
```

# #End</details>

<details>
<summary>7. Using Enums </summary>

# Using Enums

```ts
// Using Enums

enum Grade {
  A = 4,
  B = 3,
  C = 2,
  D = 1,
  F = 0,
}

console.log(Grade.B); //3
```

# #End</details>

<details>
<summary>8. Using Functions </summary>

# Using Functions

```ts
// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

// Types and Interfaces with functions

type mathFunction = (a: number, b: number) => number;

interface mathFunction2 {
  (a: number, b: number): number;
}

let subtract = function (c: number, d: number): number {
  return c - d;
};

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default parameters

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 5));

```

# #End</details>

<details>
<summary>9. Using Never Type </summary>

# Using Never Type

```ts
// Never Type
const infinite = (): void => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};

```

# #End</details>

<details>
<summary>10. Using Type Assertions with "as" keyword </summary>

# Using Type Assertions with "as" keyword 

```ts
// Type Assertion
type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

//with arrow brackets (does not work with JSX)
let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

let res: string = 10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

let imgSrc = img.src;
let myImgSrc = myImg.src;

const year = document.getElementById("year") as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

```

# #End</details>

<details>
<summary>11. Using Classes </summary>

# Using Classes

```ts
// Class Example 1
class Coder {
  // name: string
  // music: string
  // age: number
  // lang: string
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());

// Class Example 2

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

// Class Example 3

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);

// Class Example 4
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not an array of strings");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
MyBands.data = ["Van Halen", "515"];
console.log(MyBands.data);

```

<img width="1152" alt="image" src="https://github.com/omeatai/x-typescript-projects/assets/32337103/374ed5bb-2d35-4480-a754-ba9bd9f72b67">
<img width="1152" alt="image" src="https://github.com/omeatai/x-typescript-projects/assets/32337103/c6fb3216-3d8f-40b5-8480-9066fd0a3c05">
<img width="1152" alt="image" src="https://github.com/omeatai/x-typescript-projects/assets/32337103/20f32d14-3fa4-47ce-b22d-4ce0f73fd3e7">

# #End</details>

<details>
<summary>12. Using Index Signatures & keyof Assertions </summary>

# Using Index Signatures & keyof Assertions

```ts
// Index Signatures

//////////////////////////////////////////////////

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
// Pizza: number;
// Books: number;
// Job: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

//////////////////////////////////////////////////

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

//////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
//   Pizza: string;
// }

type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}

```

<img width="1152" alt="image" src="https://github.com/omeatai/x-typescript-projects/assets/32337103/77c67016-bc8b-49a6-af95-5509f6fc5da4">
<img width="1152" alt="image" src="https://github.com/omeatai/x-typescript-projects/assets/32337103/2a501f05-d666-4bbe-a3c0-3f72d2d84845">

# #End</details>

<details>
<summary>13. Generics </summary>

# Generics

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```



# #End</details>

