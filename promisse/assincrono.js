function fazerPedido(){
    return  new Promise((resolved,reject)=>{
        console.log("......................PEDIDO RECEBIDO PELA COZINHA....................");
        
        setTimeout(()=>{
            const sucesso = true

            if(sucesso == true){
                resolved("🟩 Pedido foi finalizado, pode retirar")
            }else{
                reject("🟥 Ocorreu algo inesperado na cozinha")
            }

        },8000)

    })
    
}

async function realizarPedido(){
    try {
        const resposta =  await fazerPedido()   
        console.log(resposta)
    } 
    
        catch (error) {
        console.log(error)
    }
}

realizarPedido()
