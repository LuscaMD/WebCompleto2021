let nome = 'Lucas';
let clima = 'Azul'

// se abrir com ` ` (fica do lado do P), ele permite fazer uma concatenação sem a utilização dos +
console.log(`Olá ${nome}, tudo bem?`);


// com a sua utilização, é permitido formatar strings e pular linhas
console.log(`Olá, bem vindo a previsão do tempo
O ceu hoje está: ${clima}`);


// é possivel fazer qualquer coisa desde que seja dentro do ${ }
console.log(`O resultado de 5+5 é: ${5+5}`)


function multiplicar(x, y){

    return x*y;
}

// é possivel até mesmo utilizar funções
console.log(`O resultado da multiplicação de 9*7 é: ${multiplicar(9,7)}`);
