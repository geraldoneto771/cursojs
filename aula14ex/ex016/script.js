function contar() {
    var inicio = Number(document.getElementById('inicio').value);
    var fim = Number(document.getElementById('fim').value);
    var passo = Number(document.getElementById('passo').value);

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'contando:<br>';
    for (inicio; inicio <= fim; inicio += passo) {
        resultado.innerHTML += `${inicio} &#x1F449`;
        console.log(inicio);
    }

    resultado.innerHTML += '&#x1F3F4';
}
