async function carregarAlunos(){
    try{
        const resposta = await fetch('alunos.json');
        const alunos = await resposta.json();
        exibirAlunos(alunos);
    }catch (erro){
        console.error("Erro ao carregar alunos:", erro);
    }
}

function exibirAlunos(alunos){
    const lista = document.getElementById("lista-alunos");
    lista.innerHTML = "";
    alunos.forEach(aluno => {
        const item = document.createElement("li");
        item.textContent = `${aluno.nome} - ${aluno.idade} anos - curso: ${aluno.curso}`;
        lista.appendChild(item);
    });
}

carregarAlunos();