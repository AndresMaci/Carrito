// Obtenemos los elementos de la página
const botonArriba = document.getElementById("boton-arriba");
const botonAbajo = document.getElementById("boton-abajo");
const botonIzquierda = document.getElementById("boton-izquierda");
const botonDerecha = document.getElementById("boton-derecha");
const botonCambioModo = document.getElementById("boton-cambio-modo");
const distanciaElemento = document.getElementById("distancia");
const direccionElemento = document.getElementById("direccion");
const ultimoColorElemento = document.getElementById("ultimo-color");
const modoElemento = document.getElementById("modo");

// Inicializamos las variables
let distancia = 0;
let direccion = "Norte";
let ultimoColor = "Rojo";
let modo = "Manual";

// Función para actualizar la información del carro
function actualizarInformacionCarro() {
  distanciaElemento.textContent = distancia;
  direccionElemento.textContent = direccion;
  ultimoColorElemento.textContent = ultimoColor;
  modoElemento.textContent = modo;
}

// Función para mover el carro hacia arriba
function moverArriba() {
  if (modo === "Manual") {
    direccion = "Norte";
    distancia += 10;
    actualizarInformacionCarro();
  }
}

// Función para mover el carro hacia abajo
function moverAbajo() {
  if (modo === "Manual") {
    direccion = "Sur";
    distancia -= 10;
    actualizarInformacionCarro();
  }
}

// Función para mover el carro hacia la izquierda
function moverIzquierda() {
  if (modo === "Manual") {
    direccion = "Oeste";
    distancia += 10;
    actualizarInformacionCarro();
  }
}

// Función para mover el carro hacia la derecha
function moverDerecha() {
  if (modo === "Manual") {
    direccion = "Este";
    distancia -= 10;
    actualizarInformacionCarro();
  }
}

// Función para cambiar el modo del carro
function cambiarModo() {
  if (modo === "Manual") {
    modo = "Automático";
    botonArriba.disabled = true;
    botonAbajo.disabled = true;
    botonIzquierda.disabled = true;
    botonDerecha.disabled = true;
  } else {
    modo = "Manual";
    botonArriba.disabled = false;
    botonAbajo.disabled = false;
    botonIzquierda.disabled = false;
    botonDerecha.disabled = false;
  }
  actualizarInformacionCarro();
}

// Añadimos los eventos a los botones
botonArriba.addEventListener("click", moverArriba);
botonAbajo.addEventListener("click", moverAbajo);
botonIzquierda.addEventListener("click", moverIzquierda);
botonDerecha.addEventListener("click", moverDerecha);
botonCambioModo.addEventListener("click", cambiarModo);

// Actualizamos la información del carro por primera vez
actualizarInformacionCarro();
