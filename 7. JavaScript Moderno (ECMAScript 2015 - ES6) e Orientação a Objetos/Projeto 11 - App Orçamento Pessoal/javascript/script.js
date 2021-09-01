// Local Storage são dados que ficam armazenados no navegador, podendo fechar ou reiniciar a maquina sem perder os dados
// Session Storage são dados que ficam salvos enquanto o navegador esta aberta, se fechar, os dados são perdidos
// IndexedDB é um jeito mais avançado de salvar dados no navegador, permitindo o uso de tabelas 
// WebSQL é um jeito mais avançado de salvar dados no navegador, permitindo o uso de tabelas
// cookies são dados que são salvos no navegador para implementar uma logica depois, como em um e-commerce

class Despesa{
    constructor(ano,mes,dia,tipo,descricao,valor){

        this.ano = ano,
        this.mes = mes,
        this.dia = dia,
        this.tipo = tipo,
        this.descricao = descricao,
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false;
            }
        }
        return true;
    }
}

class Bd{

    constructor(){
        let id = localStorage.getItem('id');

        if(id === null){
            localStorage.setItem('id', 0);
        }
    }


    getProximoId(){
        let proximoId = localStorage.getItem('id');

        return parseInt(proximoId) + 1;
    }

    

    gravar(d){
        //                      ID       Dado a ser salvo
        //                              transforma o objeto literal para uma notação JSON
        
        let id = this.getProximoId();
        
        localStorage.setItem(id, JSON.stringify(d));
        localStorage.setItem('id', id)
    }
}

let bd = new Bd();

function cadastrarDespesa(){

    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    );

    // if === true
    if(despesa.validarDados()){

        bd.gravar(despesa)

        // dialogo de sucesso
        
        document.getElementById('modalTitulo').className = "modal-title text-success";
        document.getElementById('modalTitulo').innerHTML = "Registro inserido com sucesso!";
        
        document.getElementById('modalMensagem').innerHTML = "A despesa foi cadastrada com sucesso!!";
        
        document.getElementById('btnVoltar').className = "btn btn-success";
        document.getElementById('btnVoltar').innerHTML = 'Voltar';
        
        $('#modalAviso').modal('show')
    }
    else{
        
        document.getElementById('modalTitulo').className = "modal-title text-danger";
        document.getElementById('modalTitulo').innerHTML = "Ocorreu um erro ao registrar a despesa!";
        
        document.getElementById('modalMensagem').innerHTML = "Existem campos obrigatórios que não foram preenchidos.";
        
        document.getElementById('btnVoltar').className = "btn btn-danger";
        document.getElementById('btnVoltar').innerHTML = 'Voltar e corrigir';

        // dialogo de erro
        $('#modalAviso').modal('show');
    }
}


/* 

Diferença entre Objetos literais e JSON

// OBJETO LITERAL
var produtoObjetoLiteral = {
    titulo: "Mouse",
    cor: "Preto",
    preco: 200,
    vendido: false
}

// JSON
var produtoJSON = '{"titulo": "Mouse", "cor":"Preto", "preco": 200, "vendido": false }'
// tem que colocar tudo entre aspas para virar uma string, tem que colocar o atributo entre aspas também



// Para transformar um objeto literal em JSON utilizamos a função:
JSON.stringify(d)
// aonde o parametro passado na função JSON.stringify(parametro) <- será o objeto literal a ser convertido para JSON


// Para transformar um JSON em objeto literal utilizamos a função:
JSON.parse(d)
// aonde o parametro passado na função JSON.parse(parametro) <- será o JSON a ser convertido para objeto literal
*/