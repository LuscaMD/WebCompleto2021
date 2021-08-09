
// os parametros default são os valores que são atribuidos as váriaveis da função, caso nenhum valor seja passado a elas
function contarHistoria(personagem = 'Smol', anoHistoria = 1897, vilao = 'Jhony'){

    document.write(`A história de ${personagem} começou nos anos ${anoHistoria}, é uma história de superação sobre como ele e o vilão da história (${vilao}) se tornaram grandes amigos.`);
}

// é possivel utilizar as váriaveis defaults definindo o parametro da função como undefined
contarHistoria('Lucas', undefined, 'Bob');