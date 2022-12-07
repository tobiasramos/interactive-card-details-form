/* Validações com o Cleave dos dados do formulário */

new Cleave('#nomeTitular', {
    uppercase: true,
    delimiters: [' ' , ' ']
})

new Cleave('#numCartao', {
    blocks: [4, 4, 4, 4],
    delimiter: ' ',
    numericOnly: true
});

new Cleave('#mes', {
    date: true,
    datePattern: ['m']
});

new Cleave('#ano', {
    date: true,
    datePattern: ['y']
});

new Cleave('#codigo', {
    blocks: [3],
    numericOnly: true
});


/*--------------------------*/

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

    resultado.innerHTML = `<svg class="logo-card" width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
                                <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 
                                4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" />
                           </svg>
                        
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
                            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="url(#a)" />
                                <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
                                <defs>
                                    <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#6348FE" />
                                        <stop offset="1" stop-color="#610595" />
                                    </linearGradient>
                                </defs>
                            </svg>
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
