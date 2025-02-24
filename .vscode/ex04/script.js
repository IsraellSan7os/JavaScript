function somar() {

    // pega os valores do campos
    let numero1 = window.document.getElementById('num1')
    let numero2 = window.document.getElementById('num2')

    // Converte os valores, Se caso não fizer a conversão ele so aconcatena
    let n1 = Number.parseInt(numero1.value)
    let n2 = Number.parseInt(numero2.value)

    // Faz a soma do elementos
    let resultado = n1 + n2

    var res = window.document.getElementById('resultado')
    res.innerText = ` A soma entre os numero ${n1} + ${n2} = ${resultado}`




}