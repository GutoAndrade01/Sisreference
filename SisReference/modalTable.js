document.addEventListener("DOMContentLoaded", function () {
    var tableBody = document.querySelector("#myTable tbody");

    tableBody.addEventListener('click', function (event) {
        var row = event.target.closest('tr');
        if (!row) return;

        var id = parseInt(row.cells[0].textContent.trim());

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var referencia = JSON.parse(xhr.responseText);

                    var modalBody = document.querySelector('#modalDetalhes .modal-body');
                    modalBody.innerHTML = `
                        <p><strong>ID:</strong> <span id="ref_id">${referencia.id}</span></p>
                        <p><strong>Produto:</strong> ${referencia.produto}</p>
                        <p><strong>Referência:</strong> ${referencia.referencia}</p>
                        <p><strong>Variação:</strong> ${referencia.variacao}</p>
                        <p><strong>Tamanho 36:</strong> <input type="text" class="form-control size-input" id="tam_36" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_36}"></p>
                        <p><strong>Tamanho 38:</strong> <input type="text" class="form-control size-input" id="tam_38" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_38}"></p>
                        <p><strong>Tamanho 40:</strong> <input type="text" class="form-control size-input" id="tam_40" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_40}"></p>
                        <p><strong>Tamanho 42:</strong> <input type="text" class="form-control size-input" id="tam_42" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_42}"></p>
                        <p><strong>Tamanho 44:</strong> <input type="text" class="form-control size-input" id="tam_44" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_44}"></p>
                        <p><strong>Tamanho 46:</strong> <input type="text" class="form-control size-input" id="tam_46" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_46}"></p>
                        <p><strong>Tamanho 48:</strong> <input type="text" class="form-control size-input" id="tam_48" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_48}"></p>
                        <p><strong>Tamanho 50:</strong> <input type="text" class="form-control size-input" id="tam_50" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_50}"></p>
                        <p><strong>Tamanho 52:</strong> <input type="text" class="form-control size-input" id="tam_52" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_52}"></p>
                        <p><strong>Tamanho 54:</strong> <input type="text" class="form-control size-input" id="tam_54" maxlength="4" oninput="validateNumberInput(this)" value="${referencia.tam_54}"></p>
                        <p><strong>Quantidade Total:</strong> <span id="total">${referencia.total}</span></p>
                        <p><strong>Data:</strong> ${referencia.dataInclude}</p>
                    `;

                    // Adiciona evento para capturar mudanças no campo #Variacao
                    var variacaoInput = document.getElementById('Variacao');
                    variacaoInput.addEventListener('input', function() {
                        variacao = variacaoInput.value.trim(); // Atualiza a variável variacao
                    });

                    // Adiciona evento para atualizar o total ao mudar valores nos inputs
                    var inputs = modalBody.querySelectorAll('.size-input');
                    inputs.forEach(function (input) {
                        input.addEventListener('input', updateTotal);
                    });

                    var modalDetalhes = new bootstrap.Modal(document.getElementById('modalDetalhes'));
                    modalDetalhes.show();
                } else {
                    console.error('Erro ao obter dados da referência:', xhr.status);
                }
            }
        };

        xhr.open('GET', 'buscaRef.php?id=' + id, true);
        xhr.send();
    });

    // Função para atualizar o total
    function updateTotal() {
        var tam_36 = parseInt(document.getElementById('tam_36').value.trim()) || 0;
        var tam_38 = parseInt(document.getElementById('tam_38').value.trim()) || 0;
        var tam_40 = parseInt(document.getElementById('tam_40').value.trim()) || 0;
        var tam_42 = parseInt(document.getElementById('tam_42').value.trim()) || 0;
        var tam_44 = parseInt(document.getElementById('tam_44').value.trim()) || 0;
        var tam_46 = parseInt(document.getElementById('tam_46').value.trim()) || 0;
        var tam_48 = parseInt(document.getElementById('tam_48').value.trim()) || 0;
        var tam_50 = parseInt(document.getElementById('tam_50').value.trim()) || 0;
        var tam_52 = parseInt(document.getElementById('tam_52').value.trim()) || 0;
        var tam_54 = parseInt(document.getElementById('tam_54').value.trim()) || 0;

        var total = tam_36 + tam_38 + tam_40 + tam_42 + tam_44 + tam_46 + tam_48 + tam_50 + tam_52 + tam_54;
        document.getElementById('total').textContent = total;
    }

    // Capturar o clique no botão "Salvar" e enviar os dados via AJAX
    document.getElementById('saveButton').addEventListener('click', function () {
        var id = document.getElementById('ref_id').textContent.trim();
        var tam_36 = document.getElementById('tam_36').value.trim();
        var tam_38 = document.getElementById('tam_38').value.trim();
        var tam_40 = document.getElementById('tam_40').value.trim();
        var tam_42 = document.getElementById('tam_42').value.trim();
        var tam_44 = document.getElementById('tam_44').value.trim();
        var tam_46 = document.getElementById('tam_46').value.trim();
        var tam_48 = document.getElementById('tam_48').value.trim();
        var tam_50 = document.getElementById('tam_50').value.trim();
        var tam_52 = document.getElementById('tam_52').value.trim();
        var tam_54 = document.getElementById('tam_54').value.trim();
        var total = document.getElementById('total').textContent.trim();

        var data = {
            id: id,
            tam_36: tam_36,
            tam_38: tam_38,
            tam_40: tam_40,
            tam_42: tam_42,
            tam_44: tam_44,
            tam_46: tam_46,
            tam_48: tam_48,
            tam_50: tam_50,
            tam_52: tam_52,
            tam_54: tam_54,
            total: total
        };

        console.log('Sending data:', data); // Log de depuração

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'editarRef.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        alert('Dados salvos com sucesso!');
                        var modalDetalhes = bootstrap.Modal.getInstance(document.getElementById('modalDetalhes'));
                        modalDetalhes.hide();

                        // Atualiza a tabela após salvar os dados
                        refreshTable(); // Você precisa implementar esta função
                    } else {
                        console.error('Erro ao salvar dados:', response.error);
                    }
                } else {
                    console.error('Erro ao salvar dados:', xhr.status);
                }
            }
        };
        xhr.send(JSON.stringify(data));
    });

    // Função para atualizar a tabela após salvar os dados
    function refreshTable() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    // Supondo que `updateTable` seja uma função para atualizar a tabela com os novos dados
                    updateTable(data.referencia);
                } else {
                    console.error('Erro ao buscar dados atualizados:', xhr.status);
                }
            }
        };

        // Fazer uma requisição GET para buscar os dados atualizados do servidor
        xhr.open('GET', 'buscaRef.php?id=' + id, true); // `id` deve ser o ID da referência atualizada
        xhr.send();
    }
});
