// avião
// atributos cor e modelo


// criando a partir de um objeto literal:
let a1 = {

    cor: "Branco",
    modelo: 'Gigante',
    levantarVoo(){
        console.log('Levantar voo');
    }
}


// criando a partir de uma função construtora
let AviaoF = function(cor,modelo){
    this.cor,
    this.modelo,
    this.levantarVoo = () => {
        console.log("Levantar voo")
    }
}


let a2 = new AviaoF('Azul','a330');


// criando baseado em classes
class AviaoC{
    constructor(){
        this.cor,
        this.modelo
    }

    levantarVoo(){
        console.log("Levantar voo")
    }
}

let a3 = new AviaoC("vermelho","a550");


console.log(a1);
console.log(a2);
console.log(a3);