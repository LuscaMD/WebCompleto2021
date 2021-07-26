// instrução, tempo de espera para começar
// setTimeout(function() {document.write("Você já está no site a 5 segundos")}, 5000)

//clearTimeout()
// serve para parar de repetir a ação


var tempoPassou = 0;

var tempoNoSite = function(){


    tempoPassou += 1000;

    document.write("Você está no site a: " +(tempoPassou/1000) +" segundos <br>");

}

setInterval(tempoNoSite, 1000);
// serve para parar de repetir a ação
// clearInterval(tempoNoSite);