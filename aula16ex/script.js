var numeros = [];
let final = document.getElementById('final');
function adicionar() {
    var num = document.getElementById('numtxt').value;
    let selectRes = document.getElementById('selectRes');

    if (num.length == 0) {
        alert('Entre com um valor');
    } else {
        num = Number(num);
        final.innerHTML = '';
        if (num <= 0 || num > 100) {
            alert('Por favor, entre com um número entre 1 e 100!');
        } else {
            num = Number(num);
            numeros.push(num);

            let itemOption = document.createElement('option');

            itemOption.text = `Valor ${num} adicionado`;

            selectRes.appendChild(itemOption);
        }
    }
}

function finalizar() {
    final.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados.<br>`;
    let maior = 0;
    let menor = numeros[0];
    let media = 0;
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] <= menor) {
            menor = numeros[i];
        }
        soma += numeros[i];
    }
    media = soma / numeros.length;

    final.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    final.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    final.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    final.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(
        2
    )}. </p>`;
}
