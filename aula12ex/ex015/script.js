function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formularioAno = document.getElementById('txtano');
    var resultado = document.querySelector('div#resultado');

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        alert('[ERRO] - Verifique os dados e tente novamente!');
    } else {
        var formularioSexo = document.getElementsByName('radsex');
        var idade = ano - Number(formularioAno.value);

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        var genero = '';

        if (formularioSexo[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-m.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png');
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png');
            }
        } else if (formularioSexo[1].checked) {
            genero = 'Mulher';

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-f.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-adulta-f.png');
            } else {
                img.setAttribute('src', 'img/foto-idosa-f.png');
            }
        }

        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;

        resultado.appendChild(img);
        img.style.paddingTop = '15px';
    }
}
