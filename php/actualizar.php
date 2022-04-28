<?php
    
    require("./conexion.php");

    $dato = $_POST['dato'];
    // $datoHum = $_POST['datoHum'];
    // $datoLuz = $_POST['datoLuz']
    $sensor = $_POST['sensor'];
    // $sensorHum = $_POST['sensorHum'];
    // $sensorLuz = $_POST['sensorLuz'];

    $conexion = abrirConexion();

    if(!$conexion){
        $respuesta = ["res" => false];
    } else {
        $query = "UPDATE lecturas SET medicion = '$dato' WHERE sensor ='$sensor'";
        // $query = "UPDATE lecturas SET medicion = '$datoHum' WHERE sensor ='$sensorHum'";
        // $query = "UPDATE lecturas SET medicion = '$datoLuz' WHERE sensor ='$sensorLuz'";
        
        $resultado = $conexion -> query($query);

        if($resultado){
            $respuesta = ['res' => true];
        } else {
            $respuesta = ['res' => false];
        }
    }

    echo json_encode($respuesta);
?>