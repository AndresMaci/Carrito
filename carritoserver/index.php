<?php
include 'conexion.php';

$conectado= $_POST['con'];
?>

<!DOCTYPE html>
<html>
<head>
	
	<title>Control de Carrito</title>
	<link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
	<div class="container">
		<div class="controls">
			<h2>Controles del Carrito</h2>
			<a href="/iz">
			   <button id="left-btn">Izquierda</button>
				</a>
			<a href="/ad">
			   <button id="forward-btn">Adelante</button>
				</a>
			<a href="/at">
			   <button id="backward-btn">Atras</button>
				</a>
			<a href="/de">
			   <button id="right-btn">Derecha</button>
				</a>
			
				<a href="/modo">
			   <button id="auto-mode-btn">Modo Automático</button>
					</a>
				
		</div>
		<div class="info">
			<h2>Información del Carrito</h2>
			<p>Carro conectado: <span id="c">Conectado</span></p>
			<p>Distancia Recorrida: <span id="distance">0</span> metros</p>
			<p>Dirección: <span id="direction">Norte</span></p>
			<p>Último Color Leído: <span id="color">Rojo</span></p>
			<p>Modo: <span id="mode">Manual</span></p>
		</div>
	</div>
	<script type="text/javascript" src="script.js"></script>
</body>
</html>
