class ProdutoService{
    constructor(ProdutoModel){
        this.produto = ProdutoModel;
    }

    async get(){
        const produtos = await this.produto.findAll()
        return produtos
    }

    async adicionar(produtosDTO){ //DTO = Data Transfer Object
        console.log('teste', produtosDTO)
        try{
           await this.produto.create(produtosDTO)

        } catch (erro){
            console.log(erro.message)
            throw erro
        }

    }
    
    async atualizar(id, produtosDTO){
        const produtoAtualizado = await this.produto.update(produtosDTO, {

            where: {
                id: id
            }
        })
    }

    async deletar(id){
        const produtoDeletado = await this.produto.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = ProdutoService