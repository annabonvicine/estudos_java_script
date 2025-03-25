
// Exemplo de ação:
// const c1 = document.querySelector("#curso1");

// c1.addEventListener("click", () => {
//     alert("Clicou")
// })



// Eventos:
// mousemove
// dblclick



//puxar informação (.target - uma das funçoes):
// const c1 = document.querySelector("#curso1");
// c1.addEventListener("click", (evt) => {
//     console.log(evt.target)
// })


const c1 = [...document.querySelectorAll(".curso")];

c1.map((elemento) => {
    elemento.addEventListener("click",(evt) => {
        const elemento = evt.target
        elemento.classList.toggle("selecionar");
    })

})

