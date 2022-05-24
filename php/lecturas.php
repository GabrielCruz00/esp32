<?php

    require('./conexion.php');
    $conexion = abrirConexion();

    if(!$conexion){
        $respuesta = ["res" => false];
    } else {
        // $respuesta = ["res" => true];
        $sql = "SELECT * FROM lecturas";

        $resultado = $conexion -> query($sql);

        foreach($resultado as $valor) {
            $respuesta[] = ['id' => $valor['id'],
                            'nombre' => $valor['sensor'],
                            'valor' => $valor['medicion']];
        }
        $resultado -> free();
    }

    echo json_encode($respuesta);
?>