let numero = prompt("Digite o número de sua preferencia para a tabuada: ");
numero = parseInt(numero);

for (let i = 1; i < 11; i ++){
    let tabu = numero * i;
    console.log(tabu);
}


//pra ficar mais bonito da pra fazer assim:  (ex: 2 x 2 = 4)

/* for (let i = 1; i < 11; i ++){
    console.log(numero + "x" + i = " = " + (numero * i) )
}
*/