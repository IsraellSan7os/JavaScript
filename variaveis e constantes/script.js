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


tiposDeDados()
