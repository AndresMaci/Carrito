<?php
$servidor="3.128.205.248";
$usuario="remoto";
$password="andresramos";
$bd="carrito";
$conecta = mysqli_connect($servidor,$usuario,$password,$bd);
if($conecta->connect_error){
    die("Error al conectar".$conecta->connect_error);
}

$parametro1 = $_GET['time'];
  $parametro2 = $_GET['direccion'];
$parametro3 = $_GET['distancia'];
  $parametro4 = $_GET['ulColor'];
$parametro5 = $_GET['modo'];

echo "hola ".$parametro1 .$parametro2 .$parametro3 .$parametro4 .$parametro5 ;

?>