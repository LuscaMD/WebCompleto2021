// para função

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

function teste({a: x, d, z = 100}){
    console.log(x,d,z);
}

// vai passar o "obj" (que é um objeto) como parâmetro, e vai pegar os valores 'a' que estão dentro do objeto para fazer a desestruturação
teste(obj)