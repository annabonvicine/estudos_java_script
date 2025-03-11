function adicionarParagrafo(){
    try{
        let container = document.getElementsByTagName("div")[0];

        let novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = "Novo parágrafo adicionado.";

        container.appendChild(novoParagrafo);
    }catch(erro){
        console.error("Erro ao carregar parágrafo:", erro);
    }
}