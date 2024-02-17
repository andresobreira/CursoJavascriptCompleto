// comando base para pegar a data atual.
let data = new Date();
console.log(data);

// pegar ano com 4 dígitos
let ano = data.getFullYear();
console.log(ano);

// pegar mes
let mes = data.getMonth(); // ele retorna o indice do mes. Ex: jan = 0, fev = 1
const mesesDoAno = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho",
    "Agosto","Setembro","Outubro","Novembro","Dezembro"];
console.log(mesesDoAno[mes]);

// dia do mes
let dia_mes = data.getDate(); // retorna o dia do mes.
console.log(dia_mes);
let dia_semana = data.getDay(); // retorna o indice do dia na semana. Ex: seg = 0, ter = 1
const diasDaSemana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira",
    "Quinta-feira","Sexta-feira","Sábado"];
console.log(diasDaSemana[dia_semana]);

// pegar hora
let hora = data.getHours();
console.log(hora);
// pegar minutos
let minuto = data.getMinutes();
console.log(minuto);
// pegar segundos
let segundo = data.getSeconds();
console.log(segundo);

// pegar a data na padrão BR
let dataBr = data.toLocaleString(); // ex retorno = "16/02/2024, 20:16:11"
console.log(dataBr);
let dataBr2 = data.toLocaleString('pt-BR',{dateStyle: 'short'}); // ex retorno = "16/02/2024"
console.log(dataBr2)
let dataBr3 = data.toLocaleString('pt-BR',{timeStyle: 'short'}); // ex retorno = "20:17"
console.log(dataBr3)

// comparar datas
let hoje = new Date();
let vencimento = new Date(2024,1,16); // 16 de fevereiro de 2024.

if (hoje > vencimento){
    console.log('sua conta esta vencida!');
}
else{
    console.log("ainda não venceu.");
}

// diferença em dias entre duas datas
var data_inicial = new Date(); // hoje
var data_final = new Date(2024,11,31); // 31 de dez de 2024
var diferenca_tempo = data_final.getTime() - data_inicial.getTime(); // pega a diferença das datas em horas.
var diferenca_dias = Math.ceil(diferenca_tempo / (24*60*60*1000)); // converte as horas em dias.
console.log(diferenca_dias + dias);

