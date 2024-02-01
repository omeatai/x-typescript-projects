"use strict";
let username = "Hope Guild";
console.log(username);
const userNode = document.getElementById("userNode");
userNode ? (userNode.innerHTML = username) : null;
