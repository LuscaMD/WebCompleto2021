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
        let id = this.getProximoId();
        
        //                   ID     Dado a ser salvo
        localStorage.setItem(id, JSON.stringify(d));
        //                      transforma o objeto literal para uma notação JSON
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){
        let id = localStorage.getItem('id');

        let arrayDespesas = []

        for(let i = 1; i <= id; i++){

            let despesa = JSON.parse(localStorage.getItem(i));
            
            if(despesa === null){
                // pula uma vez
                continue;
            }

            despesa.id = i;
            arrayDespesas.push(despesa);
        }

        return arrayDespesas
    }

    pesquisar(despesa){
        let despesasFiltradas = Array()
        
        despesasFiltradas = this.recuperarTodosRegistros(despesa)

        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano);
        }

        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes);
        }

        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia);
        }

        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo);
        }

        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao);
        }

        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor);
        }

        return despesasFiltradas
    }

    remover(id){
        localStorage.removeItem(id)
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

        ano.value = "";
        mes.selectedIndex = "";
        dia.value = "";
        tipo.value = "";
        descricao.value = "";
        valor.value = "";

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


function carregaListaDespesas(despesas = Array(), filto = false){

    if(despesas.length == 0 && filto == false){

        despesas = bd.recuperarTodosRegistros();
    }

    //  console.log(despesas)

    let listaDespesas = document.getElementById('listaDespesas');
    listaDespesas.innerHTML = "";

    despesas.forEach(function(d){

        console.log(d)

        // criando linhas (tr)
        let linha = listaDespesas.insertRow()

        // criando linhas (td)
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}` ;

        switch(d.tipo){
            case '1':
                d.tipo = "Alimentação";
                break

            case '2':
                d.tipo = "Educação";
                break

            case '3':
                d.tipo = "Lazer";
                break

            case '4':
                d.tipo = "Saúde";
                break

            case '5':
                d.tipo = "Transporte";
                break
        }
        linha.insertCell(1).innerHTML = d.tipo;
        linha.insertCell(2).innerHTML = d.descricao;
        linha.insertCell(3).innerHTML = d.valor;
    
        let btnExcluir = document.createElement("button")
        btnExcluir.className = "btn btn-danger";
        btnExcluir.innerHTML = "<i class='fas fa-times'></i>";
        btnExcluir.id = `id_despesa_${d.id}`;
        btnExcluir.onclick = function(){

            let id = this.id.replace('id_despesa_','');
            
            bd.remover(id);

            window.location.reload();
        }

        linha.insertCell(4).append(btnExcluir);
    });


    /*
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>*/
}

function pesquisarDespesa(){
    
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor)

    let despesas = bd.pesquisar(despesa)

    carregaListaDespesas(despesas, true)
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