const elementosUsuarios = document.querySelector('#usuarios');

async function getUsuarios() {
    const response = await fetch('http://127.0.0.1:3000/usuarios/login');
    const usuarios = await response.json();
    mostrarUsuarios(usuarios);
    
}

function mostrarUsuarios(usuarios) {
    usuarios.forEach(usuario => {
        const novoUsuario = `
            <table class="usuario">
                <h3>${usuario.nome}</h3>
                <p>${usuario.email}</p>
                <p>${usuario.createdAt}</p>
            </table>
        `
        elementosUsuarios.innerHTML += novoUsuario;
    })
}

getUsuarios()

