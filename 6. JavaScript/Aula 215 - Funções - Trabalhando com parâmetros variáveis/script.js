// função sem nenhum parametro, pode ser passado através do seu chamado
function soma(){
    
    // vai servir como resultado das somas seguintes.
    var resultado = 0;

    // o for in é como um (for(i++)), a unica instrução é para depois de percorrer o codigo abaixo, adicionar 1 ao contador
    for(var i in arguments){

        // vai somar o resultado com o valor contindo nos argumentos na posição [i] passados na hora de chamar a função
        resultado += arguments[i];
    }

    return resultado;
}

// argumentos da função soma[89,48,-10,5," laranjas cairam do caminhão"]
console.log(soma(89,48,-10,5," laranjas cairam do caminhão"));