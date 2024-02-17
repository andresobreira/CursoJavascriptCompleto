// IF e ELSE

var hora = new Date().getHours();

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
};

function verificar(){
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null){
        let p = document.getElementById("texto");
        p.innerHTML = "O campo não pode ser vazio.";
        p.style.color="red";
    } else {
        let p = document.getElementById("texto");
        p.innerHTML = "Parabéns, tudo ok.";
        p.style.color="blue";
    }
};

//-----------------------------------------------------
// SWITCH
function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); // essa função deixa tudo em minusculo.

    switch (cor){
        case "azul":
            document.body.style.background = "blue";
            break;
        case "vermelho":
            document.body.style.background = "red";
            break;
        case "amarelo": 
            document.body.style.background = "yellow";
            break;
        default:
            document.getElementById("texto").innerHTML = "nenhuma cor disponivel para "+cor;
            document.body.style.background = "#ddd";
    }
}
