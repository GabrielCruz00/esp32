<?php

// $conexion = new mysqli("localhost", "id18809090_tlacua00", "", "id18809090_dsm" );
    $conexion = new mysqli("localhost", "root", "", "dsm" );
    
    if(!$conexion){
        return $respuesta = ["res" => false];
    } else {
        return $conexion;
    }

?>