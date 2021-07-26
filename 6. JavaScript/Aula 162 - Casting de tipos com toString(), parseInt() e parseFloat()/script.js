var numero1 = prompt("Digite um numero: ");
var numero2 = prompt("Digite outro numero: ");

numero1 = parseInt(numero1);
numero2 = parseFloat(numero2);

window.alert("O resultado em numeros inteiros é: " + (numero1 + numero2));
window.alert("O resultado concatenado é: " + numero1.toString() + numero2.toString());