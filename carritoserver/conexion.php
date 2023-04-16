<?php
$servidor="3.145.9.14";
$usuario="remoto";
$password="andresramos";
$bd="carrito";
$conecta = mysqli_connect($servidor,$usuario,$password,$bd);
if($conecta->connect_error){
    die("Error al conectar".$conecta->connect_error);
}
?>
