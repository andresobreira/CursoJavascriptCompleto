/*
Declara sempre como 'const' e entre colchetes [], semelhante às listas em Python.
Assim como no Python também, os índices da lista começam em zero (0).
*/

teste = [];
console.log(Array.isArray(teste)); // saber se é um array.

//-------------------------------------------------------
// consigo colocar praticamente tudo dentro de um array:
const pessoa1 = ["Andre", "Sobreira", 30]; // isso é um array
const pessoa2 = {nome: "Andre", sobrenome:"Sobreira", idade:30}; // isso é um objeto.

// primeira forma de criar:
const lista = ["arroz","feijão","macarrão","leite"];
console.log(lista);
console.log(lista[0]);

// segunda forma de criar:
const lista2 = [];
lista2[0] = "batata";
lista2[1] = "maracujá";
console.log(lista2);

// terceira forma de criar:
const lista3 = new Array("maçã","banana","coco");
let x = lista3[2];
lista3[2] = "açai";
console.log(lista3, x);


//-------------------------------------------------------
// retorna a quantidade de elementos dentro.
const pessoa = ["Andre", "Sobreira", 30];
var qnt = pessoa.length; 
console.log(qnt);
console.log(pessoa.length);


//-------------------------------------------------------
// para add um valor no final da lista.
pessoa.push("Brasileiro"); 
console.log(pessoa);
// ou 
pessoa[pessoa.length] = "Solteiro";
console.log(pessoa);

// add no começo da lista:
pessoa.unshift("Sr.");
console.log(pessoa);


//-------------------------------------------------------
// remove o ultimo elemento da lista:
var y = pessoa.pop(); // assim como em Python eu posso salvar numa variavel o elemento removido.
console.log(y);

// remove o primeiro elemento da lista:
var y = pessoa.shift();
console.log(y);

// remove da posição que eu passar, porém assim não reordena os elementos, o indice vai ficar undefined (vazio):
// delete pessoa[n]; // n aqui é a posição desejada. 


//-------------------------------------------------------
// Juntando listas:
const lista_1 = ["Arroz","Açucar","Café"];
const lista_2 = ["Feijão","Sal","Fermento"];
const lista_3 = ["Tomate","Alface"];

const superLista = lista_1.concat(lista_2, lista_3);
document.getElementById("texto3").innerHTML = superLista;


//-------------------------------------------------------
// Imprimindo no HTML:
document.getElementById("texto").innerHTML = pessoa; // entrega na tela os dados separados com virgula
document.getElementById("texto2").innerHTML = pessoa.join(" - "); // entrega na tela os dados separados com hífen

//-------------------------------------------------------
// Outros:
// Metodo slide, para cortar lista a partir de uma posição, de num intervalo.
const lista_x = lista.slice(posicao_inicial,posicao_final);

// Metodo sort, para ordenar listas em ordem alfabética.
const listaComprasEmOrdem = superLista.sort(); // ordem crescente
const listaComprasEmOrdemInversa = superLista.reverse(); // ordem descrescente
numeros.sort(function(a,b){return a-b}); // Metodo para ordenar lista numerica crescente
numeros.sort(function(a,b){return b-a}); // Metodo para ordenar lista numerica decrescente
