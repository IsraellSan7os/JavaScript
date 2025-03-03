function cliquei() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    const num = Number(numero);
    let mensagem = '';

    // Verifica positivo/negativo
    if (num < 0) {
        mensagem = 'Número negativo: ' + num;
    } else if (num > 0) {
        mensagem = 'Número positivo: ' + num;
    } else {
        mensagem = 'O número é zero: ' + num;
    }

    // Verifica par/ímpar
    if (num !== 0) {
        mensagem += ' e é ' + (num % 2 === 0 ? 'par' : 'ímpar');
    }

    resultado.innerText = mensagem;
}
