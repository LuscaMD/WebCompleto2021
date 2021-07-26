var nota = prompt("Digite a nota final do aluno: ");
var faltas = prompt("Digite quantas vezes o aluno faltou: ");

nota = parseInt(nota);
faltas = parseInt(faltas);

var faltasMaximas = 15;
var resultado = nota > 7 && faltas <= faltasMaximas ? "Aprovado" : "Reprovado"

document.write(resultado);