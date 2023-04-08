<?php
include 'conexion.php';

$op = $_GET['v'];
$v = 0;

if ($op == 1) {
  $op = "c";
  $v = 1;
} elseif ($op == 2) {
  $op = "modo";
  $sql = "SELECT * FROM carrito WHERE time = 1";
  $resultado = mysqli_query($conecta, $sql);
  if (!$resultado) {
    die("Error al actualizar la base de datos: " . mysqli_error($conecta));
  }
  $fila = mysqli_fetch_assoc($resultado);
  $c = $fila[$op];
  if ($c==1){
    $v=0;
  }elseif{
     $v=1;
  }
} elseif ($op == 3) {
  $op = "direccion";
} elseif ($op == 4) {
  $op = "direccion";
  $v = 1;
} elseif ($op == 5) {
  $op = "direccion";
  $v = 2;
} elseif ($op == 6) {
  $op = "direccion";
  $v = 3;
}

$sql = "UPDATE carrito SET $op = :valor WHERE time = :id";
$stmt = $conecta->prepare($sql);
$stmt->bindParam(':valor', $v);
$stmt->execute();
echo "ok";
?>
