let input = document.querySelector('#password'),
    button = document.querySelector('#button');

button.addEventListener('click', showHide);

function showHide() {

    if (input.type == 'password') {
        input.type = 'text';
        button.innerText = 'Ocultar'
    } else {
        input.type = 'password';
        button.innerText = 'Exibir'
    }

}