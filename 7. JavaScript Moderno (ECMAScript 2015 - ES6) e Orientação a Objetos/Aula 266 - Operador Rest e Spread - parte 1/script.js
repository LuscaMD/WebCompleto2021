// spread = espalhar
// rest = juntar


// contexto spread 
// string
let tituloArtigo = "Como usar rest / spread";

console.log(tituloArtigo);

// variável spread / rest
console.log(...tituloArtigo);

console.log([...tituloArtigo]);


let cursos1 = ["NodeJS e MongoDB","ES6, TypeScript e angular"];
let cursos2 = ["Multiplataforma", "introdução ao linux"];

// vai jogar os outros arrays dentro da listaCursosCompletos
let listaCursosCompletos = ["Web", ...cursos2, "Android", ...cursos1]

console.log(listaCursosCompletos)

// contexto objeto
let pessoa = {
    nome: "joao",
    idade: 27
}

let clone = {
    endereco: "Rua jaguar",

    // vai puxar os dados do objeto pessoa, é um tipo de herança
    ...pessoa
}

console.log(clone)