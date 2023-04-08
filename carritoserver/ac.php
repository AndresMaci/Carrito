<?php
if(isset($_GET['v'])) {
    include 'conexion.php';
    $op = $_GET['v'];

    if ($op == 1) {
        $sql = "UPDATE carrito SET c = 1 WHERE time = 1";
        $resultado = mysqli_query($conecta, $sql);
        if (!$resultado) {
            die("Error al actualizar la base de datos: " . mysqli_error($conecta));
        }
    } elseif ($op == 2) {
        $op = "modo";
        $sql = "SELECT * FROM carrito WHERE time = 1";
        $resultado = mysqli_query($conecta, $sql);
        if (!$resultado) {
            die("Error al actualizar la base de datos: " . mysqli_error($conecta));
        }
        $fila = mysqli_fetch_assoc($resultado);
        $c = $fila[$op];
        if ($c == 1) {
            $sql = "UPDATE carrito SET modo = 0 WHERE time = 1";
            $resultado = mysqli_query($conecta, $sql);
            if (!$resultado) {
                die("Error al actualizar la base de datos: " . mysqli_error($conecta));
            }
        } else {
            $sql = "UPDATE carrito SET modo = 1 WHERE time = 1";
            $resultado = mysqli_query($conecta, $sql);
            if (!$resultado) {
                die("Error al actualizar la base de datos: " . mysqli_error($conecta));
            }
        }
    } elseif ($op == 3) {
        $sql = "UPDATE carrito SET direccion = 0 WHERE time = 1";
        $resultado = mysqli_query($conecta, $sql);
        if (!$resultado) {
            die("Error al actualizar la base de datos: " . mysqli_error($conecta));
        }
    } elseif ($op == 4) {
        $sql = "UPDATE carrito SET direccion = 1 WHERE time = 1";
        $resultado = mysqli_query($conecta, $sql);
        if (!$resultado) {
            die("Error al actualizar la base de datos: " . mysqli_error($conecta));
        }
    } elseif ($op == 5) {
        $sql = "UPDATE carrito SET direccion = 2 WHERE time = 1";
        $resultado = mysqli_query($conecta, $sql);
        if (!$resultado) {
            die("Error al actualizar la base de datos: " . mysqli_error($conecta));
        }
    } elseif ($op == 6) {
        $sql = "UPDATE carrito SET direccion = 3 WHERE time = 1";
        $resultado = mysqli_query($conecta, $sql);
        if (!$resultado) {
            die("Error al actualizar la base de datos: " . mysqli_error($conecta));
        }
    }elseif ($op == 7) {
        $sql = "UPDATE carrito SET direccion = 4 WHERE time = 1";
        $resultado = mysqli_query($conecta, $sql);
        if (!$resultado) {
            die("Error al actualizar la base de datos: " . mysqli_error($conecta));
        }
    }

    echo "ok";
}

?>
