<?php
$servidor = "3.145.9.14";
$usuario = "remoto";
$password = "andresramos";
$bd = "carrito";
$conecta = mysqli_connect($servidor, $usuario, $password, $bd);
if ($conecta->connect_error) {
    die("Error al conectar" . $conecta->connect_error);
}
$op = $_GET['op'];
if ($op == 1) {
    $sql = "UPDATE carrito SET c = 0 WHERE time = 1";
    $resultado = mysqli_query($conecta, $sql);
    if (!$resultado) {
        die("Error al actualizar la base de datos: " . mysqli_error($conecta));
    }
    echo "bien";
} elseif ($op == 2) {
    $op = "modo";
    $sql = "SELECT * FROM carrito WHERE time = 1";
    $resultado = mysqli_query($conecta, $sql);
    if (!$resultado) {
        die("Error al actualizar la base de datos: " . mysqli_error($conecta));
    }
    $fila = mysqli_fetch_assoc($resultado);
    $c = $fila[$op];
    echo $c;
} elseif ($op == 3) {
    $op = "direccion";
    $sql = "SELECT * FROM carrito WHERE time = 1";
    $resultado = mysqli_query($conecta, $sql);
    if (!$resultado) {
        die("Error al actualizar la base de datos: " . mysqli_error($conecta));
    }
    $fila = mysqli_fetch_assoc($resultado);
    $c = $fila[$op];
    echo $c;
} elseif ($op == 4) {
    $sql = "UPDATE carrito SET distancia = '$v' WHERE time = 1";
    $resultado = mysqli_query($conecta, $sql);
    if (!$resultado) {
        die("Error al actualizar la base de datos: " . mysqli_error($conecta));
    }
} elseif ($op == 5) {
    $sql = "UPDATE carrito SET ulColor = '$v' WHERE time = 1";
    $resultado = mysqli_query($conecta, $sql);
    if (!$resultado) {
        die("Error al actualizar la base de datos: " . mysqli_error($conecta));
    }
}elseif ($op == 6) {
    $sql = "UPDATE carrito SET d = '$v' WHERE time = 1";
    $resultado = mysqli_query($conecta, $sql);
    if (!$resultado) {
        die("Error al actualizar la base de datos: " . mysqli_error($conecta));
    }
?>
