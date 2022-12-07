new Cleave('#nomeTitular', {
    uppercase: true,
    blocks: [10, 10]
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










/*
let form = document.getElementById('form')
let nameTitular = document.getElementById('name')
let numberCard = document.getElementById('numero')
let mes = document.getElementById('mes')
let ano = document.getElementById('ano')
let codigo = document.getElementById('codigo')

function checkInputs() {
    const nameTitularValue = nameTitular.value
    const numberCardValue = numberCard.value
    const mesValue = mes.value
    const anoValue = ano.value
    const codigoValue = codigo.value

    if (nameTitularValue === '') {
        erro(nameTitular, 'O campo é obrigatório.')
    } else {
        sucesso(nameTitular);
    }
    if (numberCardValue === '') {
        erro(numberCard, 'O campo é obrigatório.')
    } else {
        sucesso(numberCard);
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


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    novaPage();

})*/