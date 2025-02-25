// Condições

console.log('Bem-vindo ao sistema de verificação de multas')

let velocidade = 100;

if (velocidade <= 60) {
    console.log('O carro esta dentro do limite de volocidade. Não há multa')
    console.log('Dirija sempre com o sinto de segurança!!')
} else if (velocidade > 60 && velocidade <= 80) {
    console.log(`Velocidade excedente:`)
    console.log(`Velocidade ${velocidade} km/h Multado!!`)
    console.log('Multa Leve')
} else if (velocidade > 80 && velocidade <= 100) {
    console.log(`Velocidade excedente:`)
    console.log(`Velocidade ${velocidade} km/h Multado!!`)
    console.log('Multa Media')
} else {
    console.log(`Velocidade excedente:`)
    console.log(`Velocidade ${velocidade} km/h Multado!!`)
    console.log('Multa Grave')
}

console.log('Bem vindo ao sistema de verificação de pais')

var nomePais = 'Brasil'

if (nomePais == 'Brasil') {
    console.log('Bem-Vindo ao brasil')
    console.log('Você tem cidadania brasileira')
} else {
    console.log('Bem-Vindo ao brasil')
    console.log('Você não é Brasileiro')
}

console.log('Bem Vindo ao sistema de verificação, se o numero é par ou inpar')

var num = 5
var res = num % 2

if (res == 1) {
    console.log('O numero  é inpar')
} else {
    console.log('O numero é par')
}
