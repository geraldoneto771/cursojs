function tabuada() {
    let numero = document.getElementById('numtxt').value;
    let select = document.getElementById('selectId');

    if (numero.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        select.innerHTML = '';
        numero = Number(numero);
        for (let index = 0; index <= 10; index++) {
            // criando um elemento option no html
            let itemOption = document.createElement('option');

            // adicionando conteudo ao elemento option
            itemOption.text = `${numero} x ${index} = ${numero * index}`;

            // adicionando value nos items
            itemOption.value = `select${numero}`;

            // adicionando o elemento option como filho do select
            select.appendChild(itemOption);
        }
    }
}
