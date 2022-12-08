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