// FOR

// for (let i=0; i< 101; i++){
//     document.getElementById("texto").innerHTML += i + "<br>"
// };

var ano_atual = new Date().getFullYear();
console.log(ano_atual)
for (let i=ano_atual; i>=1990; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

const carros = ["Gol","Fusca","Brasilia","Uno"];
var tamanho = carros.length;

for (let i = 0; i<tamanho; i++){
    document.getElementById("texto").innerHTML += carros[i]+" - ";
}
