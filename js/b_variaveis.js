// -----------------------------------------------------
// DECLARAÇÕES DE VARIÁVEIS:

var a,b,c; // declaração das variáveis
a = 1; // atribuição de valores
b = 3;
c = a + b;
/* O var me permite reatribuir valores para a mesma variavel já criada antes, ele sobrescreve,
 como se fosse uma variavel coringa no código, podendo ser recriada e usada em qualquer lugar.
 Ex:*/
var a = 8
console.log("C = ",c);
console.log("A = ",a);

var nome, sobrenome, nomeCompleto;
nome = "André";
sobrenome = "Sobreira";
nomeCompleto = nome+" "+sobrenome;
document.getElementById("texto3").innerHTML = nomeCompleto;

// O let deixa a variavel unica dentro do escopo dela, não podendo ser re-declarada, ela fica local.
let pessoa2 = "André";
// let pessoa2 = "fulano"; <- isso aqui gera um erro.

let x = 10;
{
    let x = 2;
    console.log("Esse é o valor de x dentro do bloco: ",x);
}
console.log("Esse é o valor de x fora do bloco: ",x);

// O const é uma constante, não muda em lugar nenhum mais do código.
const y = 100;
//const y = 200; <- isso aqui gera um erro.
console.log("Esse é o valor de y: ",y);
