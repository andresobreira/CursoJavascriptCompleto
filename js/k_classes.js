// CLASSES

// esse é um objeto:
const carro ={
    marca:"Fiat",
    modelo:"Uno",
    ano:2001,
};

// essa é uma classe:
class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo+" buzinou: bíiiiiii";
    }
};

const uno = new Carro("Fiat","Uno",2001);

console.log(uno);
console.log(uno.ano);
console.log(uno.buzina());
