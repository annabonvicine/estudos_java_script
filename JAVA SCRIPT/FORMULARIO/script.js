function mostrarDados(){
    let campos = document.getElementsByClassName("campo-input");

    let nome = campos[0].value;
    let email = campos[1].value;
    let telefone = campos[2].value;
    let idade = campos[3].value;
    let estadoCivil = campos[4].value;
    let profissao = campos[5].value;
    let logradouro = campos[6].value;
    let bairro = campos[7].value;
    let numero = campos[8].value;
    let cidade = campos[9].value;
    let estado = campos[10].value;

    if (nome && email && telefone !== ""){
        document.getElementById("nomeExibido").textContent = nome;
        document.getElementById("emailExibido").textContent = email;
        document.getElementById("telefoneExibido").textContent = telefone;
        document.getElementById("idadeExibido").textContent = idade;
        document.getElementById("estadocivilExibido").textContent = estadoCivil;
        document.getElementById("profissaoExibido").textContent = profissao;
        document.getElementById("logradouroExibido").textContent = logradouro;
        document.getElementById("bairroExibido").textContent = bairro;
        document.getElementById("numeroExibido").textContent = numero;
        document.getElementById("cidadeExibido").textContent = cidade;
        document.getElementById("estadoExibido").textContent = estado;
    }else{
        alert("Por favor, preencha todos os campos.");
    }

}