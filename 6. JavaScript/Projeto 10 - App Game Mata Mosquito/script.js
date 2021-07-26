var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var criarMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?','')

if(nivel === 'normal'){
    criarMosquitoTempo = 1500;
}
else if(nivel === 'dificil'){
    criarMosquitoTempo = 1000;
}
else if(nivel === 'chucknorris'){
    criarMosquitoTempo = 750;
}

function ajustaTamanhoTela(){
    
    altura = window.innerHeight
    largura = window.innerWidth;

    console.log(altura, largura);
}

ajustaTamanhoTela()

var cronometro = setInterval(() => {
    
    tempo--;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
    }
    else{

        document.getElementById('cronometro').innerHTML = tempo;
    }


}, 1000);

function posicaoRandomica(){

    // remover mosquito anterior
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas > 3){
            
            window.location.href ="fim_de_jogo.html";
        }
        else{

            document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) -90;
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
     
    console.log(posicaoX, posicaoY);
    
    
    // criar o elemento HTML    
    var mosquito = document.createElement('img');
    mosquito.src = "imagens/mosquito.png";
    mosquito.className = tamanhoAleatorio() +" " +ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        //alert('elemento clicado')

        this.remove();
    }

    document.body.appendChild(mosquito);

    tamanhoAleatorio()
}


function tamanhoAleatorio(){

    var classe = Math.floor(Math.random() * 3);

    switch(classe){

        case 0:
            return 'mosquito1';

        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){

    var lado = Math.floor(Math.random() * 2);

    switch(lado){

        case 0:
            return 'ladoA';

        case 1: 
            return 'ladoB';
    }
}
