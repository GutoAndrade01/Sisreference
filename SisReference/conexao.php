<?php
    $servidor = "127.0.0.1";
    $port = "3306";
    $usuario = "root";
    $password = "masterkey";
    $dbname = "sisreference";

    $conexao = mysqli_connect($servidor, $usuario, $password, $dbname);
    mysqli_set_charset($conexao, "utf8");
     if(!$conexao){
        die("Falha na conexão:".mysqli_connect_error());
     }
?>