const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');


const personagens = [ //essses nomes vão representar cada carta
    'carta1',
    'carta2',
    'carta3',
    'carta4',
    'carta5',
    'carta6',
    'carta7',
    'carta8',
    'carta9',
    'carta10',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }

}

const revealCard = ({ target }) => { //função para clicar e virar a carta. anteriormente, virava a carta apenas quando passava o mouse por cima.

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        //parentNode é o pai da div
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }
}

const createCard = (personagem) => {
    const card = createElement('div', 'card');
    const frente = createElement('div', 'face frente');
    const verso = createElement('div', 'face verso');

    frente.style.backgroundImage = `url('../images/${personagem}.png')`;

    card.appendChild(frente);
    card.appendChild(verso);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', personagem)

    return card;
} // função responsável apenas por criar as cartas//

//função para gerar todo o jogo
const loadGame = () => {
    const duplicarPersonagem = [...personagens, ...personagens];

    const shuffledArray = duplicarPersonagem.sort(() => Math.random() - 0.5);  //para embaralhar as cartas

    shuffledArray.forEach((personagem) => {
        const card = createCard(personagem);
        grid.appendChild(card);
    }); //o foreach espera receber uma função como parametro e vai gerar várias cartas
}

const startTimer = () => {

    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);

}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}
