var objetos = ['Cadeira', 'Impressora', 'Garfo'];

function adicionar(){

    var textoAdicionar = document.getElementById('txtInput').value;

    if(textoAdicionar != ""){
        if(objetos.indexOf(textoAdicionar) == -1){

            objetos.push(textoAdicionar);
            document.getElementById('txtInput').value = '';

            console.log(objetos);
        }
        else{

            alert("Objeto já adicionado");
        }
             
    }
    else{
        alert("Você deve digitar algo para adicionar");   
    }
}

function ordenar(){

    objetos.sort();
    console.log(objetos);   
}
