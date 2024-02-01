"use strict";
let username = "John Smith";
console.log(username);
const userNode = document.getElementById("userNode");
userNode ? (userNode.innerHTML = username) : null;
