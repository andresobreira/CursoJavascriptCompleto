/* 
EVENTOS DE TEMPO

setTimeOut() -> é um contador regressivo.
setInterval() -> determine o intervalo e uma ação será executada conforme o tempo.
Tudo em milisegundos.
*/

// setTimeOut
function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar";
    // colocar o setTimeOut numa variavel para poder usar ela depois, como parar o timer, por exemplo.
    tempo = setTimeout(function(){ 
        document.getElementById("tempo").innerHTML = "Executou o setTimeOut.";
    },5000);
};
function pararContagem(){
    clearTimeout(tempo); // essa função para o timer, dai eu passo a variavel do setTimeOut aqui.
    document.getElementById("tempo").innerHTML = "Contagem parada.";
}

// setInterval
function ativarIntervalo(){
    contagem = setInterval(() => {
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro)+1
        document.getElementById("tempo").innerHTML = soma;
    }, 1000);
}
function pararIntervalo(){
    clearInterval(contagem); 
    document.getElementById("tempo").innerHTML = "Contagem parada.";
}

