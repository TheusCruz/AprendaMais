const form = document.querySelector('form');
const buttons = document.querySelectorAll('button');
const btnAcessar = document.querySelector('.acessar')
const inputUser = document.querySelector('#inputUser');
const inputSenha = document.querySelector('#inputSenha');

const ordenar = () => (inputSenha.type == "text") ? ocultarSenha() : revelarSenha()

const revelarSenha = () => inputSenha.type = "text";

const ocultarSenha = () => inputSenha.type = "password";

const acessar = () => {
    if (!inputUser.value) alert('Preencha o campo de Usuário');
    if (!inputSenha.value) alert('Preencha o campo de Senha');

    if (inputUser.value && inputSenha.value) btnAcessar.setAttribute("href", "../../index.html");
};
