function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll(".som_tecla")





for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];    
    const idAudio = `#som_${instrumento}`;//Template string: permite fazer uma string dinâmica
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        console.log(evento.code)
        if(evento.code === ('Space' || 'Enter')){
        tecla.classList.add('ativa');
        }
        if(evento.code === 'Enter'){
            tecla.classList.add('ativa');
            }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
