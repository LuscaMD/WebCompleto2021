var listaDeFuncionarios = ['Lucas', 'João', 'Maria', 'Vitor', 'Luiza'];
var funcao = function(valor,indice){
    console.log(valor, indice)
}

listaDeFuncionarios.forEach(funcao);


// o forEach serve como um forIn tbm, mas a diferença é que temos acesso ao valor, indice e a array para cada parte da array
/*
listaDeFuncionarios.forEach(function(valor, indice, array){
    console.log('Indice: '+indice +" | Valor: "+valor);

    if(valor == 'Maria'){
        array[indice] = "Maria Eduarda";
    }
});

console.log(listaDeFuncionarios);
*/


// ele funciona seguindo numeros inteiros maiores que 0, qualquer outro tipo ele não identifica
var listaDeCompras = [];
listaDeCompras[1] = 'sabonete';
listaDeCompras[false] = "luvas";
listaDeCompras[97] = 'agua';
listaDeCompras[-10] = "suco";

listaDeCompras.forEach(funcao);  
// apenas o 'sabonete' e a 'agua' serão mostrados