<?php
include 'conexion.php';

$op= $_GET['v'];
$v=0;
if ($op==1) {
  $op="c";
 $v=1;
}
if ($op==2) {
  $op="modo";
   $sql = "SELECT * FROM carrito WHERE time = 1";
$resultado = mysqli_query($conecta, $sql);
if (!$resultado) {
  die("Error al actualizar la base de datos: " . mysqli_error($conecta));
}
  $fila = mysqli_fetch_assoc($resultado);
$c = $fila['modo'];
if ($op==3)
  $op="direccion";
   $v=0;
}
if ($op==4)
   $op="direccion";
   $v=1;
}
if ($op==5) {
   $op="direccion";
 $v=2;
}
if ($op==6) {
   $op="direccion";
 $v=3;
}
$stmt = $pdo->prepare("UPDATE carrito SET c WHERE id = v");
$stmt->bindParam('c', $op);
$stmt->bindParam('v', $v);
$stmt->execute();
echo "ok";
exit();
?>
