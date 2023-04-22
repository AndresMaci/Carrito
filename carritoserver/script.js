const leftBtn = document.getElementById('left-btn');
const forwardBtn = document.getElementById('forward-btn');
const backwardBtn = document.getElementById('backward-btn');
const rightBtn = document.getElementById('right-btn');
const autoModeBtn = document.getElementById('auto-mode-btn');
const distanceEl = document.getElementById('distance');
const directionEl = document.getElementById('direction');
const colorEl = document.getElementById('color');
const modeEl = document.getElementById('mode');
const D = document.getElementById('D');
const p = document.getElementById('p');

var c = document.getElementById("c").innerHTML;
function modos() {
	toggleAutoMode();
	actualizarC(2);
}

function toggleAutoMode() {
	if (modeEl.innerHTML === 'Manual') {
		console.log('Cambiando a modo automático');
		mode = 'Automático';
		leftBtn.disabled = true;
		forwardBtn.disabled = true;
		backwardBtn.disabled = true;
		rightBtn.disabled = true;
		p.disabled = true;
		modeEl.innerText = mode;
	} else {
		console.log('Cambiando a modo manual');
		mode = 'Manual';
		leftBtn.disabled = false;
		p.disabled = false;
		forwardBtn.disabled = false;
		backwardBtn.disabled = false;
		rightBtn.disabled = false;
		modeEl.innerText = mode;
	}
}

function conexion() {
	c = document.getElementById("c").innerHTML;
	console.log(c);
	if (c === 'Conectado') {
		autoModeBtn.disabled = false;
		leftBtn.disabled = false;
		forwardBtn.disabled = false;
		backwardBtn.disabled = false;
		rightBtn.disabled = false;
		D.disabled = false;
		p.disabled = false;
		console.log(c);
	} else {
		console.log(c);
		D.disabled = true;
		p.disabled = true;
		autoModeBtn.disabled = true;
		leftBtn.disabled = true;
		forwardBtn.disabled = true;
		backwardBtn.disabled = true;
		rightBtn.disabled = true;


	}
}
var x3;
setInterval(function () {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			x3 = document.getElementById("c").innerHTML;
			let x2 = this.responseText;
			let x1 = x2.split(" ");
			document.getElementById("c").innerHTML = x1[0];
			document.getElementById("direction").innerHTML = x1[1];
			document.getElementById("distance").innerHTML = x1[2];
			document.getElementById("color").innerHTML = x1[3];
			document.getElementById("mode").innerHTML = x1[4];

			if(x1[1]!="Detenido"){
				switch ((4 + (x1[5] % 4)) % 4) {
				case 1: // girar a la izquierda
					if (x - 10 >= 0) {
						x -= 10;
					}
					break;
				case 2: // girar hacia atrás
					if (y + 10 < canvas.height) {
						y += 10;
					}
					break;
				case 3: // girar a la derecha
					if (x + 10 < canvas.width) {
						x += 10;
					}
					break;
				case 0: // avanzar hacia adelante
					if (y - 10 >= 0) {
						y -= 10;
					}
					break;
			}
			}

			if (document.getElementById("c").innerHTML != x3) {
				conexion();
			}
		}
	};
	xmlhttp.open("GET", "consultas.php", true);
	xmlhttp.send();
}, 1000);


var isUpdating = false;
function actualizarC(valor) {
	console.log("Valor enviado: " + valor);


	if (isUpdating) {
		return;
	}

	isUpdating = true;

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			console.log(this.responseText); // Aquí se maneja la respuesta del servidor
			isUpdating = false;
		}
	};

	xmlhttp.open("GET", "ac.php?v=" + encodeURIComponent(valor), true);
	xmlhttp.send();
}
//

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Configuración inicial del punto
var x = canvas.width / 2;
var y = canvas.height - 10;
var size = 5;
var color = "#000000";
var trail = [];
var dots = [];

// Dibujar el punto y su rastro
function draw() {
	// Agregar la posición actual al rastro
	trail.push({ x: x, y: y });

	// Dibujar el rastro
	ctx.strokeStyle = color;
	ctx.lineWidth = 1;
	ctx.lineCap = "round";
	ctx.beginPath();
	ctx.moveTo(trail[0].x, trail[0].y);
	for (var i = 1; i < trail.length; i++) {
		ctx.lineTo(trail[i].x, trail[i].y);
	}
	ctx.stroke();

	// Dibujar el punto
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fill();

	// Dibujar los puntos
	ctx.fillStyle = "#FF0000";
	for (var i = 0; i < dots.length; i++) {
		ctx.beginPath();
		ctx.arc(dots[i].x, dots[i].y, 3, 0, Math.PI * 2);
		ctx.fill();
	}
}

// Limpiar el canvas
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Detectar las teclas presionadas


// Botón de reinicio
function reinicio() {
	x = canvas.width / 2;
	y = canvas.height - 10;
	size = 5;
	color = "#000000";
	trail = [];
	dots = [];
}

// Función de animación
function animate() {
	clearCanvas();
	draw();
	requestAnimationFrame(animate);
}

// Iniciar la animación
requestAnimationFrame(animate);


//
// Inicia la observación
// Asignar manejadores de eventos a los botones
conexion();
D.addEventListener('click', function () { actualizarC(1); reinicio(); });
p.addEventListener('click', function () { actualizarC(7); });
leftBtn.addEventListener('click', function () { actualizarC(6); });
forwardBtn.addEventListener('click', function () { actualizarC(3); });
backwardBtn.addEventListener('click', function () { actualizarC(4); });
rightBtn.addEventListener('click', function () { actualizarC(5); });
autoModeBtn.addEventListener('click', modos);
