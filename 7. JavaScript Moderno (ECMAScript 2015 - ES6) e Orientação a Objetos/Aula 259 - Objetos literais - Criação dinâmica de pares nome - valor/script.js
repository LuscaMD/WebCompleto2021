
let pessoa = {
    nome: 'maria',
    idade: 17
}

console.log(pessoa);


// para adicionar um novo atributo a um objeto literal, é só fazer o seguinte:
pessoa.sexo = 'Feminino';
console.log(pessoa);


// e o mesmo serve para atribuir uma função ao objeto literal
pessoa.falarOi = () => {
    console.log('Oi, tudo bem com você?');
}

pessoa.falarOi();
console.log(pessoa); 
