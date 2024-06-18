<?php
include "conexao.php";

$sql = "SELECT id, produto, referencia, variacao, total, dataInclude FROM reference";

$result = mysqli_query($conexao, $sql);

$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);

// Fecha a conexão com o banco de dados
mysqli_close($conexao);
?>