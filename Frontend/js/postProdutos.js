const  btn_inserir = document.querySelector('#cadastrar-produto')

btn_inserir.addEventListener('click', function(event){
    //pegar dados do formulario
    //enviar os dados para a api
    const produto = getDadosForm()
    let xhr = new XMLHttpRequest()
    xhr.open('POST','http://127.0.0.1:3000/produtos/cadastrar-produto',true)

    xhr.setRequestHeader('Content-type','application/json')
    let produtoJSON = JSON.stringify(produto)
    xhr.send(produtoJSON)

    xhr.onload = function(){
        if(xhr.status == 200 || xhr.status == 201){
            alert('Produto cadastrado com sucesso')
            limparFormulario()
            window.location.href = 'index.html'
        }else{
            console.log(xhr.responseText)
        }
    }
})

function getDadosForm(){
    const nomeProduto = document.querySelector('#nome-produto')
    const descricaoProduto = document.querySelector('#descricao-produto')
    const precoProduto = document.querySelector('#preco-produto')
    const categoriaProduto = document.querySelector('#categoria-produto')
    const imagemProduto = document.querySelector('#imagem-produto')
    const quantidadeProduto = document.querySelector('#quantidade-produto')
    const marcaProduto = document.querySelector('#marca-produto')

    const produto = {
        nome: nomeProduto.value,
        descricao: descricaoProduto.value,
        preco: precoProduto.value,
        categoria: categoriaProduto.value,
        imagem: imagemProduto.value,
        quantidade: quantidadeProduto.value,
        marca: marcaProduto.value
    }
    console.log(produto)

    return produto

}
/*
async function enviarDadosAPI(dados){
    try {
        const resposta = await fetch('http://localhost:3000/produtos/cadastrar-produto', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        if(resposta.status == 200 || resposta.status == 201){
            alert('Produto cadastrado com sucesso')
            /*limparFormulario()
            window.location.href = 'index.html'
        } else {
            alert('Erro ao cadastrar produto')
        }
    } catch (error) {
        console.error(error.message)
    }

}
*/
function limparFormulario(){
    document.querySelector('#nome-produto').value = ''
    document.querySelector('#descricao-produto').value = ''
    document.querySelector('#preco-produto').value = ''
    document.querySelector('#categoria-produto').value = ''
    document.querySelector('#imagem-produto').value = ''
    document.querySelector('#quantidade-produto').value = ''
    document.querySelector('#marca-produto').value = ''
}

