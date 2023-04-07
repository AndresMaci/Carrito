<?php

$resultado = mysqli_query($conexion, "SELECT valor FROM tabla WHERE id = 1");

if (!$resultado) {
    die("La consulta SQL ha fallado: " . mysqli_error($conexion));
}

$fila = mysqli_fetch_assoc($resultado);
$valor = $fila['valor'];

mysqli_close($conexion);

echo $valor;

?>
