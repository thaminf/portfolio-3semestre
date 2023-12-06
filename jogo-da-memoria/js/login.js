// habilitar o botão quando a pessoa digitar o nome

const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');


// colocar um evento que vamos passar é um evento de input, ou seja, toda vez que a pessoa digitar algo, vai executar uma função
const validateInput = ({ target }) => {
    //o target é o que está sendo digitado no input
    if (target.value.length > 3) { //se a qtd de caracteres for maior que dois, habilita o botão
        button.removeAttribute('disabled'); //vai remover o atributo disabled
        return;
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    //comportamento padrão do evento de envio de formulário, é enviar e recarregar a página
    localStorage.setItem('player', input.value);
    window.location = 'pages/jogo.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

//quando apertar jogar, vai salvar o nome e redirecionar para a página de jogo