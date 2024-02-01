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
