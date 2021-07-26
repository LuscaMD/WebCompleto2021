var lista_frutas = Array();

lista_frutas[0] = "Maça";
lista_frutas[1] = "Uva";
lista_frutas[2] = "Banana";
lista_frutas[3] = "Pera";


// .indexOf()  -> vai mostrar em que posição está o elemento que está buscando
var auxiliar = lista_frutas.indexOf("Uva");

if(auxiliar === -1){
    
    console.log("Elemento não existe.");
}
else{

    console.log("Elemento existe e está na posição: " +auxiliar)
}