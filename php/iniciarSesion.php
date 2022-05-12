<?php

    require('./conexion.php');
    $user = $_POST['user'];
    $pswd = $_POST['pswd'];
    //$res = ['res' => false];
    if(empty($user) || empty($pswd)){
        $res = ['res' => false];
    } else {
        $conexion = abrirConexion();
        $query = "SELECT * FROM user WHERE idUser = '$user' AND pswd = '$pswd'";
        //echo $query;
        $resultado = $conexion -> query($query);
        //print_r($resultado)
        if($resultado -> num_rows == 1){
            $res = ['res'=> true];
        } else {
            $res = ['res'=> false];
        }
    }
    echo json_encode($res);
?>