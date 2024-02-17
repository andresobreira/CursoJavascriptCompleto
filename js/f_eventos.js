/*
Existem diversos tipos de eventos, mas os mais comuns são estes abaixo:
*/

// onclick = com um click num botão:
function eventoClick(){
    console.log("evento de click acionado");
    document.body.style.backgroundColor = "yellow";
}

// ondblclick = com um duplo click no botão:
function eventoDblClick(){
    console.log("evento de click duplo");
    document.body.style.backgroundColor = "purple";
}

// onmouseover =  com o passar do mouse sobre:
function viraVermelho(){
    let div = document.getElementById("teste"); // posso associar uma tag la do meu arquivo html a uma variavel aqui, a fim de manipular ela.
    div.style.backgroundColor = "red";
}

// onmouseout = quando o mouse sai de uma posição ou área:
function voltaCor(){
    let div = document.getElementById("teste"); // posso associar uma tag la do meu arquivo html a uma variavel aqui, a fim de manipular ela.
    div.style.backgroundColor = "bisque";
}

// onmousemove = quando o mouse é movido numa área:
function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append("O mouse moveu ");
}

// onmousedown = é quando clica na tela, no ato de "baixar" o botão do mouse.
// onmouseup = é quando solta o click da tela, no ato de "subir" o botão do mouse.

// onfocus = ao focar um objeto em tela, isto é, clicar nele, executa algo:
function limpaTexto(){
    document.getElementById("campoTexto").value = "";
}
// onblur = quando desfoca o campo executa outra coisa.

// onchange = quando muda algo em algum campo especifico da tela:
function mudou(){
    console.log("mudou");
}

// onkeypress = quando pressiona uma tecla.
// onkeydown = quando pressiona, no ato de descer a tecla aciona.
// onkeyup = quando pressiona, no ato de soltar a tecla aciona:
function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}

// onload = quando terminar de carregar a página. Costumeiramente se coloca ela dentro da tag <body>.

// onresize = quando a tela é redimensionada. Também se põe geralmente na tag <body>.