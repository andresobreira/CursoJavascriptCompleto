function soma(valor1,valor2){
    return valor1 + valor2
};

var total = soma(10,23);
document.getElementById("texto4").innerHTML = total;

function realParaDolar (real, cotacao){
    return real*cotacao;
}

var total = realParaDolar(10,5.08);
console.log(total);

function olaHello(){
    alert("Olá pessoal!");
}