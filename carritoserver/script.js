const leftBtn = document.getElementById('left-btn');
const forwardBtn = document.getElementById('forward-btn');
const backwardBtn = document.getElementById('backward-btn');
const rightBtn = document.getElementById('right-btn');
const autoModeBtn = document.getElementById('auto-mode-btn');
const distanceEl = document.getElementById('distance');
const directionEl = document.getElementById('direction');
const colorEl = document.getElementById('color');
const modeEl = document.getElementById('mode');

// Definir variables de estado del carrito
let distance = 0;
let direction = 'Norte';
let color = 'Rojo';
let mode = 'Manual';
let conexion = "Desconectado";

// Funciones para manejar los eventos de los botones
function moveLeft() {
	if (mode === 'Manual') {
		console.log('Moviendo hacia la izquierda');
	}
}

function moveForward() {
	if (mode === 'Manual') {
		console.log('Moviendo hacia adelante');
		distance += 1;
		distanceEl.innerText = distance;
	}
}

function moveBackward() {
if (mode === 'Manual') {
console.log('Moviendo hacia atrás');
distance -= 1;
distanceEl.innerText = distance;
}
}

function moveRight() {
if (mode === 'Manual') {
console.log('Moviendo hacia la derecha');
}
}

function toggleAutoMode() {
if (mode === 'Manual') {
console.log('Cambiando a modo automático');
mode = 'Automático';
leftBtn.disabled = true;
forwardBtn.disabled = true;
backwardBtn.disabled = true;
rightBtn.disabled = true;
modeEl.innerText = mode;
} else {
console.log('Cambiando a modo manual');
mode = 'Manual';
leftBtn.disabled = false;
forwardBtn.disabled = false;
backwardBtn.disabled = false;
rightBtn.disabled = false;
modeEl.innerText = mode;
}
}

// Asignar manejadores de eventos a los botones
leftBtn.addEventListener('click', moveLeft);
forwardBtn.addEventListener('click', moveForward);
backwardBtn.addEventListener('click', moveBackward);
rightBtn.addEventListener('click', moveRight);
autoModeBtn.addEventListener('click', toggleAutoMode);
