
let form = document.getElementById('form')
let nomeTitular = document.getElementById('nomeTitular')
let numeroCartao = document.getElementById('numCartao')
let mes = document.getElementById('mes')
let ano = document.getElementById('ano')
let codigo = document.getElementById('codigo')


function checkInputs() {
    const nomeValue = nomeTitular.value
    const numeroCartaoValue = numeroCartao.value
    const mesValue = mes.value
    const anoValue = ano.value
    const codigoValue = codigo.value

    if (nomeValue === '') {
        erro(nomeTitular, 'O campo é obrigatório.')
    } else {
        sucesso(nomeTitular);
    }
    if (numeroCartaoValue === '') {
        erro(numeroCartao, 'O campo é obrigatório.')
    } else {
        sucesso(numeroCartao);
    }
    if (mesValue === '') {
        erro(mes, 'O campo é obrigatório.')
    } else {
        sucesso(mes);
    }
    if (anoValue === '') {
        erro(ano, 'O campo é obrigatório.')
    } else {
        sucesso(ano);
    }
    if (codigoValue === '') {
        erro(codigo, 'O campo é obrigatório.')
    } else {
        sucesso(codigo);
    }
}

function erro(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control erro';

}

function sucesso(input) {
    const registeredData = input.parentElement;
    const form = input.parentElement;

    registeredData.className = 'registered-data sucesso';
    form.className = 'form sucesso';
}

function novaPage() {

    let resultado = document.getElementById("card")

    resultado.innerHTML = `
                           <div class="card-front">
                                <div class="campo-de-numeros">
                                    <span>${numeroCartao.value}</span>
                                </div>
                                <div class="campo-do-nome">
                                    <span>${nomeTitular.value}</span>
                                </div>
                                <div class="campo-da-data">
                                    <span>${mes.value}</span>/
                                    <span>${ano.value}</span>
                                </div>
                            </div>
                            <div class="card-back">
                            <div class="campo-do-cvc">
                                    <span>${codigo.value}</span>
                                </div>
                            </div>
                            <div class="registered-data sucesso">
                            <div>
                            <img src="src/img/icon-complete.svg" alt="Icone de cartão cadastrado">  
                            <h2>Obrigado</h2>
                            <p>Adicionamos os detalhes do seu cartão</p>
                        </div></div>
                            `
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    novaPage();

})
