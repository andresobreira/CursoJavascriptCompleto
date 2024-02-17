const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2001,
  motor: ["1.6", "1.4", "1.0"],
};

let texto = JSON.stringify(carro); // transforma para texto json.
document.getElementById("texto").innerHTML = texto;
let objeto = JSON.parse(texto); // transforma o texto em objeto de volta.
console.log(objeto.marca);

// usando o json na pratica:
function buscarCEP() {
  let input = document.getElementById("cep").value;
  const ajax = new XMLHttpRequest(); // crio uma requisição ajax http.
  ajax.open("GET", "https://viacep.com.br/ws/" + input + "/json/"); // abro a requisição tipo get e passo o site (esse via cep é uma api para CEPs).
  ajax.send(); // envio a requisição acima.

  ajax.onload = function () {
    // no retorno da requisição eu trabalho:
    document.getElementById("texto").innerHTML = this.responseText; // exibir todo o retorno no html.
    let obj = JSON.parse(this.responseText); // transformo o retorno (que veio em texto) em objeto.
    let logradouro = obj.logradouro;
    let bairro = obj.bairro;
    let cidade = obj.localidade;
    let estado = obj.uf;
    document.getElementById("texto").innerHTML =
      logradouro + "," + bairro + "," + cidade + "-" + estado;
  };
}
