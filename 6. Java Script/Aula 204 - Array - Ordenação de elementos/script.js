var listaDeNumeros = [];

listaDeNumeros[0] = 2156;
listaDeNumeros[1] = 52;
listaDeNumeros[2] = 1;
listaDeNumeros[3] = 5;
listaDeNumeros[4] = 89;
listaDeNumeros[5] = 11;
listaDeNumeros[6] = 22;


console.log(listaDeNumeros.sort(ordenaNumeros));

function ordenaNumeros(a, b){
    return a - b;

    // resultado < 0  = 'a' será mostrado primeiro
    // resultado > 0 = 'b' será mostrado Primeiro
    // resultado == 0 -> a ordem será mantida

}