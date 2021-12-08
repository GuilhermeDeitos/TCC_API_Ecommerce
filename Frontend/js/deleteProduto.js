
function buttonHolded(button){
    event.preventDefault();
    const input = button.parentElement.querySelector('#id-produto')

    let xhr = new XMLHttpRequest()
    xhr.open('DELETE','http://127.0.0.1:3000/produtos/deletar-produto',true)

    xhr.setRequestHeader('Content-type','application/json')

    const idObj = {
        "id": input.value
    }
    const idJson = JSON.stringify(idObj)
    xhr.send(idJson)
    
    xhr.onload = function(){
        if(xhr.status == 200 || xhr.status == 201){
            alert('Produto deletado com sucesso')
            window.location.href = 'index.html'
        }else{
            console.log(xhr.responseText)
        }
    }



}



