const  elementosProdutos = document.querySelector('#produtos')

async function consultaProdutos(){
    const retorno =  await fetch('http://localhost:3000/produtos/cadastrar-produto/')
    const produtos = await retorno.json()
    mostrarProduto(produtos)
}

function mostrarProduto(produtos){
    produtos.forEach(produto => {

        image_src = '../assets/'+produto.imagem
        
    
        const novoProduto = `
        <div class="produtos">
    
                <div class="produto-img">
                    <img src="${image_src}" alt="">
                </div>
                <p class="produto-id"> id: ${produto.id} </p>
                <div  class="produto-info">
                    <h2>${produto.nome} </h2>
                    
                    <p>
                        Descrição:
                        ${produto.descricao}
                    </p>
                    
                    <p> Categoria: ${produto.categoria}</p>
                    <p> Quantidade em estoque: ${produto.quantidade}</p>
                    <p> Marca do produto:  ${produto.marca}</p>
                    <p id="preco"> R$ ${produto.preco}</p>
                    
                    
                    </div>
                    

   
        </div>

        `
        elementosProdutos.innerHTML += novoProduto

        
    })
}


consultaProdutos()
