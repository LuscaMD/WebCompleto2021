class Animal{

    constructor(){
        this.cor = "";
        this.tamanho = null;
        this.peso = null;
    }

    comer(){
        console.log('comer');
    }

    dormir(){
        console.log('dormir');
    }
}

// o extends serve para "puxar" as coisas de outra classe, que no caso é a class Animal
class Cachorro extends Animal{

    constructor(){
        super();
        this.orelhas = "grandes";
    }

    correr(){
        console.log('Correr');
    }

    rosnar(){
        console.log('Rosnar');
    }
}

// o extends serve para "puxar" as coisas de outra classe, que no caso é a class Animal
class Passaro extends Animal{

    constructor(){
        super();
        this.bico = "Pequeno";
    }

    voar(){
        console.log('Voar passaro');
    }
}

class Papagaio extends Passaro{

    constructor(){
        super();
        this.sabeFalar = true;
    }

    falar(){
        console.log('falar')
    }
}


let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();


papagaio.falar();
cachorro.dormir();


console.log(cachorro)
