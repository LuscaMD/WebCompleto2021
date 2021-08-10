// software de marcenaria

class Cadeira{

    constructor(qntPernas, giratoria, cor){

        this.qntPernas = qntPernas;
        this.giratoria = giratoria;
        this.cor = cor;
    }

    girarCadeira(){
        if(this.giratoria === true){
            console.log("girou");
        }
        else{
            console.log("não girou");
        }
    }
}

let cadeiras = Array();

cadeiras.push(new Cadeira(5, true, 'azul'));
cadeiras.push(new Cadeira(2, false, 'preta'));


console.log(cadeiras);


class Sofa{

    constructor(assentos, cor, reclinavel){
        this.assentos = assentos;
        this.cor = cor;
        this.reclinavel = reclinavel;
    }

    reclinarSofa(){
        if(this.reclinavel === true){
            return console.log('sofa reclinavel');
        }
        else{
            return console.log('sofá não reclinavel')
        }
    }
}

let sofaCama = new Sofa(4,'preto',true);

sofaCama.reclinarSofa();