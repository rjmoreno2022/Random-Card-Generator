/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const figuras = ["♠", "♣", "♥", "♦"];

function generateCard() {
  const card = document.querySelector(".card");
  const value = values[Math.floor(Math.random() * values.length)];
  const figura = figuras[Math.floor(Math.random() * figuras.length)];
  card.querySelector(".card-figura-1").style.color =
    figura == figuras[2] || figura == figuras[3] ? "red" : "black";
  card.querySelector(".card-figura-1").innerHTML = figura;
  card.querySelector(".card-value").innerHTML = value;
  card.querySelector(".card-figura-2").style.color =
    figura == figuras[2] || figura == figuras[3] ? "red" : "black";
  card.querySelector(".card-figura-2").innerHTML = figura;
}

window.myClickFunction = function myClickFunction() {
  generateCard();
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generateCard();
};

setInterval(generateCard, 10000);
