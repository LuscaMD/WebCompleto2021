let Carro = function() {
    this.modelo = "fusca",
    this.cor = 'azul',
    this.velocidadeAtual = 0,
    this.velocidadeMaxima = 200,
    
    
    this.acelerar = () =>{
        let velocidade = this.getVelocidadeAtual() + 10;
        this.setVelocidadeAtual(velocidade);
    }

    this.getVelocidadeAtual = () =>{
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = (velocidadeAtual) =>{
        this.velocidadeAtual = velocidadeAtual;
    }
}

let carro = new Carro()  

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`);

carro.acelerar();

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`);