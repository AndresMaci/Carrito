<?php

if(isset($_GET['v'])) {
include 'conexion.php';
  $op = $_GET['v'];
echo $op;
}
?>
