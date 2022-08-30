"use strict";

// all let
let char;
let string;
let maxChar;

// all const
const h1 = document.getElementById("typewriter");

const musicBtn = document.getElementById("soundBtn");

const soundKey1 = document.getElementById("typekey1");
const soundKey2 = document.getElementById("typekey2");
const soundSpace = document.getElementById("typespace");
const soundLast = document.getElementById("typeLast");
const soundReturn = document.getElementById("typereturn");

window.addEventListener("DOMContentLoaded", start);

// start function
function start() {
  musicBtn.removeEventListener("click", musicOn);
  string = h1.textContent.toString();
  console.log(string);
  h1.textContent = "";
  maxChar = string.length;

  char = maxChar;
  console.log(maxChar);
  console.log(char);

  musicBtn.addEventListener("click", musicOn);

  loop();
}

function loop() {
  console.log(`loop`);

  if (char <= maxChar && char >= 1) {
    console.log(string);
    console.log(char);
    console.log(maxChar);
    console.log(string[char]);

    let typewritten;
    typewritten = string[maxChar - char];
    h1.textContent += typewritten;
    h1.classList.add("typewritten");

    char--;

    // setTimeout(loop, 250);

    if (typewritten === "e" || typewritten === "s" || typewritten === "t") {
      console.log(`1`);

      setTimeout(loop, 150);
    } else if (typewritten == "i" || typewritten === "h" || typewritten === "o") {
      console.log(`2`);
      setTimeout(loop, 250);
    } else {
      console.log(`3`);
      setTimeout(loop, 190);
    }
  } else {
    start();
  }
}

function musicOn() {
  console.log(`musicOn`);
  musicBtn.removeEventListener("click", musicOn);

  if (char <= maxChar && char >= 1) {
    console.log(string);
    console.log(char);
    console.log(maxChar);
    console.log(string[char]);

    let typewritten;
    typewritten = string[maxChar - char];
    h1.textContent += typewritten;
    h1.classList.add("typewritten");
    // !!!!!!!! add sound for clicks and spaces here

    char--;

    // setTimeout(loop, 250);

    if (typewritten === "e" || typewritten === "s" || typewritten === "t") {
      console.log(`1`);

      setTimeout(musicOn, 150);
    } else if (typewritten == "i" || typewritten === "h" || typewritten === "o") {
      console.log(`2`);
      setTimeout(musicOn, 250);
    } else {
      console.log(`3`);
      setTimeout(musicOn, 190);
    }
  } else {
    start();
  }
}
