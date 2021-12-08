const btn_inserir = document.getElementById('cadastrar-usuario')

btn_inserir.addEventListener('click', function (event) {
    event.preventDefault()
    const usuario = getDadosForm()
    enviarDadosAPI(usuario)
})

function getDadosForm(){
    const nomeUsuario = document.getElementById('nome').value
    const emailUsuario = document.getElementById('email').value
    const senhaUsuario = document.getElementById('senha').value
    
    const user ={
        nome: nomeUsuario,
        email: emailUsuario,
        senha: senhaUsuario
    }
    return user
}

function enviarDadosAPI(dados){
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000/usuarios/login')

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(dados))
    xhr.onload = function(){
        if(xhr.status === 200 || xhr.status === 201){
            alert('Usuario cadastrado com sucesso')
            limparFormulario()
            window.location.href = 'index.html'
        } else {
            console.log("Erro ao cadastrar usuario",xhr.responseText)
        }

    }
}

function limparFormulario(){
    document.querySelector('#nome').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#senha').value = ''

}
