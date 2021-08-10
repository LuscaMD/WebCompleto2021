class Tv{
    constructor(){

        // o _ no começo das váriaveis significa que é uma variavel private e q deve ser acessada usando o get
        this._relacaoCanais = Array(2,4,5,6,7,10);
        this._canalAtivo = 7;
        this._volume = 5
    }


    // getter serve para recuperar o valor de um atributo
    get canalAtivo(){
        return this._canalAtivo;
    }

    // recuperar e atualizar o atributo em questão
    set canalAtivo(canal){
        this.canalAtivo = canal;
    }
}

let tv = new Tv();


// javascript reconhece que quero "SETar" algo
tv.canalAtivo = 7;

console.log(tv.canalAtivo);