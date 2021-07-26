function inputFoiFocado(){
    document.getElementById('iptText').style.background = "yellow";
}

function inputPerdeuFoco(){

    var qntCaracteres = document.getElementById('iptText').value;

    if(qntCaracteres < 3 ){
        document.getElementById('iptText').style.background = "red";
    }
    else{
        document.getElementById('iptText').style.background = "green";
    }
}