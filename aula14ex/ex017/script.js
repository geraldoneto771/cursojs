function tabuada() {
    let numero = document.getElementById('numtxt').value;
    let select = document.getElementById('selectId');

    if (numero.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        select.innerHTML = '';
        for (let index = 0; index <= 10; index++) {
            var opt = document.createElement('option');
            //opt.setAttribute('value', index);
            select.innerHTML += `<option value="|">${numero} x ${index} = ${
                numero * index
            }</option>`;
        }
    }
}
