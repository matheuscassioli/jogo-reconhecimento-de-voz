const elementoChute = document.querySelector(".container__conteudo");
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br"

recognition.start();

recognition.addEventListener("result", onSpeak)

function onSpeak(e) {

    chute = e.results[0][0].transcript;
    console.log(chute) 
 
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiValorValido();
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div class="container__conteudo--vocedisse">Você disse:</div>
    <span class="container__conteudo--box">${chute}</span>
    <div></div>
    `;
}

recognition.addEventListener('end', () => recognition.start())