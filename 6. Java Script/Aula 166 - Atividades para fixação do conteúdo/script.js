var idade = prompt("Digite a sua idade: ");
var resultado;

idade = parseInt(idade);

if(idade >= 0 && idade<15){
    resultado = "Criança";
}
else if(idade >= 15 && idade<30){
    resultado = "Jovem";
}
else if(idade >= 15 && idade<60){
    resultado = "Adulto";
}
else if(idade >= 60){
    resultado = "Idoso";
}
else{
    resultado = "Digite uma idade válida.";
}

document.write(resultado);