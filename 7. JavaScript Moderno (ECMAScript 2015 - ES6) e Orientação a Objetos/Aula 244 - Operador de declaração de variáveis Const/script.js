// É uma boa prática o nome da váriavel const ser totalmente me maiusculo
// Const é usado para declarar váriaveis não podem ser alteradas durante a aplicação
// São geralmente utilizados para guardar senhas de bancos de dados, links de api's, parametros de configuração, etc...
const FILME = 'A rua do medo 1';

function x(){

    const FILME = 'Sherek';

    console.log('const dentro da função: ' +FILME);
}

x();

console.log('const global: ' +FILME);