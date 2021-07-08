// // https://www.w3schools.com/jsref/jsref_obj_date.asp

// var data = new Date();

// data.getDate();


// document.write(data.toString() +"<br><br>");

// data.setDate(data.getDate() + 1);
// document.write(data.toString() +"<br><br>");

// data.setMonth(data.getMonth() + 1);
// document.write(data.toString() +"<br><br>");

// data.setFullYear(data.getFullYear() + 1);
// document.write(data.toString() +"<br><br>");


// document.write(data.toString() +"<hr><br>");

// =================================
// =================================

var data1 = new Date(2021, 6, 6);
var data2 = new Date(2022, 0, 14);

var diferencaDias = (data2.getTime() - data1.getTime()) / (24*60*60*1000)


document.write("Faltam " +diferencaDias +" dias para chegar a data escolhida.");
