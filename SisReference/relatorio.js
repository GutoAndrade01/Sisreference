$(document).ready(function () {
    // Carrega os dados do relatório ao carregar a página
    loadDataFromPHP();
});

function loadDataFromPHP() {
    $.ajax({
        url: "relatorio.php", // URL do seu arquivo PHP que retorna dados JSON
        type: "GET",
        dataType: "json",
        success: function (data) {
            const groupedData = groupDataByProduto(data); // Agrupar por produto
            generateGroupedTable(groupedData); // Gera a tabela com os dados agrupados
        },
        error: function (xhr, status, error) {
            console.error("Erro ao carregar dados do PHP:", error);
        }
    });
}

function groupDataByProduto(data) {
    const groupedData = {};

    data.forEach(item => {
        if (!groupedData[item.produto]) {
            groupedData[item.produto] = [];
        }
        groupedData[item.produto].push(item);
    });

    return groupedData;
}

function generateGroupedTable(groupedData) {
    var table = `
        <table id="myTable" class="display">
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Referência</th>
                    <th>Variação</th>
                    <th>Tam 36</th>
                    <th>Tam 38</th>
                    <th>Tam 40</th>
                    <th>Tam 42</th>
                    <th>Tam 44</th>
                    <th>Tam 46</th>
                    <th>Tam 48</th>
                    <th>Tam 50</th>
                    <th>Tam 52</th>
                    <th>Tam 54</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Itera sobre os dados agrupados por produto para construir as linhas da tabela
    $.each(groupedData, function (produto, items) {
        items.forEach((value, index) => {
            let rowspan = index === 0 ? items.length : 0; // Determina o rowspan apenas na primeira linha

            table += `
                <tr>
                    ${index === 0 ? `<td rowspan="${rowspan}">${produto}</td>` : ''}
                    <td>${value.referencia}</td>
                    ${index === 0 ? `<td rowspan="${rowspan}">${value.variacao}</td>` : ''}
                    <td>${value.tam_36}</td>
                    <td>${value.tam_38}</td>
                    <td>${value.tam_40}</td>
                    <td>${value.tam_42}</td>
                    <td>${value.tam_44}</td>
                    <td>${value.tam_46}</td>
                    <td>${value.tam_48}</td>
                    <td>${value.tam_50}</td>
                    <td>${value.tam_52}</td>
                    <td>${value.tam_54}</td>
                    <td>${value.total}</td>
                </tr>
            `;
        });
    });

    table += `
            </tbody>
        </table>
    `;

    // Insere a tabela gerada dentro do elemento #tableContainer
    $('#tableContainer').html(table);

    // Inicializa o DataTables
    $('#myTable').DataTable({
        paging: false,  // Desabilita a paginação
        searching: false // Desabilita a pesquisa
        // outras opções de configuração
    });
}


function initializeDataTable() {
    $('#myTable').DataTable({
        paging: false,  // Desabilita a paginação
        searching: false // Desabilita a pesquisa
    });
}

function printReport() {
    window.print();
}

// async function saveAsPDF() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF('p', 'mm', 'a4');

//     if (!jsPDF) {
//         console.error('jsPDF library not found.');
//         return;
//     }

//     // Configuração do documento PDF
//     doc.setFillColor(255, 255, 255); // Cor de fundo do PDF (branco)
//     doc.rect(0, 0, 210, 297, 'F'); // Retângulo branco para fundo
//     doc.setTextColor(0); // Cor do texto (preto)

//     // Adicionar título
//     doc.setFontSize(16);
//     doc.text("Relatório de Referências", 105, 20, { align: 'center' });

//     // Adicionar tabela
//     const table = document.getElementById('myTable');
//     doc.autoTable({
//         html: table,
//         startY: 30, // Posição inicial Y
//         theme: 'grid', // Tema da tabela (grid para linhas e bordas em preto)
//         styles: {
//             cellPadding: 1,
//             fontSize: 10,
//             valign: 'middle',
//             halign: 'center'
//         },
//         headStyles: {
//             fillColor: 255, // Fundo do cabeçalho (branco)
//             textColor: 0, // Texto do cabeçalho (preto)
//             fontStyle: 'bold'
//         },
//         alternateRowStyles: {
//             fillColor: 255 // Fundo das linhas alternadas (branco)
//         }
//     });

//     // Salvar o PDF
//     doc.save('relatorio.pdf');
// }



function saveAsExcel() {
    const table = document.getElementById('myTable');
    const ws = XLSX.utils.table_to_sheet(table);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Relatório");

    // Salvar o arquivo Excel
    XLSX.writeFile(wb, 'relatorio.xlsx');
}
