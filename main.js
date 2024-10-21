//criando a função para executar o audio
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//para
for (let contador =0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; //para otimizar o código, deixá-lo mais "curto", criou-se a variável tecla apenas para simplificar
    const instrumento = tecla.classList[1]; //classList[1] é a propriedade para identificar a posição em cada button no html dentro da tag, por exemplo, no         <button class="tecla tecla_pom">Pom</button> a posição 0 é tecla e a posição 1 é tecla_pom
    const idAudio = `#som_${instrumento}`; //para otimizar o código, deixá-lo mais "curto", criou-se a variável idAudio apenas para simplificar

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || 'Enter') {
            tecla.classList.add('ativa');
        } 
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
