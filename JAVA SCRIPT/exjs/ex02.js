
//coloquei uma mensagem para a pessoa inserir a idade
alert("Por favor insira a sua idade!");

//nesse let com o prompt a pessoa digita como se fosse um formulario
let idade = prompt("Digite sua idade:  ");

idade = parseInt(idade);

//se a idade for maior de 18 o prompt vai imprimir "maior de idade" se nao "menor de idade"
if(idade > 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade")
}