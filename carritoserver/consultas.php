<?php
include 'conexion.php';


$resultado = mysqli_query($conecta, "SELECT c FROM carrito WHERE time = 1");

if (!$resultado) {
    die("La consulta SQL ha fallado: " . mysqli_error($conexion));
}

$fila = mysqli_fetch_assoc($resultado);
$valor = $fila['c'];
$c=$valor;
if ($c==1){
    $c="Desconectado";
}
if ($c==0){
    $c="Conectado";
}

echo $c;
?>
