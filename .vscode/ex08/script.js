function cliquei() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    const num = Number(numero);

    if (num < 0) {
        resultado.innerText = 'Número negativo: ' + num;
    } else if (num > 0) {
        resultado.innerText = 'Número positivo: ' + num;
    } else {
        resultado.innerText = 'O número é zero: ' + num;
    }
}
