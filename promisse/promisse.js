// criar uma function que irá simular uma promisse

function fazerPedido(){
    return  new Promise((resolved,reject)=>{
        console.log("......................PEDIDO RECEBIDO PELA COZINHA....................");
        
        setTimeout(()=>{
            const sucesso = true

            if(sucesso == false){
                resolved("🟩 Pedido foi finalizado, pode retirar")
            }else{
                reject("🟥 Ocorreu algo inesperado na cozinha")
            }

        },8000)

    })


}

// chamando a function para fazer o pedido
fazerPedido()
    .then((resposta)=>{
        console.log(resposta)
    })
    .catch((erro)=>{
        console.log(erro)
    })




    console.log("📋 Seu pedido esta sendo preparado")
    
    console.log("🥤  quer dar uma olhada no cardapio das bebidas")
    
    console.log("🍫  Hoje é sexta e tem promoção nos doces")
    
    console.log("........................PEDIDO PRONTO......................................")