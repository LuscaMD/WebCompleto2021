

var numero1 = parseFloat(prompt("Digite um numero: "));
var numero2 = parseFloat(prompt("Digite um numero: "));
alert("Opções de operações: \n\nAdição\nSubtração\nMultiplicação\nDivisão");
var escolha = prompt("Qual operação deseja?");
var resultado;

switch (escolha) {

    case "adição":

        resultado = numero1 + numero2;
        document.write("O resultado é: " +resultado);
        break;
    
    case "subtração":

        resultado = numero1 - numero2;
        document.write("O resultado é: " +resultado);
        break;

    case "multiplicação":

        resultado = numero1 * numero2;
        document.write("O resultado é: " +resultado);
        break;

    case "divisao":

        resultado = numero1 / numero2;
        document.write("O resultado é: " +resultado);
        break;
}
