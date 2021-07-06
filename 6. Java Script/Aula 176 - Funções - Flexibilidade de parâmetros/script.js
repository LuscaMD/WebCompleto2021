

function soma(a, b){

    return a+b;
}


console.log(soma(7,7));

// caso eu passe mais que os parametros necessarios, o javascript vai ignorar os outros parametros
console.log(soma(7,7,7,7,7,7));


// caso eu não passe todos os parametros, vai ficar -> soma = 7 + undefined = not a number 
console.log(soma(7));


// se eu não passar nada, vai ficar como -> soma = undefined + undefined = not a number
console.log(soma());


