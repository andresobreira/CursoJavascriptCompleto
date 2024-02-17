// Operadores aritmeticos:
// +, -, *, /, ++, --
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = valor1 + valor2;
console.log("A soma de valor1 e valor2 =",total);
total = valor1 - valor2;
console.log("A subtração de valor1 e valor2 =",total);
total = valor1 * valor2;
console.log("A multiplicação de valor1 e valor2 =",total);
total = valor1 / valor2;
console.log("A divisão de valor1 e valor2 =",total);

total = ++valor1;
console.log(valor1);

total = --valor1;
console.log(valor1);

// Operadoes de atribuição:
// =, +=, -=, *=, /=, etc.
valor1 += valor2 // isso é a mesma coisa que valor1 = valor1 + valor2. Funciona para todas os operadores (+,-,*,/).

// Operadores de comparação:
// ==, ===, !=, >=, <=
var var1, var2, var3;
var1 = 3;
var2 = "3";
var3 = (var1 == var2); // dois simbolos de igual compara os valores.
console.log(var3);
var3 = (var1 === var2); // três simbolos de igual compara os valores e os tipos.
console.log(var3);

// Operador condicional:
var idade, eleitor, resultado;
idade = 17;
eleitor = (idade<18) ? "Não eleitor" : "Eleitor"; // condição ? se sim : se não ;
console.log(eleitor);

// Operador lógico:
// && (e), || (ou), !(condicao) (negação).
resultado = (idade >10 && idade <20);
console.log(resultado);
resultado = !(idade >10 && idade <20);
console.log(resultado);
