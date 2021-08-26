let assinatura = {

    idCliente: 18,
    descricao: "lorem asdhauishduiashdusaiuhdas",
    status(){
        console.log(ativo);
    }
}

console.log(assinatura.descricao)

let x = assinatura

console.log(x.descricao)


x.descricao = "internet + tv a cabo";

console.log(x.descricao)
console.log(assinatura.descricao)