/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = [
    "My dog",
    "My wife",
    "Darth Vader",
    "Professor Snape",
    "The Police"
  ];
  const what = [
    "took a poop",
    "forced me to take out the garbage",
    "force choked me",
    "used the killing curse on my cat",
    "arrested me"
  ];
  const where = [
    "in my bed.",
    "at Disney World.",
    "at a five star restaurant.",
    "while swimming the English channel.",
    "in Fiji.",
    "on the Deathstar.",
    "at Hogwarts."
  ];

  let sentence =
    who[rand(who.length)] + // each array's index will be a random number from
    " " +
    what[rand(what.length)] +
    " " +
    where[rand(where.length)];

  let excuseSpan = document.querySelector("#excuse");

  excuseSpan.innerHTML = sentence;
};

function rand(length) {
  // Given the length, randomize a number between 0 and the length of the array.
  let number = Math.floor(Math.random() * length);
  return number; // return the new randomized number
}
