const ocultarModal = document.getElementById("regresar-btn");
const modaleGaleria = document.getElementById("modal-galeria");
const imagenModal = document.getElementById("imagen-seleccionada");
const foto1 = document.getElementById("foto1");
const foto2 = document.getElementById("foto2");
const foto3 = document.getElementById("foto3");
const foto4 = document.getElementById("foto4");
const foto5 = document.getElementById("foto5");
const foto6 = document.getElementById("foto6");
const foto7 = document.getElementById("foto7");
const foto8 = document.getElementById("foto8");
const foto9 = document.getElementById("foto9");
const foto10 = document.getElementById("foto10");
const foto11 = document.getElementById("foto11");
const foto12 = document.getElementById("foto12");
const foto13 = document.getElementById("foto13");
const foto14 = document.getElementById("foto14");
const foto15 = document.getElementById("foto15");

foto1.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img10.jpg";
  modaleGaleria.className = "foto-mostrado";
});
foto2.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img1.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto3.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img8.jpg";
  modaleGaleria.className = "foto-mostrado";
});
foto4.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img3.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto5.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img14.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto6.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img5.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto7.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img6.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto8.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img7.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto9.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img2.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto10.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img9.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto11.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto12.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img11.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto13.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img12.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto14.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img13.jpg";
  modaleGaleria.className = "foto-mostrado";
});

foto15.addEventListener("click", () => {
  imagenModal.src = "./imagenes-galeria/img4.jpg";
  modaleGaleria.className = "foto-mostrado";
});

ocultarModal.addEventListener("click", () => {
  modaleGaleria.className = "foto-oculto";
});
