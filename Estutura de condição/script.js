// Operador condição ternário

let age = 18
console.log(age >= 18 ? "Você pode dirigir." : "Você não pode dirigir")


//Falsy e Truthy

console.log("### Exemplos de falsey ###")
console.log(false ? "Verdadeiro" : "Falso")
console.log(0 ? "Verdadeiro" : "Falso")
console.log(-0 ? "Verdadeiro" : "Falso")
console.log("" ? "Verdadeiro" : "Falso")
console.log(null ? "Verdadeiro" : "Falso")
console.log(undefined ? "Verdadeiro" : "Falso")
console.log(NaN ? "Verdadeiro" : "Falso")


console.log("### Exemplos de truthy ###")
console.log(true ? "Verdadeiro" : "Falso")
console.log(1 ? "Verdadeiro" : "Falso")
console.log("0" ? "Verdadeiro" : "Falso")
console.log("false" ? "Verdadeiro" : "Falso")
console.log({} ? "Verdadeiro" : "Falso")
console.log([] ? "Verdadeiro" : "Falso")
console.log(" " ? "Verdadeiro" : "Falso")
console.log("Israel" ? "Verdadeiro" : "Falso")
console.log(-1 ? "Verdadeiro" : "Falso")
console.log(Infinity ? "Verdadeiro" : "Falso")
console.log(-Infinity ? "Verdadeiro" : "Falso")


// if  (SE)

console.log("### Estrutura de condição if ###")
let hour = 11
if (hour <= 12) {
    console.log("Bom dia!")
}
var idade = 35
if (idade >= 18 && idade <= 35) {
    console.log("Jovem ")
}

var idade = 2
if (idade < 18 || idade > 65) {
    console.log("fique em casa!")
}

console.log("### Estrutura de condição if else ###")

const dia = 19

if (dia >= 6 && dia <= 12.30) {
    console.log("Bom dia!")
} else if (dia >= 12.31 && dia <= 18.59) {
    console.log("Boa Tarde!")
} else if (dia >= 19 && dia <= 23.59) {
    console.log("Boa noite!")
} else {
    console.log("Boa Madrugada!")
}

// Switch

let option = 1
const atendimentoHumano = 10

switch (option) {
    case 1: console.log("Deseja consultar alguem ?")
        if (atendimentoHumano >= 8 && atendimentoHumano <= 18) {
            console.log("Transferindo para um atendente humano")
        } else {
            console.log("Atendimento humano indisponível")
        }
        break
    case 2: console.log("Segunda via do boleto")
        break
    case 3: console.log("Antendimento humano")
        break
    default: console.log("Opção inválida")
}
