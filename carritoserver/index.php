

<!DOCTYPE html>
<html>
<head>
	
	<title>Control Carrito</title>
	<link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
	<div class="x">
<div class="container">
  <div class="controls">
    <h2>Controles del Carrito</h2>
    <div class="control-buttons">
      <div class="row">
        <div class="col">
          <button id="left-btn">Izquierda</button>
        </div>
        <div class="col">
          <button id="forward-btn">Adelante</button>
        </div>
        <div class="col">
          <button id="right-btn">Derecha</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button id="backward-btn">Atras</button>
        </div>
        <div class="col">
          <button id="p">Parar</button>
        </div>
        <div class="col">
          <button id="auto-mode-btn">Cambiar modo</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="pista">
		<h2>Recorrido del carro</h2>	
 <canvas id="myCanvas" width="500" height="500"></canvas>
		</div>
		<div class="info">
			<h2>Información del Carrito</h2>
			<p>Carro conectado: <span id="c">Desconectado</span></p>
			<p>Obstaculo detectado: <span id="distance">0</span></p>
			<p>Dirección: <span id="direction">Norte</span></p>
			<p>Último Color Leído: <span id="color">Rojo</span></p>
			<p>Modo: <span id="mode">Manual</span></p>
			<button id="D">Desconectar</button>

		</div>
		
	</div>
	<script type="text/javascript" src="script.js"></script>
</body>
</html>
