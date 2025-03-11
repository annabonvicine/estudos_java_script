async function carregarUsuarios() {
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await resposta.json();

        const lista = document.getElementById('listaUsuarios');
        lista.innerHTML = '';

        usuarios.forEach(usuario => {
            const item = document.createElement('li');
            item.textContent = `${usuario.name} - ${usuario.username} - ${usuario.address.street} - ${usuario.address.city} - ${usuario.company.name}`;
            lista.appendChild(item);
        });
    }catch(erro){
        console.error("Erro ao carregar os usuários:", erro);
    }
    
}