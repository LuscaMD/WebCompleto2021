// destructuring para objetos literais
let produto = {

    // é um
    descricao: "Notebook",
    preco: 1600,
    rgb: false,
    garantia: false,

    // tem 
    detalhes: {
        fabricante: "Acer",
        modelo: "Abc"
    }
}

// para desestruturar objetos, nós usamos as "{}" e não "[]"
let { descricao, preco } = produto

console.log(descricao, preco)

// definindo como "r" e "g" as váriaveis
let { rgb: r, garantia:g } = produto

console.log(r,g)



// se eu quiser pegar os detalhes (que é outro objeto literal) de produto, ficará assim: 
let {detalhes: {fabricante: f,modelo: m}} = produto;
console.log(f,m)
