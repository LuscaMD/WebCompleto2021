// notação de objeto literal, é utilizado quando só vai existir um unico objeto desse tipo no programa
let produto = {

    descricao: 'Geladeira',
    preco: 3200,
    verDescricao: function(){
        console.log(`Titulo: ${this.descricao} por apenas ${this.preco}`)
    }
}

produto.verDescricao();