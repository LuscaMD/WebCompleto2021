var janela;

function abrirPopUp(){
    janela = window.open("https://udemy.com", "_blank", "height=500, width=800")
}

function fecharPopUp(){
    janela.close();
}

function imprimirPagina(){
    window.print();
}