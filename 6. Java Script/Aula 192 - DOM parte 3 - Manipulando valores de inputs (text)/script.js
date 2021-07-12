function distribuirCaracter(){

    var caracteres = document.getElementById("caracteres").value;

    document.getElementById("caracteres").value = "";

    caracteres.trim();

    switch (caracteres){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':

            
            document.getElementById("numeros").value += caracteres;
            break;
        
        default:

            document.getElementById("letras").value += caracteres;
            break;
    }
}