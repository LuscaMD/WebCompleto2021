function soma(...param){

    let resultado = 0;

    console.log(param)

    param.forEach(v => resultado += v)


    return resultado
}

console.log(soma(3,4,8,6,-56,6))


// nesse contexto serve como rest
function multiplicar(m,...a){
    
    let resultado = 0;

    console.log(m);
    
    console.log(a);
    
    a.forEach(v => resultado+= m*v)

    return resultado
}

console.log(multiplicar(64,89,2,52,-1,-3))