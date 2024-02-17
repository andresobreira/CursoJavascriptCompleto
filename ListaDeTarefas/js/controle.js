let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    // pegar o valor digitado:
    let valor_input = input.value;

    if((valor_input != "") && (valor_input!=null) && (valor_input!= undefined)){
        contador++;
        let novo_item = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valor_input}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">
                <i class="mdi mdi-delete"></i> Deletar</button>
        </div>
        </div>`;

        // add item no main
        main.innerHTML += novo_item;
        //zerar o input
        input.value="";
        input.focus();
    }

}

function deletar(id){
    var tarefa = document.getElementById(id); // seleciono a tag html pelo id dela.
    tarefa.remove(); // removo a tag do html.
}

function marcarTarefa(id){
    var item = document.getElementById(id); // seleciono a tag html pelo id dela.
    var classe = item.getAttribute('class'); // busco a classe do elemento e mudo ela
    console.log(classe);
    
    if(classe=="item"){
        item.classList.add("clicado"); // concatena no nome o que já tem + o que passei
        
        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-circle-outline'); // remove do texto class só esse termo passado
        icone.classList.add('mdi-check-circle'); // add no texto class só esse termo passado

        item.parentNode.appendChild(item); // desce o elemento para o final da fila

    }
    if(classe=="item clicado"){
        item.classList.remove("clicado");
        
        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

// colocar no campo "input" a opção de dar enter para confirmar.
input.addEventListener("keyup", function(event){
    // se teclou enter:
    if(event.key === "Enter"){
        event.preventDefault(); // aqui ele evita que o enter faça o que faria normalmente e realize a ação abaixo.
        btnAdd.click() // chama o click do botão.
    }
});

