const carro = { // Declarar sempre como 'const' e entre chaves {}, semelhante ao 'dict' do Python.
    marca:"ford",
    modelo:"ka",
    ano:2015,
    placa:"ABC-1234",
    buzina: function(){alert("Biiiiii")}, // posso criar funções atreladas a esse objeto.
    completo: function(){
        return "A marca é "+ this.marca + " e o modelo é "+this.modelo // o "this" é pra referenciar o próprio objeto.
    },
}; // Esse é um objeto literal, não precisa declarar a classe, só instancia direto. 


console.log(carro); // assim imprime todas os atributos do objeto.
console.log(carro.ano, carro.marca); // assim imprime só os atributos que selecionei.
console.log(carro["ano"],carro["marca"]); // assim também imprime só os atributos que selecionei.
// carro.buzina();
console.log(carro.completo());