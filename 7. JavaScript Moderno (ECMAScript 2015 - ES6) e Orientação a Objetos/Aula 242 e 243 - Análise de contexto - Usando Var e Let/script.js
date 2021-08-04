
// 3 escopos: bloco, função e global

let serie = "Atypical";

{
    let serie = 'The 100';
    console.log('Dentro do bloco: '+serie);
}


console.log('Fora do bloco: '+serie);