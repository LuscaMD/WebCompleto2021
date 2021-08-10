class Animal{

    constructor(cor, tamanho, peso){
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
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
        //o super serve como uma ponte entre a classe Cachorro e a classe que é extendida que no caso é a Animal, ele que vai permitir o acesso as coisas da outra classe 
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

    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso);
        this.bico = bico;
    }

    voar(){
        console.log('Voar passaro');
    }
}

class Papagaio extends Passaro{

    constructor(sabeFalar, cor, tamanho, peso){
        super('médio', cor, tamanho, peso);
        this.sabeFalar = sabeFalar;
    }

    falar(){
        console.log('falar')
    }
}


let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio(true, 'azul', 9,2);
let papagaio2 = new Papagaio(false, 'verde', 19,3);

papagaio.falar();
cachorro.dormir();


console.log(papagaio);
console.log(papagaio2);
