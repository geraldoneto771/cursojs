function contar() {
    var inicio = document.getElementById('inicio').value;
    var fim = document.getElementById('fim').value;
    var passo = document.getElementById('passo').value;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'contando:<br>';

    if (inicio == '') {
        alert('[ERRO] - Entre com um valor de Inicio');
        return 0;
    } else {
        inicio = Number(inicio);
    }
    if (fim == '' || fim <= 0) {
        alert('[ERRO] - Entre com um valor de Fim');
        return 0;
    } else {
        fim = Number(fim);
    }
    if (passo == '') {
        alert('[ERRO] - Entre com um valor de Passo');
        return 0;
    } else {
        passo = Number(passo);
        if (passo <= 0) {
            alert('PASSO igual a Zero, Considerando PASSO 1');
            passo = 1;
        }
        if (fim > inicio) {
            for (inicio; inicio <= fim; inicio += passo) {
                resultado.innerHTML += `${inicio} &#x1F449`;
            }
            resultado.innerHTML += '&#x1F3F4';
        } else if (inicio > fim) {
            for (inicio; inicio >= fim; inicio -= passo) {
                resultado.innerHTML += `${inicio} &#x1F449`;
            }
            resultado.innerHTML += '&#x1F3F4';
        }
    }
    /*
     */
}
