const distanciaElement = document.getElementById("distancia");
const direccionElement = document.getElementById("direccion");
const colorElement = document.getElementById("color");
const modoElement = document.getElementById("modo");

let distancia = 0;
let direccion = "Norte";
let color = "Rojo";
let modo = "Manual";

distanciaElement.textContent = distancia;
direccionElement.textContent = direccion;
colorElement.textContent = color;
modoElement.textContent = modo;

document.getElementById("izquierda").addEventListener("click", () => {
	direccion = "Oeste";
	direccionElement.textContent = direccion;
});

document.getElementById("arriba").addEventListener("click", () => {
	distancia += 10;
	distanciaElement.textContent = distancia;
});

document.getElementById("abajo").addEventListener("click", () => {
	distancia -= 10;
	distanciaElement.textContent = distancia;
});

document.getElementById("derecha").addEventListener("click", () => {
	direccion = "Este";
	direccionElement.textContent = direccion;
});

document.getElementById("cambiar-modo").addEventListener("click", () => {
	if (modo === "Manual") {
		modo = "Automático";
	} else {
		modo = "Manual";
	}
	modoElement.textContent = modo;
});