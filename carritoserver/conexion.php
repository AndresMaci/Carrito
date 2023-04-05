<?php
$servidor="3.128.205.248";
$usuario="remoto";
$password="andresramos";
$bd="carrito";
$conecta = mysqli_connect($servidor,$usuario,$password,$bd);
if($conecta->connect_error){
    die("Error al conectar".$conecta->connect_error);
}

$sql = "SHOW TABLES";

// Ejecutar la consulta
$resultado = mysqli_query($conecta, $sql);

// Verificar si hay resultados
if (mysqli_num_rows($resultado) > 0) {
    // Mostrar los nombres de las tablas
    while ($fila = mysqli_fetch_row($resultado)) {
        echo $fila[0] . "<br>";
    }
} else {
    echo "No se encontraron resultados.";
}

// Cerrar la conexión
mysqli_close($conexion);
?>
