let mercado = JSON.parse(localStorage.getItem("Mercado"));
if (mercado == null) mercado = [];
let lista = document.querySelector("#listaMercado");

function addElemento(nombre) {
  // funcion que crea un elemento nuevo y lo añade a la lista de mercado
  // Creo el nuevo elemento li
  let elemento = document.createElement("li");
  // Le pongo texto a este nuevo elemento
  elemento.innerHTML = nombre;
  // Pongo el nuevo elemento como child de la lista
  lista.appendChild(elemento);
}
function generarListaHtml() {
  lista.innerHTML = "";
  for (let elem of mercado) {
    addElemento(elem);
  }
}
let btn = document.querySelector("#btnAdd");
let input = document.querySelector("#inputAdd");
function btnPresionado() {
  // Leer el valor escrito por el usuario
  let nombre = input.value;
  input.value = "";
  // Añadir el valor a la lista en js
  mercado.push(nombre);
  // Actualizar la lista
  generarListaHtml();
  // Guardar en el almacenamiento local
  localStorage.setItem("Mercado", JSON.stringify(mercado));
}
btn.onclick = btnPresionado;
generarListaHtml();

// Accediendo al almacenamiento local
// El almacenamiento local permite guardar solamente cadenas de caracteres.
// se debe convertir la lista en una cadena de caracteres

// console.log(JSON.parse(localStorage.getItem("Mercado")));
// localStorage.setItem("Curso", "Terza");
// localStorage.setItem("Edad", "16");
// localStorage.setItem("Materia", "fisica");