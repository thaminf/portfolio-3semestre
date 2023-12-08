
const sereia = document.querySelector('.sereia');
const alga = document.querySelector('.alga');

const pulo = () => {
    sereia.classList.add('pulo');

    setTimeout(() => {
        sereia.classList.remove('pulo');
    }, 500);

}

const loop = setInterval(() => {

    console.log(loop);

    const algaPosition = alga.offsetLeft;
    const sereiaPosition =
    window.getComputedStyle(sereia).bottom.replace('px', '');

    if (algaPosition <= 120 && algaPosition >= 0 && sereiaPosition < 100) {
        alga.style.animation = 'none';
        alga.style.left = `${algaPosition}px`;
        sereia.style.animation = 'none';
        sereia.style.bottom = `${sereiaPosition}px`;
        sereia.src = 'img/sereia.png';
        sereia.style.width = '75px';
        sereia.style.marginLeft = '50px';
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', pulo);