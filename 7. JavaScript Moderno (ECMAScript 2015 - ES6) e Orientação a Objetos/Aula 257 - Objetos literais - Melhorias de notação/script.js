let nome = 'Lucas';
let idade = 17;
let sexo = 'Masculino';
let profissao = 'Programador';

let pessoa = {

    // nome = 'Lucas'
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    resumo: function(){
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, sexo: ${this.sexo}, profissao: ${this.profissao}`)
    }
}

// =================================

// Forma mais curta de fazer a mesma coisa    
let pessoa2 = {

    nome,
    idade,
    sexo,
    profissao,
    resumo(){
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, sexo: ${this.sexo}, profissao: ${this.profissao}`)
    }
}