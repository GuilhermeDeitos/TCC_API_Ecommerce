let btnSignin = document.querySelector('#sign-in') // variavel que irá receber o id do botão sign-in
let btnSignup = document.querySelector('#sign-up')// variavel que irá receber o id do botão sign-up

var body = document.querySelector("body") // variavel que irá receber o body

btnSignin.addEventListener("click",function(){ // função que ao ser ativada vai mudar o nome do body para sign-in-js,para ser ativada basta clicar no botão sign-in, após isso a variavel btnSignin vai receber um "alerta" que o evento ocorreu assim executando a função
  body.className = 'sign-in-js'
})

btnSignup.addEventListener("click",function(){ // função que ao ser ativada vai mudar o nome do body para sign-up-js, para ser ativada basta clicar no botão sign-up, após isso a variavel btnSignup vai receber um "alerta" que o evento ocorreu assim executando a função
  body.className = 'sign-up-js'
})