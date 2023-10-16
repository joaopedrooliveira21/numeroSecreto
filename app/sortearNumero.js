const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoNumeroMenor = document.getElementById('numeroMenor')
elementoNumeroMenor.innerHTML= menorValor

const elementoNumeroMaior = document.getElementById('numeroMaior')
elementoNumeroMaior.innerHTML= maiorValor

console.log(numeroSecreto)