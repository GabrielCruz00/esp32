<?php
    
    require("./conexion.php");

    $dato = $_POST['dato'];
    $sensor = $_POST['sensor'];

    $conexion = abrirConexion();

    if(!$conexion){
        $respuesta = ["res" => false];
    } else {
        $query = "UPDATE lecturas SET medicion = '$dato' WHERE sensor ='$sensor'";
        
        $resultado = $conexion -> query($query);

        if($resultado){
            $respuesta = ['res' => true];
        } else {
            $respuesta = ['res' => false];
        }
    }

    echo json_encode($respuesta);
?>