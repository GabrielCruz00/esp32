<?php

// $conexion = new mysqli("localhost", "id18809090_tlacua00", "", "id18809090_dsm" );
    $conexion = new mysqli("127.0.0.1", "root", "", "dsm" );
    //1$respuesta = ["res" => true];

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