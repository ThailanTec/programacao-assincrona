## O que é Programação Assincrona! 

Significa que as coisas que você colocar na sua aplicação vão ocorrer indepedente da ordem. 
As coisas são executada ao mesmo tempo sem bloquear o fluxo da aplicação, sendo assim, elas poderiam ser finalizadas em qualquer ordem. 

Podemos misturar programação Assync e Sincriona sem problema.  

## 3 formas de trabalhar com Assync

Sendo uma evolução da outra, de cima para baixo. 

3 Async/Await
2 Promise
1 CallBack 

## CallBacks 

Quando você tem uma função e faz a ligação com um metodo assincrono. E quando ele é concluido a função é chamada. 

Exemplo de callback:

function enviarEmail(corpo, para, callback){
    setTimeout(()=>{
        console.log( ` Para: ${para}
        -------------------------------
        ${corpo}
        -------------------------------
        De: Thailan Santos
        ` )
        callback();
    }, 5000)

}
console.log('Inicio de e-mail.')
enviarEmail("Oi, tudo bem? Seja bemvindo", "thailan.santso@gmail.com",()=>{
console.log('Espera um minuto, ta chegando.')
console.log('Tudo Bem.')
});


No caso os comando de console.log so vão executados depois dos e-mail serem enviados. 

## Passando Parâmetros em callbacks
De dentro da função assincrona podemos passar parametros para que seja possivel repelir no codigo. Ex:
 callback("ok", 5,"5s");

E no retorno podemos passar da seguinte forma: 

enviarEmail("Oi, tudo bem? Seja bemvindo", "thailan.santso@gmail.com",( status, amonut, time)=>{
console.log(` Status: ${status}
-------------------------------
${amonut}
-------------------------------
Tempo de envio: ${time}
` )
console.log('Tudo OK.')
});

Assim o mesmo mais nos retornar no console:

enviarEmail("Oi, tudo bem? Seja bemvindo", "thailan.santso@gmail.com",( status, amonut, time)=>{
console.log(` Status: ${status}
-------------------------------
${amonut}
-------------------------------
Tempo de envio: ${time}
` )
console.log('Tudo OK.')
});

**Não necessarimanete precisamos utilizar todos os parametros. Podemos utilizar 2 ou nenhum.**

## Tratamento de erros nos callbacks

Atraves de parametros conseguimos passar informações de erros. Sendo o parametro de erro sendo sempre o ultimo: 

function enviarEmail(corpo, para, callback){
    setTimeout(()=>{
        {
        var deuErro = false;

        if (deuErro) {
            callback("O envio de e-mail fakgiy,")
            
        } else {
            callback()
        }


## Promises

Sendo uma evolução dos callbacks, uma forma mais sofistica de trabalhar com programação assincrona.
Quando estamos tratando de uma promise pode acontecer 2 coisas, ou funcionar ou não funcionar. 

Uma estrutra basica de exeplo de promise é a seguinte: 

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            var deuErro = false;
            console.log("Email enviado!")
            if (!deuErro) {
                resolve(); // Promessa cumprida.

           } else {
                reject() // Promessa não cumprida..
            }
        })
    }, 2000);

}

enviarEmail("Olá mundo", "thailn@gmail.com")

Para checarmos se a mesma está funcionando e se realmente está funcionando podemos utilizar o then e o catch. Sempre vamos precisar tratar uma promise, pois se não a mesma gera um erro ilegivel. 

O then é para quando o codigo funciona e o catch é para quando o codigo apresenta um erro:

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            var deuErro = true;
            
            if (!deuErro) {
                resolve(); // Promessa cumprida.

           } else {
                reject() // Promessa não cumprida..
            }
        })
    }, 2000);

}

enviarEmail("Olá mundo", "thailn@gmail.coim").then(()=>{
    console.log("Email enviado com sucesso.")
}).catch(()=>{
    console.log("Email não enviado.")
})

## Parametros nas promises.

Podemos passar parametros quando a mesma é revolvida ou rejeitada, Mas podemos passar apenas um parametro em cada, nada mais que isso, mas se for necessario podemos passar atraves de um json. Ex:
**Com um parametro:**
resolve(to); // Promessa cumprida.
**Com mais de um em Json**
resolve({time:5, to:"thailan.santos@gmail.com"}); // Promessa cumprida.

### Exeplo de promise resolve

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            var deuErro = false;
            
            if (!deuErro) {
                resolve({time:5, to:"thailan.santos@gmail.com"}); // Promessa cumprida.

           } else {
                reject() // Promessa não cumprida..
            }
        })
    }, 2000);

}

enviarEmail("Olá mundo", "thailn@gmail.coim").then((dados)=>{
    console.log(`Time: ${dados.time}
    to: ${dados.to}
    `)
}).catch(()=>{
    console.log("Email não enviado.")
})

### Exeplo de promise reject

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            var deuErro = true;
            
            if (!deuErro) {
                resolve({time:5, to:"thailan.santos@gmail.com"}); // Promessa cumprida.

           } else {
                reject("Fila da cheia") // Promessa não cumprida..
            }
        })
    }, 2000);

}

enviarEmail("Olá mundo", "thailn@gmail.coim").then((dados)=>{
    console.log(`Time: ${dados.time}
    to: ${dados.to}
    `)
}).catch((erro)=>{
    console.log("Email não enviado."+ erro)
})

## Promise aninhadas ou Promise Hell

Promise aninhadas, são quando as promises são realizadas as operações uma dentro da outra. 

pegarID().then((id)=>{
    buscarEmail(id).then((email)=>{
        enviarEmail("Olá, como vai? RECEBA" + email + id).then(()=>{

        }).catch(err=>{
            console.log(err)
        })
    })
})

Mas acaba sendo mais dificil a leitura quando temos uma logica maior por tras da aplicação. 


## Async e Await

É uma forma de escrever o codigo sem o then e o catch. Mais utilizado quando tem que receber dados de uma promisse. 

Sempre que formos utilizar async e await devemos utilizar uma função, onde vamos informar que a mesma é async primeiro e em seguidas dizemos onde ela deve esperar para proseguir. 
Exemplo:

async function principal(){
    var usr = await pegarUsr();

    console.log(usr)
}

## Resolvendo promise hell com Async e Await

Convertemos  isso:
pegarID().then((id)=>{
    buscarEmail(id).then((email)=>{
        enviarEmail("Olá, como vai? RECEBA" + email + id).then(()=>{

        }).catch(err=>{
            console.log(err)
        })
    })
})

Para isso:

async function principal(){
    var id = await pegarID();
    var email = await buscarEmail(id);

    enviarEmail("Ola,tudo bem?" , email).then(()=>{
        console.log("Email enviado")
    }).catch((err)=>{
        console.log(err)
    })
}


Com async e await conseguimos criar um codigo mais limpo.

## Tratamento de dados com async e await

Utilizamos a estrutura de try e catch.
Ex:

try{

}catch(err){

}

Exemplo de envio de e-mail:

async function principal(){
    var id = await pegarID();
    var email = await buscarEmail(id);

    try {
        await enviarEmail("Ola,tudo bem?" , email)
        console.log("E-mail enviado com sucesso.")
    } catch (err) {
        console.log("Envio de e-mail falhou")
    }
}

