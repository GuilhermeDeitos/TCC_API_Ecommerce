const express = require('express')
const app = express()
const cors = require('cors');

const {sequelize} = require('./models/index')


const routers = require('./routes/rotas')

//Conexao com o banco de dados
app.use(cors())

app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
  console.log("Conectado com o banco de dados")
})
/*

app.set('views',path.join(__dirname,'views'));





  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

 

app.post('/contas', (req, res) => {
    const usuario = adicionarUsuario.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha
    }).then(() => {
      res.redirect('/')
      
    }).catch((err) => {
      res.send('Erro ao adicionar produto no banco de dados '+err)
    })
    
  })

  app.post('/lista-produtos', (req, res) => {

    const produto = addProduto.create({
      nome: req.body.nome_produto,
      descricao: req.body.descricao_produto,
      preco: req.body.preco_produto,
      quantidade: req.body.quantidade_produto,
      categoria: req.body.categoria_produto,
      marca: req.body.marca_produto,
      imagem: req.body.imagem_produto
    }, (erro) => {
      if(erro){
        res.status(400).json({
          error: true,
          message: 'Erro ao adicionar produto no banco de dados'
        })
      }

      return res.status(200).json({
          error: false,
          message: 'Produto adicionado com sucesso'
        })
      })


  })

 /* app.get("/lista-produtos",(req,res)=>{
    addProduto.findAll().then((produtos)=>{
      return res.status(200).json(produto)
    }).catch((err)=>{
      return res.status(400).json({
        error: true,
        message: 'Nenhum produto encontrado'
      })
    })
  })*/


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})