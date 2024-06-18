
    

    // Adicionar evento de input para chamar a função de filtro quando o usuário digitar
    document.getElementById('filtro').addEventListener('input', filtrarTabela);

    function filtrarTabela() {
        var filtro = document.getElementById('filtro').value.toUpperCase();
        var table = document.getElementById('myTable');
        var rows = table.getElementsByTagName('tr');
    
        // Iterar pelas linhas da tabela a partir do índice 1 (para evitar o cabeçalho)
        for (var i = 1; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            var encontrou = false;
    
            // Iterar pelas células da linha
            for (var j = 0; j < cells.length; j++) {
                var cell = cells[j];
                if (cell) {
                    var textValue = cell.textContent || cell.innerText;
                    if (textValue.toUpperCase().indexOf(filtro) > -1) {
                        encontrou = true;
                        break;
                    }
                }
            }
            // Exibir ou ocultar a linha da tabela baseado no filtro
            if (encontrou) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
    

    // Ajustar a largura das colunas do cabeçalho para corresponder às da tabela
    function ajustarLarguraColunas() {
        var tabela = document.getElementById('myTable');
        var larguras = [];
        
        // Obtém as larguras das colunas da primeira linha de dados (tbody)
        var primeiraLinhaDados = tabela.querySelector('tbody tr');
        if (primeiraLinhaDados) {
            Array.from(primeiraLinhaDados.cells).forEach(function(cell, index) {
                larguras[index] = cell.offsetWidth;
            });

            // Aplica as larguras ao cabeçalho
            var cabeçalho = tabela.querySelector('thead tr');
            if (cabeçalho) {
                Array.from(cabeçalho.cells).forEach(function(cell, index) {
                    cell.style.width = larguras[index] + 'px';
                });
            }
        }
    }

    // Ajustar largura das colunas quando a página carregar e redimensionar a janela
    window.addEventListener('DOMContentLoaded', ajustarLarguraColunas);
    window.addEventListener('resize', ajustarLarguraColunas);

    // Evento de scroll para manter o cabeçalho fixo
    window.addEventListener('scroll', function() {
        var tabela = document.getElementById('myTable');
        var thead = tabela.querySelector('thead');
        if (thead) {
            var scrollTop = window.scrollY || window.pageYOffset;
            var tabelaTop = tabela.getBoundingClientRect().top + scrollTop;
            var theadHeight = thead.offsetHeight;

            if (scrollTop > tabelaTop && scrollTop < (tabelaTop + tabela.offsetHeight - theadHeight)) {
                thead.classList.add('fixed-header');
            } else {
                thead.classList.remove('fixed-header');
            }
        }
    });

