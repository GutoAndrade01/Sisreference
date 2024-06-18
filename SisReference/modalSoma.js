function calcularSoma() {
    var campos = document.querySelectorAll('.grupo-numeros input[type="text"]');
    var soma = 0;
    campos.forEach(function (campo) {
        if (campo.value !== '') {
            soma += parseInt(campo.value);
        }
    });
    document.getElementById('soma').value = soma;
}

// Chamar a função calcularSoma() quando os valores dos campos de entrada mudarem
var inputs = document.querySelectorAll('.grupo-numeros input[type="text"]');
inputs.forEach(function (input) {
    input.addEventListener('input', calcularSoma);
});

// Validate input to accept only numbers
function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

// Modal functionality
var modal = new bootstrap.Modal(document.getElementById('myModal'));
var btn = document.getElementById('btnIncluirReferencia');

btn.onclick = function () {
    modal.show();
}