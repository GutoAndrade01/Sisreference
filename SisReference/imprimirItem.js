// Função para preparar o relatório com base nos dados do modal
function prepararRelatorio() {
    // Capturar os mesmos dados que estão no modal
    var id = document.getElementById('ref_id').textContent.trim();
    var produto = document.querySelector('#modalDetalhes p:nth-of-type(2)').innerText.trim().replace('Produto: ', '');
    var referencia = document.querySelector('#modalDetalhes p:nth-of-type(3)').innerText.trim().replace('Referência: ', '');
    var variacao = document.querySelector('#modalDetalhes p:nth-of-type(4)').innerText.trim().replace('Variação: ', '');
    var tamanho36 = document.getElementById('tam_36').value.trim();
    var tamanho38 = document.getElementById('tam_38').value.trim();
    var tamanho40 = document.getElementById('tam_40').value.trim();
    var tamanho42 = document.getElementById('tam_42').value.trim();
    var tamanho44 = document.getElementById('tam_44').value.trim();
    var tamanho46 = document.getElementById('tam_46').value.trim();
    var tamanho48 = document.getElementById('tam_48').value.trim();
    var tamanho50 = document.getElementById('tam_50').value.trim();
    var tamanho52 = document.getElementById('tam_52').value.trim();
    var tamanho54 = document.getElementById('tam_54').value.trim();
    var total = document.getElementById('total').textContent.trim();
    var dataInclude = document.querySelector('#modalDetalhes p:nth-of-type(16)').innerText.trim().replace('Data: ', '');

    // Preparar o conteúdo HTML para o relatório
    var relatorioHTML = `
        <html>
        <head>
            <title>Referência Detalhado</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                .relatorio-content {
                    width: 21cm; /* Largura padrão de uma página A4 */
                    margin: 20px auto; /* Centraliza o conteúdo e adiciona margens */
                    padding: 20px;
                    box-sizing: border-box;
                    border: 1px solid #ccc; /* Borda para visualização */
                    background-color: #fff; /* Fundo branco */
                    box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Sombra para visualização */
                    position: relative; /* Adicionado para garantir que elementos filhos possam usar posição absoluta */
                }
                h2 {
                    text-align: center;
                }
                .info-item {
                    margin-bottom: 10px;
                    text-align: left; /* Alinha o texto à esquerda dentro do div .info-item */
                }
                .info-item strong {
                    margin-right: 5px;
                }
                .buttons-section {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                }
                .buttons-section button {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    font-size: 14px;
                    border-radius: 4px;
                }
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .relatorio-content,
                    .relatorio-content * {
                        visibility: visible;
                    }
                    .relatorio-content {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        box-shadow: none; /* Remove sombra da borda da página na impressão */
                        border: none; /* Remove borda da página na impressão */
                        margin: 0; /* Remove margem da página na impressão */
                        padding: 0; /* Remove padding da página na impressão */
                    }
                    .no-print {
                        display: none; /* Oculta os elementos que não devem ser impressos */
                    }
                }
            </style>
        </head>
        <body>
            <div class="relatorio-content">
                <h2>Referência Detalhado</h2>
                <div class="info-item"><strong>ID:</strong> ${id}</div>
                <div class="info-item"><strong>OP:</strong> ${produto}</div>
                <div class="info-item"><strong>Referência:</strong> ${referencia}</div>
                <div class="info-item"><strong>Variação:</strong> ${variacao}</div>
                <div class="info-item"><strong>Tamanho 36:</strong> ${tamanho36}</div>
                <div class="info-item"><strong>Tamanho 38:</strong> ${tamanho38}</div>
                <div class="info-item"><strong>Tamanho 40:</strong> ${tamanho40}</div>
                <div class="info-item"><strong>Tamanho 42:</strong> ${tamanho42}</div>
                <div class="info-item"><strong>Tamanho 44:</strong> ${tamanho44}</div>
                <div class="info-item"><strong>Tamanho 46:</strong> ${tamanho46}</div>
                <div class="info-item"><strong>Tamanho 48:</strong> ${tamanho48}</div>
                <div class="info-item"><strong>Tamanho 50:</strong> ${tamanho50}</div>
                <div class="info-item"><strong>Tamanho 52:</strong> ${tamanho52}</div>
                <div class="info-item"><strong>Tamanho 54:</strong> ${tamanho54}</div>
                <div class="info-item"><strong>Quantidade Total:</strong> ${total}</div>
                <div class="info-item"><strong>Data:</strong> ${dataInclude}</div>
                <div class="buttons-section">
                    <button class="no-print" onclick="imprimir()">Imprimir</button>
                </div>
            </div>
        </body>
        <script>
            // Função para imprimir o relatório
            function imprimir() {
                window.print();
            }
        </script>
        </html>
    `;

    // Abrir uma nova janela para impressão ou salvar em PDF
    var novaJanela = window.open('', '_blank');
    novaJanela.document.open();
    novaJanela.document.write(relatorioHTML);
    novaJanela.document.close();
}
