function buttonAtt(button){
    event.preventDefault()
    const produto = getDadosForm()
    
    const xhr = new XMLHttpRequest()


    xhr.open('PATCH',`http://127.0.0.1:3000/produtos/editar-produto`,true)
    xhr.setRequestHeader('Content-type','application/json')
    

    const produtoJson = JSON.stringify(produto)

    xhr.send(produtoJson)
    xhr.onload = function(){
        if(xhr.status == 200 || xhr.status == 201){
            alert('Produto editado com sucesso')
        
        }else{
            console.log(xhr.responseText)
        }
    }
}
                
function getDadosForm(){
    const idProduto = document.querySelector('#id-produto')
    const nomeProduto = document.querySelector('#nome-produto')
    const descricaoProduto = document.querySelector('#descricao-produto')
    const precoProduto = document.querySelector('#preco-produto')
    const categoriaProduto = document.querySelector('#categoria-produto')
    const imagemProduto = document.querySelector('#imagem-produto')
    const quantidadeProduto = document.querySelector('#quantidade-produto')
    const marcaProduto = document.querySelector('#marca-produto')

    const produto = {
        id: idProduto.value,
        nome: nomeProduto.value,
        descricao: descricaoProduto.value,
        preco: precoProduto.value,
        categoria: categoriaProduto.value,
        imagem: imagemProduto.value,
        quantidade: quantidadeProduto.value,
        marca: marcaProduto.value
    }
    Object.keys(produto).forEach(key => produto[key] === '' ? delete produto[key] : {});
    console.log(produto)

    return produto

}
