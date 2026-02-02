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
