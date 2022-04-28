<?php

    function abrirConexion(){
        // $conexion = new mysqli("localhost", "id18809090_tlacua00", "", "id18809090_dsm" );
        $conexion = new mysqli("127.0.0.1", "root", "", "dsm" );
        return $conexion;
    }
    
    function cerrarConexion(){
        $conexion -> close();
    }
?>