<?php
include "conexao.php";

// Verifica conexão
if ($conexao->connect_error) {
    die("Conexão falhou: " . $conexao->connect_error);
}

// Recebe os dados JSON do AJAX
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    die("Erro ao receber dados JSON.");
}

$id = $data['id'];
$tam_36 = $data['tam_36'];
$tam_38 = $data['tam_38'];
$tam_40 = $data['tam_40'];
$tam_42 = $data['tam_42'];
$tam_44 = $data['tam_44'];
$tam_46 = $data['tam_46'];
$tam_48 = $data['tam_48'];
$tam_50 = $data['tam_50'];
$tam_52 = $data['tam_52'];
$tam_54 = $data['tam_54'];
$total = $data['total'];

try {
    // Prepare SQL statement
    $stmt = $conexao->prepare("UPDATE reference SET tam_36=?, tam_38=?, tam_40=?, tam_42=?, tam_44=?, tam_46=?, tam_48=?, tam_50=?, tam_52=?, tam_54=?, total=? WHERE id=?");

    if (!$stmt) {
        throw new Exception("Erro ao preparar declaração SQL: " . $conexao->error);
    }

    // Bind parameters
    $stmt->bind_param("iiiiiiiiiiis", $tam_36, $tam_38, $tam_40, $tam_42, $tam_44, $tam_46, $tam_48, $tam_50, $tam_52, $tam_54, $total, $id);

    // Execute statement
    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        throw new Exception("Erro ao executar declaração SQL: " . $stmt->error);
    }

    // Close statement
    $stmt->close();
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

// Close connection
$conexao->close();
?>
