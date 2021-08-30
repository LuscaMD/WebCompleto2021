
// prototype é basicamente de quem você esta puxando a herança, exemplo: Carro.fusca (o carro é o "prototype" do fusca).
// todos são basicamente ex: Object.prototype.Carro.fusca (tipo isso)

let animal = {
    atributo1: "a"
}
let vertebrado = {

    // o proto serve para fazer uma herança com o objetivo que você quiser
    __proto__: animal,

    // o atributo2 será sobreposto pelo atributo2 em ave, já que o javascript vai buscar o nivel mais baixo do valor do atributo, logo será sobreposto
    atributo2: "b"
}
let ave = {

    // então a ave vai ter herança dos atributos do animal tbm, pois ela tem proto do vertebrado e ele tem proto do animal, formando assim uma "piramide"
    __proto__: vertebrado,

    
    // vai sobrepor o valor por estar diretamente ligado a ele como herança e fazer uma nova atribuição de valor para a váriavel
    atributo2: "x",
    atributo3: "c"
}


Object.prototype.atributo505 = "essa musica é mt boa"; // dessa forma é um metodo GLOBAL

// todos são filhos de Object.prototype
console.log(ave.atributo2, ave.atributo1,ave.atributo505);