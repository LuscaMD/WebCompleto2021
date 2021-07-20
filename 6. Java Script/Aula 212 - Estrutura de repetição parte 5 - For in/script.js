var listaDeCompras = [];

listaDeCompras[68] = "papel";
listaDeCompras[false] = "sabonete";
listaDeCompras['c'] = "cerveja";
listaDeCompras[-9] = "chocolate";
listaDeCompras['wasd'] = "suco";

// o forIn é como um while, porem ele faz de forma sequencial a varialvel x, mesmo se for 1 2 ea true ele irá ler de forma sequencial, enquanto um outro não iria conseguir prever o proximo indice
for(var x in listaDeCompras){

    console.log('O valor do indice '+x +' é: '+listaDeCompras[x]);
}
