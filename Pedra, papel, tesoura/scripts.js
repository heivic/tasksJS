var elementos = document.querySelectorAll(".player-options div > img")
var playerOPT = ""
var inimigoOpt = ""

function validarVitoria(){

    let vencedor = document.querySelector(".vencedor")

    if(playerOPT == "pedra"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Inimigo ganhou!"
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Parabéns, você ganhou!"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O jogo foi empatado!"
        }
    }

    if(playerOPT == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O jogo foi empatado!"
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Inimigo ganhou!"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Parabéns, você ganhou!"
        }
    }

    if(playerOPT == "tesoura"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Parabéns, você ganhou!"
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "O jogo foi empatado!"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Inimigo ganhou!"
        }
    }
}


function resetInimigo(){
    const enemyOptions = document.querySelectorAll(".enemy-options div")
    for(var i = 0; i < enemyOptions.length; i++){
    
    enemyOptions[i].childNodes[0].style.opacity = 0.3
    }
}


function inimigoJogar(){
    let rand = Math.floor(Math.random()*3)

    const enemyOptions = document.querySelectorAll(".enemy-options div")
    resetInimigo()
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute("opt")
        }
    }


    validarVitoria()

}

/*Resetar Opacidade dos demais elementos(Player)*/
function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3
    }
}

/*Aumentar Opacidade de somente um elemento.(Player)*/
for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{
        resetOpacityPlayer()
        t.target.style.opacity = 1
        playerOPT = t.target.getAttribute("opt")

        inimigoJogar()
    })
}