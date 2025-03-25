function calcular() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = numero1 + numero2;
            break;
        case "subtracao":
            resultado = numero1 - numero2;
            break;
        case "multiplicacao":
            resultado = numero1 * numero2;
            break;
        case "divisao":
            resultado = numero2 !== 0 ? numero1 / numero2 : "Erro: divisão por zero!";
            break;
        case "potencia":
            resultado = Math.pow(numero1, numero2);
            break;
        case "porcentagem":
            resultado = (numero1 / 100) * numero2;
            break;
        default:
            resultado = "Operação inválida!";
    }

    document.getElementById("resultado").innerText = "O resultado é: " + resultado;
}