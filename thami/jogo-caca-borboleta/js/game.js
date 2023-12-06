var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var intervalocriaborboleta = 2000;

var niveljogo = window.location.search
niveljogo = niveljogo.replace('?','')

console.log(niveljogo)

if(niveljogo === 'normal') {
	//1500
	intervalocriaborboleta = 1500
} else if(niveljogo === 'medio') {
	//1000
	intervalocriaborboleta = 1000
} else if (niveljogo === 'dificil') {
	//750
	intervalocriaborboleta = 750
}

function ajustatamanhopalcojogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura)
}

ajustatamanhopalcojogo()
var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaborboleta)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {
    if (document.getElementById('borboleta')) {
        document.getElementById('borboleta').remove()
        if (vidas > 3) {
            window.location.href = 'gameOver.html'
        } else {
            document.getElementById('v' + vidas).src = "/img/coracao_vazio.png"
            vidas++
        }
    }
    var posicaoX = parseInt(Math.random() * largura) - 90;
    var posicaoY = parseInt(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var borboleta = document.createElement('img')
    borboleta.src = '/img/borboleta.png'
    borboleta.className = tamanhoAleatorio() + " " + ladoAleatorio()
    borboleta.style.left = posicaoX + 'px'
    borboleta.style.top = posicaoY + 'px'
    borboleta.style.position = 'absolute'
    borboleta.id = 'borboleta'
    borboleta.onclick = function () {
        this.remove();
    }
    document.body.appendChild(borboleta)
}
function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3)
    switch (tamanho) {
        case 0:
            return 'borboleta1'
            break
        case 1:
            return 'borboleta2'
            break
        case 2:
            return 'borboleta3'
            break
    }

}
function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
    switch (lado) {
        case 0:
            return 'lado1'
            break
        case 1:
            return 'lado2'
            break
    }

}