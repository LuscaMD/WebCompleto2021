/* 

Paradigma de Orientação a Objetos

1° Pilar = Abstração

    Abstração ser resume a:

        - Entidade => é a ideia de um objeto do mundo real sendo trazido para dentro da programação
        - Identidade => é a ideia de criar uma identidade (uma diferenciação) para cada entidade
        - Caracteristicas (atributos) => a caracteristicas seria como a descrição da entidade, seria as informações disponiveis sobre ele.
        - Ações (métodos) => as ações (ou métodos) são o que é disponivel para fazer com as informações da entidade

        Tabela para exemplificação:

            ENTIDADE            IDENTIDADE                  CARACTERISTICAS             AÇÕES

            Carro               a = new Carro()             marca, cor, qntPortas       ligar, acelerar, freiar...
            ContaBancaria       b = new ContaBancaria()     agencia, nmrConta, saldo    depositar, sacar, consultar

*/

// a "class" é o modelo da entidade / objeto 
// para declarar classes é bom utilizar CamelCase (palavras começando com letras maiúsculas)
class ContaBancaria{

    // Atributos
    constructor(){

        // o this serve para um atributo ser conectado ao contexto do objeto
        this.agencia = 12;
        this.nmrConta = 1113;
        this.saldo = 5160;
        this.limite = 10000
    }


    // Ações (métodos)
    depositar(valorDeposito = 0){

        this.saldo += valorDeposito;
    }

    sacar(valorSaque = 0){
        this.saldo -= valorSaque;
    }

    consultarSaldo(){
        return this.saldo;
    }
}

// o new mostra ao programa que quer criar um objeto que pode ser utilizado através do modelo ContaBancaria()
let x = new ContaBancaria();
let y = new ContaBancaria();
// x e y são objetos diferentes, o 'x' é uma conta bancaria e o 'y' é OUTRA conta bancaria


// o "." do x nos permite acessar atributos e métodos dos objetos
console.log(`Saldo antes de depositar: ${x.consultarSaldo()}`);

x.depositar(156);
console.log(`Saldo depois de depositar: ${x.consultarSaldo()}`);

x.sacar(500);
console.log(`Saldo depois de sacar: ${x.consultarSaldo()}`);