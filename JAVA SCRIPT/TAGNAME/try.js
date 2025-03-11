try{
    let elemento = 10 / 2; //tentar executar o código
    console.log(elemento);

    x = y - 10; // y não declarado
}catch(erro){
    console.log("Ocorreu um erro", erro.message); //exibe mensagem de erro
}finally{
    console.log("Encerrar o banco de dados"); //executa de qualquer forma
}
