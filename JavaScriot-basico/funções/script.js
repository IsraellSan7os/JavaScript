// Como declara uma função

function message() {
    console.log("Função declarada")
}

// message()


/* Os parâmetros são variáveis que a função recebe,
 enquanto os argumentos são os valores passados para
a função. Mostrei exemplos práticos, como uma 
função de mensagem e uma função de soma. Destaquei 
a importância da ordem dos parâmetros e como definir
valores padrão para eles. Expliquei que a ordem dos
parâmetros é crucial, mas é possível definir argumentos
padrão. Esses conceitos são essenciais para tornar as
funções mais dinâmicas. */

function message(usaername) {
    console.log("Ola", usaername)
}

message("Anne")
message("Israel")


function sum(a, b) {
    console.log(a + b)
}

sum(5, 19)
sum(10, 25)

function joinText(text1, text2, text3 = "") {
    console.log(text1, text2, text3)
}

joinText("Eu", "gosto", "de programar")
joinText("JavaScript", "incrível")


function soma(x, y) {
    let result = x + y


    return result
}

let res = soma(2, 5)
console.log(res)


// JSDoc comentario de documentação javascript

/**
 * 
 * @param {String} username
 * @param {String} password more than 6 characters
 * @returns {Number} user ID
 * 
*/

function signIn(username, password) {
    // Fluxo de autenticação

    return 7
}

signIn()

// Função anônima
const showwMessge = function () {
    return "Olá, Israel!!"
}

console.log(showwMessge)


const showwMessge2 = function (name) {
    return `Olá, ${name}!!`
}   

console.log(showwMessge2("Anne"))