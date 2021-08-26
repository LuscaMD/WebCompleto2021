let Carro = function() {
    this.modelo = "fusca",
    this.cor = 'azul',
    this.velocidadeAtual = 0,
    this.velocidadeMaxima = 200,
    
    this.acelerar = () =>{
        let velocidade = this.getVelocidadeAtual() + 50;

        if(velocidade > this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);
    }

    this.getVelocidadeAtual = () =>{
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = (velocidadeAtual) =>{
        this.velocidadeAtual = velocidadeAtual;
    }
}

let carro = new Carro();

console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.acelerar();

console.log("\n\n\n\n\n")
// 
// 
// 
// 
// 
// 
// 
// 
// 

let Carro2 = function() {

    var velocidadeMaxima = 200
    var quilometroRodados = 0
    
    this.modelo = "fusca",
    this.cor = 'azul',
    this.velocidadeAtual = 0
    
    this.acelerar = () =>{
        let velocidade = this.getVelocidadeAtual() + 50;

        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);

        setQuilometrosRodados(0.07)
    }

    this.getVelocidadeAtual = () =>{
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = (velocidadeAtual) =>{
        this.velocidadeAtual = velocidadeAtual;
    }

    var setQuilometrosRodados = (q) => {
        quilometroRodados += q;
        console.log(quilometroRodados)
    }
}

let carrin = new Carro2();

console.log(carrin.velocidadeAtual);
carrin.acelerar();
console.log(carrin.velocidadeAtual);
carrin.acelerar();
console.log(carrin.velocidadeAtual);
carrin.acelerar();
console.log(carrin.velocidadeAtual);
carrin.acelerar();
console.log(carrin.velocidadeAtual);
carrin.acelerar();
console.log(carrin.velocidadeAtual);
carrin.acelerar();

console.log("\n\n")

console.log(carro);
console.log(carrin);