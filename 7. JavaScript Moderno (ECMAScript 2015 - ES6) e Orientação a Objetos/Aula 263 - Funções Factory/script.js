let Bicicleta1 = {

    cor: "Branca",
    marcha: "unica",
    aro: 26,
    pedalar(){
        console.log("Pedalando");
    }
}

Bicicleta1.pedalar()

let BicicletaFactory = function(cor,marcha,aro){
    return {
        // mesma coisa que => cor: cor
        cor,
        marcha,
        aro,
        pedalar(){
            console.log("Pedalando");
        }   
    }
}

let bicicleta3 = BicicletaFactory("preta","multipla",29);

console.log(bicicleta3)
bicicleta3.cor = "azul";

console.log(bicicleta3)