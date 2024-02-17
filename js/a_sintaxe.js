// Formas de exibir um dado em tela pelo JavaScript:
document.getElementById("texto").innerHTML="Escrevendo a partir do arquivo <b>JS<b>!";

// Essa abaixo é a terceira forma, comentei pra não ficar gerando pop-up toda hora na tela.
//alert('Terceira forma de exibir uma texto via JS, agora via alert!');

console.log("E essa é a quarta forma de saída de texto, agora via console.log"); 
// bastante usado em testes também.

// -----------------------------------------------------
// DECLARAÇÕES:
function minhafuncao(){
    document.getElementById("texto2").innerHTML=
    "Essa é uma saida de uma function."; // posso quebrar o comando em linhas.
};
minhafuncao();

// -----------------------------------------------------
// SINTAXE:
console.log(5+5);
console.log("5+5");

var a = 1;
var b = 5;
var c = a + b; // + soma, - subtrai, * multiplica, / divide, etc.
console.log("A soma de A + B = ",c);

var PESSOA = 'Fulano';
var pessoa = 'Beltrano';
console.log(pessoa); // JS é CASE SENSITIVE

// -----------------------------------------------------
// COMENTÁRIOS:
// assim comenta uma linha.
/*
Assim comenta várias linhas.
*/

