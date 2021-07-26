// // && = E (todas tem que ser true para dar true)
// if(10>5 && 11>5 && 12>5 && 13>5){
//     document.write("e && true");
// }
// else{
//     document.write("false");
// }

// document.write("<br><hr>");

// // false    false    false   false = false
// if(10>50 || 11>50 || 12>50 || 13>50){
//     document.write("ou || true");
// }
// else{
//     document.write("false");
// }

// document.write("<br><hr>");


// // o ! vai inverter o false para true
// if(!(10>50)){
//     document.write("true");
// }
// else{
//     document.write("false");
// }

var nota = prompt("Digite a nota final do aluno: ");
var faltas = prompt("Digite quantas vezes o aluno faltou: ");

nota = parseInt(nota);
faltas = parseInt(faltas);

var faltasMaximas = 15;

if(nota >= 7 && faltas <= faltasMaximas){
    document.write("Parabens, vc foi aprovado");
}