function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res');

    if (fAno.value.lenght == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados inseridos');
        } else {
            var fsex = document.getElementsByName('radsex');
            var idade = ano - Number(fAno.value);
            res.innerHTML = `Idade calculada: ${idade}`;
            var genero = ''; //String vazia!
            var img = document.createElement('img');
            img.setAttribute('id', 'foto');

            if (fsex[0].checked) {
                gênero = ' um homem';
                if (idade >= 0 && idade <= 10) {
                    //Criança
                    img.setAttribute('src', 'pexels-aleksandr-balandin-90455-294173.jpg');
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'pexels-aazim-ajaz-547918419-21699167.jpg');
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'pexels-aazim-ajaz-547918419-21699167.jpg');
                } else {
                    //Idoso
                    img.setAttribute('src', 'pexels-aazim-ajaz-547918419-21699167.jpg');
                }

            } else if (fsex[1].checked) {
                gênero = ' uma mulher';
                if (idade >= 0 && idade <= 10) {
                    //Criança
                } else if (idade < 21) {
                    //Jovem
                } else if (idade < 50){
                    //Adulta
                } else {
                    //Idosa
                }
            }
            res.style.textAlign = 'center';
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img);
        }
}