function calcularMedia() {
    // Campos com nome e sobrenome
    const txtNome = document.getElementById('name').value
    const txtSobrenome = document.getElementById('sobrenome').value

    // Campos de notas
    const nbNota1 = document.getElementById('nota1').value
    const nbNota2 = document.getElementById('nota2').value
    const nbNota3 = document.getElementById('nota3').value
    const nbNota4 = document.getElementById('nota4').value

    // Converter os valores para número
    let n1 = Number.parseFloat(nbNota1)
    let n2 = Number.parseFloat(nbNota2) 
    let n3 = Number.parseFloat(nbNota3) 
    let n4 = Number.parseFloat(nbNota4)

    // Cálculo da média
    let media = (n1 + n2 + n3 + n4) / 4

    // Resultado
    let res = document.getElementById('resultado')

    if (media < 6) {
        res.innerText = `${txtNome} ${txtSobrenome}, poxa que pena, você não passou! Média: ${media.toFixed(2)}`
        res.style.color = 'red'
    } else if (media >= 6 && media <= 6.9) {
        res.innerText = `${txtNome} ${txtSobrenome}, você está de recuperação! Média: ${media.toFixed(2)}`
        res.style.color = 'orange'
    } else {
        res.innerText = `${txtNome} ${txtSobrenome}, parabéns! Você passou! Média: ${media.toFixed(2)}`
        res.style.color = 'green'
    }
}

// Adicionando o evento ao botão de envio Cheguei nesse ponto nao sabia como fazer, para que os resutados fosse exibido na tela
document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    calcularMedia()
});
