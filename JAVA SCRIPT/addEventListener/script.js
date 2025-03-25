const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_transfer");
const meusCursos = [...document.querySelectorAll(".curso")];

meusCursos.map((elemento) => {
    elemento.addEventListener("dblclick",(evt) => {
        const curso = evt.target
        elemento.classList.toggle("selecao");
    })

})

btn.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecao")];
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecao)")];
    cursosSelecionados.map((elemento) => {
        caixa2.appendChild(elemento)
    })

    cursosNaoSelecionados.map((elemento) => {
        caixa1.appendChild(elemento)
    })
})