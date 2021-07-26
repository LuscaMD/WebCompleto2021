//                       vai chamar a função sem precisar passar os parametros
function exibirDados(id, returnoSucesso, retornoErro){

    if(true){
        retornoSucesso("Dados:", "Nome: Lucas, Idade: 17");
    }
    else{
        retornoErro("Erro ao exibir dados");
    }

}

// cria uma variavel que tem como valor uma função
var retornoSucesso = function(titulo, descricao){

    document.write("<h2>" +titulo +"</h2>");
    document.write("<p>" +descricao +"</p>");
}

// cria uma variavel que tem como valor uma função
var retornoErro = function(erro){

    document.write("<p>" +erro +"</p>");
}

exibirDados(1, retornoSucesso, retornoErro);