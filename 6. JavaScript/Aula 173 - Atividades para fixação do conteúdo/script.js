var nome = prompt("Digite o seu nome: ");
var altura = parseFloat(prompt("Digite a sua altura em cm: ")) / 100;
var peso = parseFloat(prompt("Digite o seu peso em kg: "));
var massaCorporal = peso / (altura*altura);
var classificacao = "";

if(massaCorporal < 16 && massaCorporal > 0){
    classificacao = "Baixo peso muito grave";
}
else if(massaCorporal >= 16 && massaCorporal < 16.99){
    classificacao = "Baixo peso grave";
}
else if(massaCorporal >= 17 && massaCorporal < 18.49){
    classificacao = "Baixo peso";
}
else if(massaCorporal >= 18.5 && massaCorporal < 24.99){
    classificacao = "Peso normal";
}
else if(massaCorporal >= 25 && massaCorporal < 29.99){
    classificacao = "Sobrepeso";
}
else if(massaCorporal >=30 && massaCorporal < 34.99){
    classificacao = "Obesidade grau 1";
}
else if(massaCorporal >= 35 && massaCorporal < 39.99){
    classificacao = "Obesidade grau 2";
}
else{
    classificacao = "Você inseriu dados errados.";
}

document.write(nome +", sua massa corporal é: " +massaCorporal +" e você está classificado como: " + classificacao);