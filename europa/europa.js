//funcionalidades del modal de flora y fauna
let btnFloraFauna = document.getElementById("fauna-mod");
let modalFlorFauna = document.querySelector(".modal-flora-y-fauna-inv");
let removeModalF = document.getElementById("remove-f");

btnFloraFauna.addEventListener("click", () => {
  modalFlorFauna.classList.add("modal-flora-y-fauna");
});
removeModalF.addEventListener("click", () => {
  modalFlorFauna.classList.remove("modal-flora-y-fauna");
});
//funcionalidades del modal de curiosidades
let btnCuriosidades = document.getElementById("curiosidad-mod");
let modalCuriosidades = document.querySelector(".modal-curiosidades-inv");
let removeModalC = document.getElementById("remove-c");

btnCuriosidades.addEventListener("click", () => {
  modalCuriosidades.classList.add("modal-curiosidades");
});
removeModalC.addEventListener("click", () => {
  modalCuriosidades.classList.remove("modal-curiosidades");
});
//funcionalidades del modal de la UE
let btnUE = document.getElementById("actualidad-mod");
let modalUE = document.querySelector(".modal-unionE-inv");
let removeModalUE = document.getElementById("remove-u");

btnUE.addEventListener("click", () => {
  modalUE.classList.add("modal-unionE");
});
removeModalUE.addEventListener("click", () => {
  modalUE.classList.remove("modal-unionE");
});
