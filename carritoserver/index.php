<?php
include 'conexion.php';
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
			   <button id="left-btn">Izquierda</button>
			   <button id="forward-btn">Adelante</button>
			   <button id="backward-btn">Atras</button>
			   <button id="right-btn">Derecha</button>
			   <button id="auto-mode-btn">Modo Automático</button>
				
		</div>
		<div class="info">
			<h2>Información del Carrito</h2>
			<p>Carro conectado: <span id="c"><?phpwhile (true) {
$resultado = mysqli_query($conecta, "SELECT time FROM carrito WHERE time = 1");
if (!$resultado) {
    die("La consulta SQL ha fallado: " . mysqli_error($conexion));
}
$a= mysqli_fetch_assoc($resultado);
$valor = $a['time'];
$v=$valor;
if ($v==1) {
    $v="Desconectado";
}
if ($v==0) {
    $v="Conectado";
}
	sleep(1);
}; ?></span></p>
			<p>Distancia Recorrida: <span id="distance">0</span> metros</p>
			<p>Dirección: <span id="direction">Norte</span></p>
			<p>Último Color Leído: <span id="color">Rojo</span></p>
			<p>Modo: <span id="mode">Manual</span></p>
		</div>
		
	</div>
	<script type="text/javascript" src="script.js"></script>
</body>
</html>
