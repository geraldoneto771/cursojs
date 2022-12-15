function contar() {
    var inicio = document.getElementById('inicio').value;
    var fim = document.getElementById('fim').value;
    var passo = Number(document.getElementById('passo').value);

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'contando:<br>';

    if (inicio == '') {
        alert('[ERRO] - Entre com um valor de Inicio');
    } else {
        alert('inicio valido: ' + Number(inicio));
    }
    if (fim == '' || fim <= 0) {
        alert('[ERRO] - Entre com um valor de Fim');
    } else {
        alert('Fim valido: ' + Number(fim));
    }
    /*
    for (inicio; inicio <= fim; inicio += passo) {
        resultado.innerHTML += `${inicio} &#x1F449`;
        console.log(inicio);
    }*/

    resultado.innerHTML += '&#x1F3F4';
}
