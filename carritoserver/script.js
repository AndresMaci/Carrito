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

let modo = 'Manual';
var c = document.getElementById("c").innerHTML;
function modos() {
	 toggleAutoMode();
	actualizarC(2);
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

function conexion() {
	c = document.getElementById("c").innerHTML;
	console.log(c);
if ( c === 'Conectado') {
autoModeBtn.disabled = false;
leftBtn.disabled = false;
forwardBtn.disabled = false;
backwardBtn.disabled = false;
rightBtn.disabled = false;
D.disabled=false;
	console.log(c);
} else {
	console.log(c);
D.disabled=true;
autoModeBtn.disabled = true;
leftBtn.disabled = true;
forwardBtn.disabled = true;
backwardBtn.disabled = true;
rightBtn.disabled = true;


}
}
var x;
 setInterval(function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
		x=   document.getElementById("c").innerHTML;
		let x2 = this.responseText;
		let x1 =x2.split(" ");
            document.getElementById("c").innerHTML = x1[0];
		document.getElementById("direction").innerHTML = x1[1];
		document.getElementById("distance").innerHTML = x1[2];
		document.getElementById("color").innerHTML = x1[3];
		document.getElementById("mode").innerHTML = x1[4];
		
		if(document.getElementById("c").innerHTML!=x){
			conexion();
		}
        }
    };
    xmlhttp.open("GET", "consultas.php", true);
    xmlhttp.send();
}, 1000);
function actualizarC(valor) {
  console.log("Valor enviado: " + valor);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
	  console.log("Valor: " + valor);
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText); // Aquí se maneja la respuesta del servidor
    } 
  };
  xmlhttp.open("GET", "ac.php?v="+encodeURIComponent(valor), true);
  xmlhttp.send();
}

// Inicia la observación
// Asignar manejadores de eventos a los botones
conexion();
D.addEventListener('click', function() { actualizarC(1); });
leftBtn.addEventListener('click', function() { actualizarC(6); });
forwardBtn.addEventListener('click', function() { actualizarC(3); });
backwardBtn.addEventListener('click', function() { actualizarC(4); });
rightBtn.addEventListener('click', function() { actualizarC(5); });
autoModeBtn.addEventListener('click', modos);
