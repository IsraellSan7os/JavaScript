function variavelVar() {


    // Variavel sem valor
    var user
    console.log(user)

    // Declarar uma variável com valor
    var email = "ysrallsantos@mail.com"

    // Declara uma variael e depois que for atribuida, eu posso substituir por outro valor
    var senha = 1234
    console.log(senha)

    // Substituindo o valor
    user = 147845
    console.log(user)

}

function variavelLet() {
    // Declara uma variável sem valor
    let user
    console.log(user)

    // Pode ser declarada e substituida
    let name = "Israel"
    console.log(name)

    name = "Anne"
    console.log(name)

}

function variavelConst() {
    // Constante ela não pode ser alterada

    const number = 42
    console.log(number)


    // Irá ferar um erro, pois o valor não pode ser alterado.
    number = 45
    console.log(number)


}

function tiposDeDados() {
    // String

    let userName = "Anne"
    console.log(userName)

    // Usando o typeof  da pra saber qual tipo primitivo esta sendo passado
    console.log(typeof userName)

    // Number
    console.log(typeof 5)

    //Número reais ou float
    console.log(typeof 124.70)

    // Boolean
    console.log(true)
    console.log(false)

    let loguin = true
    console.log(typeof loguin)
}

function operadoresAritmeticos() {
    // soma
    console.log("Soma:", 12 + 8)
    let num = 12
    let num1 = 3
    const res = num + num1
    console.log(res)

    // Subtração
    console.log("Subtração:", 10 - 5)

    let sub = 12
    let sub1 = 3
    const subRes = num + num1
    console.log(subRes)

    // Multiplicação
    console.log("Multiplicação", 2 * 20)
    let mul = 10
    let mult = 2
    const multRes = mul * mult
    console.log(multRes)


    // Divisão
    console.log("Divisão:", 20 / 2)
    let div = 10
    let divi = 3
    const diviRes = div / divi
    console.log(diviRes)

    // Resto da Divisão 
    console.log("Resto da Divisão ", 15 % 2)
    console.log("Multiplicação", 3 ** 3)

}


operadoresAritmeticos()



