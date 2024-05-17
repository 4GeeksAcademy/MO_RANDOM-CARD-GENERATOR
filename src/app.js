/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generarCartaAleatoria();
  document
    .querySelector(".generarCarta")
    .addEventListener("click", generarCartaAleatoria);
};

function generarCartaAleatoria() {
  let numeros = ["j", "8", "3", "8"];
  //write your code here
  let simbolos = [
    { simbolo: "♥", color: "red" },
    { simbolo: "♠", color: "black" },
    { simbolo: "♣", color: "black" }
  ];

  let numeroCarta = numeros[Math.floor(Math.random() * numeros.length)];
  document.querySelector(".numeroCarta").innerHTML = numeroCarta;

  let simboloCarta = simbolos[Math.floor(Math.random() * simbolos.length)];

  let simboloSuperiorCarta = document.querySelector(".simboloCartaSuperior");
  let simboloInferiorCarta = document.querySelector(".simboloCartaInferior");

  simboloSuperiorCarta.innerHTML = simboloCarta.simbolo;
  simboloInferiorCarta.innerHTML = simboloCarta.simbolo;

  if (simboloCarta.color == "red") {
    simboloSuperiorCarta.style.color = "red";
    simboloInferiorCarta.style.color = "red";
  } else {
    simboloSuperiorCarta.style.color = "black";
    simboloInferiorCarta.style.color = "black";
  }
}
