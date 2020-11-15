function pegarID(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5)
        },1500)
    })
}

function buscarEmail(id){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    resolve('thailanpb@gmail.com')
            },1500)
        })
}



function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            var deuErro = true;
            
            if (!deuErro) {
                resolve({time:5, to:"thailan.santos@gmail.com"}); // Promessa cumprida.

           } else {
                reject("Fila ta cheia") // Promessa não cumprida..
            }
        })
    }, 2000);

} 

function pegarUsr(){
    return new Promise((resolve, reject)=>{
        resolve([
            {name: "Thailan", lang:"JS"},
            {name: "Eduador", lang:"PHP"},
            {name: "Milena", lang:"NAN"}
        ])
    })
}

async function principal(){
    var id = await pegarID();
    var email = await buscarEmail(id);

    try {
        await enviarEmail("Ola,tudo bem?" , email)
        console.log("E-mail enviado com sucesso.")
    } catch (err) {
        console.log(err)
    }
}

principal();



/*
pegarID().then((id)=>{
    buscarEmail(id).then((email)=>{
        enviarEmail("Olá, como vai? RECEBA" + email + id).then(()=>{

        }).catch(err=>{
            console.log(err)
        })
    })
})

*/