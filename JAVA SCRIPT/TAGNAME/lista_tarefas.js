function adicionarTarefa(){
    let input = document.getElementsByTagName("input")[0];
    let lista = document.getElementsByTagName("ul")[0];

    if(input.value.trim() !== ""){
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = input.value;

        lista.appendChild(novaTarefa);
        input.value = "";
    }else{
        alert("Digite uma tarefa antes de adicionar!")
    }
}