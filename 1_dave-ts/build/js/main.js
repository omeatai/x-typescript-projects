"use strict";
let username;
let password;
let deskNumber;
let isAdmin;
let isActive;
let nickname;
let postId;
username = "Hope Guild";
deskNumber = 6;
isAdmin = false;
const re = /\w+/g;
const sum = (a, b) => {
    return a + b;
};
const userNode = document.getElementById("userNode");
userNode ? (userNode.innerHTML = username) : null;
