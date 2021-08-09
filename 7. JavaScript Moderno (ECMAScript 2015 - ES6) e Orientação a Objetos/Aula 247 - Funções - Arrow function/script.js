
// arrow functions são funções escritas de forma compacta

// declara como uma função, o x e y vão ser os parametros da função (pode tirar o () se só tiver um parametro) e o => significa a instrução deve ser feita
// como só tem uma instrução, não tem necessidade de abrir chaves
let multiplicar = (x,y) => x*y; // return implicito


let parOuImpar = x =>{
    if(x % 2 === 0){
        return 'Par';
    }
    else{
        return 'Impar';
    }
}


// é possivel fazer utilizando operadores ternarios também
//                                                      condição     //       passou        //  nao passou
let verificarIdade = (idadeMinima = 20, idade = 18) => idade >= idadeMinima ? 'Pode entrar' : 'Não pode entrar'; 


document.write(parOuImpar(56));
document.write('<br>');
document.write(multiplicar(10,6));

document.write('<br>');
document.write(verificarIdade());