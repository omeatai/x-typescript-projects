let username: string = "Hope Guild";
console.log(username);

const userNode = document.getElementById("userNode");

userNode ? (userNode.innerHTML = username) : null;
