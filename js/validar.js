function verificaSeOChutePossuiValorValido() {
    const numero = +chute;

    if (chute === "game over") {
        document.body.style.background = "red"
        document.body.innerHTML = `
<h1 class="gameover">O JOGO ACABOU</h>`
    }

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido, o numero deve estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {

        document.body.innerHTML = `
        <h1 class='container__titulo'>Você Acertou!</h1>
        <h3 class= 'container__subtitulo3'>O numero secreto era</h3>
        <span class ='container__conteudo--box2'>${numeroSecreto}</span>        
        <input type="button" id="btn-jogar" value="Jogar Novamente">`
        document.body.style.background = "green"
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += '<div class="container__conteudo-resultado">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div class="container__conteudo-resultado">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'btn-jogar') {
        window.location.reload()
    }
})