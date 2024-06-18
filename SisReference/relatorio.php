<?php
include "conexao.php";

$sql = "SELECT produto, referencia, variacao, tam_36, tam_38, tam_40, tam_42, tam_44, tam_46, tam_48, tam_50, tam_52, tam_54, total FROM reference";

$result = mysqli_query($conexao, $sql);

$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);

// Fecha a conexão com o banco de dados
mysqli_close($conexao);
?>