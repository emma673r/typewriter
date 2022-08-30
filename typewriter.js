"use strict";

// all let
let char;
let string;
let maxChar;

// all const
const h1 = document.getElementById("typewriter");

window.addEventListener("DOMContentLoaded", start);

// start function
function start() {
  string = h1.textContent.toString();
  console.log(string);
  h1.textContent = "";
  maxChar = string.length;

  char = maxChar;
  console.log(maxChar);
  console.log(char);

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


      if (typewritten === "e", "n", "s", "t") {
        console.log(`1`);
        
        setTimeout(loop, 150);
      } else if (typewritten == "i", "h", "x") {
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
