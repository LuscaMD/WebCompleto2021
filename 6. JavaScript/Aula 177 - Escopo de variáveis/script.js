

// O escopo de variáveis é dividido em 3, sendo elas: escopo global // escopo de função // escopo de bloco


// Escopo global

// O escopo global é quando você declara uma variavel no script, sem nada dentro
// ex:
var serie1 = "Stranger Things";
// essa variável estará disponivel para todo o programa

document.write(serie1);

document.write("<br/><br/>");

// ===============================================================
// ===============================================================

// Escopo de função

// Uma váriavel que é declarada dentro de uma função, está disponivel para ser usada apenas dentro dela mesma, não sendo possivel acessa-la de fora
function melhorAnime(){
    
    var melhoresAnimes = ["Hunter x Hunter","Naruto", "One Piece"];

    document.write(melhoresAnimes);    
}

melhorAnime();

document.write("<br/><br/>");


// ===============================================================
// ===============================================================

// Escopo de bloco

// Um escopo de bloco se refere a partes do codigo como: if's, switchs, do, do whiles...
// Uma váriavel declarada dentro de um bloco, independente de onde ela estiver (mesmo se estiver dentro de uma função), sofrerá uma elevação, ficando disponivel globalmente 

if(5<6){
    // vai sofrer elevação e ficará disponivel para todo o programa
    var exemplo1 = "Váriavel dentro de um IF";
    document.write(exemplo1 + "<br>");
}

document.write(exemplo1 + "<br><br>");

x();

function x(){

    if(5<6){
        var exemplo2 = "Váriavel dentro de um if, dentro de uma função<br>";
        // Disponivel localmente
        document.write(exemplo2);
    }
    // Sofreu elevação e ficou disponivel fora do if
    exemplo2 = "Váriavel fora do if <br>";
    document.write(exemplo2);
}

// Sofreu elevação e ficou disponivel globalmente
exemplo2 = "Fora da função"
document.write(exemplo2);
