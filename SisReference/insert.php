<?php

include "conexao.php";

// if (isset($_POST['cancel']) && $_POST['cancel'] == 'Cancelar') {
//     echo "<script>window.location.href ='index.html';</script>";
// }

if (isset($_POST['submit']) && $_POST['submit'] == 'Salvar') {
    $produto = $_POST['produto'];
    $ref = $_POST['referencia'];
    $variacao = $_POST['variacao'];
    $tam36 = isset($_POST['36']) ? intval($_POST['36']) : 0;
    $tam38 = isset($_POST['38']) ? intval($_POST['38']) : 0;
    $tam40 = isset($_POST['40']) ? intval($_POST['40']) : 0;
    $tam42 = isset($_POST['42']) ? intval($_POST['42']) : 0;
    $tam44 = isset($_POST['44']) ? intval($_POST['44']) : 0;
    $tam46 = isset($_POST['46']) ? intval($_POST['46']) : 0;
    $tam48 = isset($_POST['48']) ? intval($_POST['48']) : 0;
    $tam50 = isset($_POST['50']) ? intval($_POST['50']) : 0;
    $tam52 = isset($_POST['52']) ? intval($_POST['52']) : 0;
    $tam54 = isset($_POST['54']) ? intval($_POST['54']) : 0;
    $total = $tam36 + $tam38 + $tam40 + $tam42 + $tam44 + $tam46 + $tam48 + $tam50 + $tam52 + $tam54;
    $dataInc = date('Y-m-d H:i:s');

    $sql = "INSERT INTO reference (produto, referencia, variacao, tam_36, tam_38, tam_40, tam_42, tam_44, tam_46, tam_48, tam_50, tam_52, tam_54, total, dataInclude)
             VALUES(' $produto', '$ref', '$variacao', '$tam36', '$tam38', '$tam40', '$tam42', '$tam44', '$tam46', '$tam48', '$tam50', '$tam52', '$tam54', '$total', '$dataInc')";   

    if (mysqli_query($conexao, $sql)) {
        echo "<script>alert('Dados Inseridos com Sucesso!!');</script>";
        echo "<script>window.location.href ='index.html';</script>";
    } else {
        echo "Erro ao inserir dados: " . mysqli_error($conexao);
    }
} else{
  echo "<script>window.location.href ='index.html';</script>";
}

// Fecha a conexão com o banco de dados
mysqli_close($conexao);
?>
