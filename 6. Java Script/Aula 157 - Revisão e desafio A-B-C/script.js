var a = 10;
var b = 20;
var c = null;

// objetivo: colocar o valor de a em b e vice versa

document.write("A = " + a + "<br>");
document.write("B = " + b + "<br>");
document.write("C = " + c + "<br>");
document.write("<hr>");
console.log(a,b,c);

c = a;
a = b;
b = c;
c = null;

document.write("A = " + a + "<br>");
document.write("B = " + b + "<br>");
document.write("C = " + c + "<br>");
console.log(a,b,c);