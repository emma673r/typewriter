"use strict";

window.addEventListener("load", start);

const string = document.querySelector(".typewritten").textContent;
const typewritten = document.querySelector(".typewritten");

const soundBtn = document.getElementById("soundBtn");

const typeKey1 = document.querySelector("#typekey1");
const typeKey2 = document.querySelector("#typekey2");
const typeSpace = document.querySelector("#typespace");
const typeLast = document.querySelector("#typelast");
const typeReturn = document.querySelector("#typereturn");


let char;
let speed;
let speedSet;
let keyRandom;



function start() {
  // console.log("start");
  typewritten.textContent = "";
  initTextLoop();
  soundBtn.addEventListener("click", playSound);
}

function initTextLoop() {
  // console.log("initTextLoop");
  char = -1;
typewritten.textContent = "";
  textLoop();
}



function playSound() {
    console.log(`playSound`);

  if (string[char] === " ") {
    // console.log(`space`);
    typeSpace.play();
  } else if (string[char] === "e" || string[char] === "s" || string[char] === ".") {
    // console.log("Type1");
    typeKey2.play();
  } else {
    // console.log("Type2");
    typeKey1.play();
  }
}

function setSpeed() {
    // do the math random thing
  speed = Math.floor(Math.random() * 3) + 1;
  if (speed === 1) {
    speedSet = 700;
  } else if (speed === 2) {
    speedSet = 850;
  } else if (speed === 3) {
    speedSet = 1050;
  }
}

function textLoop() {
  // console.log("char", char);
  char++;
  // console.log("char", char);
  if (char < string.length) {
    typewritten.innerHTML += string[char];
    setSpeed();
    setTimeout(textLoop, speedSet);
    playSound();
  } else {
    console.log("done and all");
    setTimeout(start, 1500);
  }
}
