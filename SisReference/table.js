document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10; // Número de linhas por página
    let currentPage = 1;
    const table = document.getElementById('myTable');
    const tbody = table.querySelector('tbody');
    const paginationControls = document.getElementById('paginationControls');


    $(document).ready(function () {
        $.ajax({
            url: "table.php",
            type: "GET",
            dataType: "json",
            success: function (data) {
                var table = $("#myTable");
                table.find("tbody").empty();
    
                $.each(data, function (index, value) {
                    var row = "<tr>";
                    row += "<td>" + value.id + "</td>";
                    row += "<td>" + value.produto + "</td>";
                    row += "<td>" + value.referencia + "</td>";
                    row += "<td>" + value.variacao + "</td>";
                    row += "<td>" + value.total + "</td>";
                    row += "<td>" + value.dataInclude + "</td>";
                    row += "</tr>";
    
                    table.find("tbody").append(row);
                });
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    });

//     // Função para renderizar os controles de paginação
//     function renderPagination() {
//         paginationControls.innerHTML = '';
//         const totalPages = Math.ceil(data.length / rowsPerPage);

//         for (let i = 1; i <= totalPages; i++) {
//             const button = document.createElement('button');
//             button.classList.add('pagination-button');
//             if (i === currentPage) {
//                 button.classList.add('disabled');
//             }
//             button.textContent = i;
//             button.addEventListener('click', () => {
//                 currentPage = i;
//                 renderTable(currentPage);
//                 renderPagination();
//             });
//             paginationControls.appendChild(button);
//         }
//     }

//     // Inicialize a tabela e a paginação
//     // renderTable(currentPage);
//     renderPagination();
});

