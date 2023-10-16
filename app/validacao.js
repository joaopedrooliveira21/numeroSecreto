
function verificarValidação(chute){
    const numero = +chute
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML +=' <div>Valor invalido</div>'
        return
    }

    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML +=`<div>Valor invalido : Fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    
    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O numero secreto era : ${numeroSecreto}</h3>

        <button id="jogar-novamente" class ="btnPlay">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})