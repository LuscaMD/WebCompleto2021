// Exemplo para Netflix

var videoEscolhido = Array();
videoEscolhido[1] = Array();

videoEscolhido[1]['Nome'] = 'One Piece';
videoEscolhido[1]['Categoria'] = 'Anime';

function getVideo(videoEscolhido){

    //o try serve como um... tentar fazer isso
    try{

        // lógica e códigos
        console.log(video[0]['Nome']);

    } catch(erro){
        // o catch serve para caso ocorra algum erro no try ou na aplicação, entrar nesse bloco de codigo


        // lógica e codigos
        console.log("Agora sim podemos tratar esse erro");
        

        // o throw serve para abrir uma excessão no programa, "acabar" ele
        // ele não precisa necessariamente, ser declarado no catch
        throw new Error ("Houve um erro, porem ele já foi enviado para nosso banco de dados, assista a uma de nossas recomendações enquanto isso");

    }finally{
        // finally é um finalmente, ele é um bloco de codigo que é feito após o try, ou após o catch, ele é o encerramento do código assim como o throw, porem ele não é uma excessão

        console.log("Acabou o código");
    }

    console.log("A aplicação não morreu")
}

function enviarErroParaAnalise(erro){
    console.log("Erro enviado para analise")
}

getVideo(videoEscolhido);