
<?php
include 'conexion.php';
?>

<!DOCTYPE html>
<html>
<head>
	<title>Control de Carro</title>
	<link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
	<h1>Control de Carro</h1>
	
	<div id="botones">
		<button id="izquierda">Izquierda</button>
		<button id="arriba">Arriba</button>
		<button id="abajo">Abajo</button>
		<button id="derecha">Derecha</button>
	</div>

	<div id="informacion">
		<h2>Información del Carro</h2>
		<p><strong>Distancia:</strong> <span id="distancia">0</span> m</p>
		<p><strong>Dirección:</strong> <span id="direccion">Norte</span></p>
		<p><strong>Último Color Leído:</strong> <span id="color">Rojo</span></p>
		<p><strong>Modo:</strong> <span id="modo">Manual</span></p>
	</div>

	<div id="cambio-modo">
		<button id="cambiar-modo">Cambiar Modo</button>
	</div>

	<script src="script.js"></script>
</body>
</html>
