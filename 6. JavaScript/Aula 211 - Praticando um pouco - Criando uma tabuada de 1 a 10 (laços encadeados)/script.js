var n1 = parseInt(prompt("Digite o numero que deseja saber a tabuada:"));
var n2 = parseInt(prompt("Digite até que numero deseja saber a multiplicação:"));
var x = 1, y = 1;

for(x = 1; x <= n1; x++){
    
    for(y = 1; y <= n2; y++){

        document.write(y+'x'+x +' = '+(y*x) +"<br>")
    }
}
