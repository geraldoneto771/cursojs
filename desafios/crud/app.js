let todo = [];
let desc = document.getElementById('descTxt');
let listUl = document.getElementById('listUl');
let res = document.getElementById('res');

function adicionar() {
    if (desc.value.length == 0) {
        alert('Adicione uma descrição!');
    } else {
        listUl.innerHTML = '';

        todo.push(desc.value);

        for (let i in todo) {
            var list = document.createElement('li');
            list.appendChild(document.createTextNode(`${todo[i]}`));
            listUl.appendChild(list);
        }

        desc.value = '';
        desc.focus();
    }
}
