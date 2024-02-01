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


# 2

<details>
<summary>1. Introduction </summary>

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

# #End</details>

