var serie = "Atypical"

// 3 escopos: bloco, função e global

function x(){

    console.log(serie);

    if(true){
        console.log(serie);
    }
}



x();

if(true){

    let series = "asdadas"
    console.log(series);
}

console.log(series);