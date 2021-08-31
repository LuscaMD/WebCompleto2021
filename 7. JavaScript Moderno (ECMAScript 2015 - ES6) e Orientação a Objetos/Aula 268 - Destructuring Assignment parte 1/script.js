// destructuring

let frutas = ["Maça","Banana", "Uva", "Manga"];

// para fazer um destructuring, é só colocar o [] do lado esquerdo do =, e declarar para que váriavel vai cada coisa 
// aqui ele vai pegar o valor de frutas[0] e atribuir a primeira váriavel, no caso "a"
let [a,b, ,c] = frutas;
// o terceiro indice que está vazio é como se estivesse pulando essa vez

console.log(a,b,c)

// ======================================================
// ======================================================

//              0       1           2       3       4
let nomes = ["Lucas","Marcelo","Tainara","Maria","Victor"];

// eu posso sobrepor um valor através do =
// se não existir um nome6 (que no caso não existe) o valor de nome6 sera "undefined"
// o "nome = 'joao'" só serve se a váriavel não tiver nenhum valor, caso tenha o valor não será sobreposto
let [nome1,nome2 = "João",nome3,nome4,nome5,nome6]


// ======================================================
// ======================================================

// exemplo de um array multidimensional


//                      array 1                                 array 2
let coisas = [["Maça","Banana", "Uva", "Manga"], ["Lucas","Marcelo","Tainara","Maria","Victor"]]

// pulou o primeiro array, pegou o indice 0 do array 2 e atribuiu pra variavel n1
let [,[n1]]