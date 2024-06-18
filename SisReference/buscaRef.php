<?php
// Inclui o arquivo de conexão com o banco de dados
include "conexao.php";

// Verifica se o ID foi passado como parâmetro GET
if (!isset($_GET['id'])) {
    // Se o ID não foi passado, retorna um erro
    echo json_encode(array('error' => 'ID não fornecido'));
    exit;
}

// // Obtém o ID da referência da URL
$id_referencia = $_GET['id'];

// Prepara a consulta SQL para obter os dados da referência
$stmt = $conexao->prepare("SELECT * FROM reference WHERE id = ?");
$stmt->bind_param("i", $id_referencia);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Retorna os dados da referência como JSON
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    // Se não encontrar a referência, retorna um JSON vazio ou uma mensagem de erro
    echo json_encode(array('error' => 'Referência não encontrada'));
}

// Fecha a consulta e a conexão com o banco de dados
$stmt->close();
$conexao->close();
?>
