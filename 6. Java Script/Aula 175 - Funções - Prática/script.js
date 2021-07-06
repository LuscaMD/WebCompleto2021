var largura = parseFloat(prompt("Digite a largura do terreno: "));
var comprimento = parseFloat(prompt("Digite o comprimento do terreno: "));

function calcularAreaTerreno(largura, comprimento){

    var area = largura * comprimento;
    
    return area;

}

document.write("O terreno possui: " +calcularAreaTerreno(largura, comprimento) +" metros quadrados");