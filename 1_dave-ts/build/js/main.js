"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
//with arrow brackets (does not work with JSX)
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let res = 10;
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
let imgSrc = img.src;
let myImgSrc = myImg.src;
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
