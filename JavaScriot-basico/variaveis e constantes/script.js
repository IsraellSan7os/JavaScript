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


function operadoreIncrement() {
    let number = 10
    // Incremento
    number = number + 1
    console.log(number)

    number++
    console.log("Incrementa depois ", number)

    ++number
    console.log("Incrementa antes ", number)

    let num = 10
    //Decremento
    number = num + 1
    console.log(num)

    num++
    console.log("Incrementa depois ", number)

    ++num
    console.log("Incrementa antes ", number)

}

function ordemPrecedência() {
    /*
    ==============================
     PRECEDÊNCIA DE OPERADORES JS
    ==============================
    
    Nível 7 (ALTO) — Exponenciação
    **   → Ex: 2 ** 3
    
    Nível 6 — Multiplicação / Divisão / Resto
    *   → multiplicação
    /   → divisão
    //  → (não existe em JS, apenas em outras linguagens)
    %   → resto da divisão
    
    Nível 5 — Adição e Subtração
    +   → soma
    -   → subtração
    
    Nível 4 — Operadores Relacionais (comparação)
    ==   → igual (com conversão de tipo)
    !=   → diferente (com conversão de tipo)
    ===  → igual estrito
    !==  → diferente estrito
    <=   → menor ou igual
    >=   → maior ou igual
    >    → maior que
    <    → menor que
    
    Nível 3 — Operador Lógico
    !    → NOT (negação)
    
    Nível 2 — Operador Lógico
    &&   → AND (e)
    
    Nível 1 (BAIXO) — Operador Lógico
    ||   → OR (ou)
    
    ==============================
     DICA IMPORTANTE
    ==============================
    Use parênteses () para deixar
    a lógica mais clara e evitar
    erros de precedência.
    */

    let totall = 20 + (10 - 20) * 2 / 4
    console.log(totall)


}

function IgualDiferente() {

    let one = 1
    let two = 2

    // == igual
    console.log("### Igual A ###")
    console.log(one == two)
    // Existe uma diferença Aquei ele esta olhando pro conteudo e não pro type 
    console.log(two == "2")

    console.log("### Difrente de ###")
    console.log(two != one)
    // Existe uma diferença Aquei ele esta olhando pro conteudo e não pro type 
    console.log(two != "2")
}



// Estritamente Igual e Diferente

function estritamente() {
    let one = 1
    let two = 2

    console.log(one === two)
    console.log(one === 1)

    console.log(two !== one)
    console.log(two === 2)
    console.log(one !== "1")
}



// Maior, Menor e Igual

function menorMaiorIgual() {
    let balance = 5000
    console.log("Saldo", balance)
    var payment = 400
    console.log("Pagamento", payment)

    // > Maior que 
    console.log("O saldo da minha empresa é maior que o meu pagamento", balance > payment)

    // < menor
    console.log("O saldo da minha empresa é menor que o meu pagamento", balance < payment)

    // Maior igual a
    console.log("O saldo da minha empresa é maior ou igual", balance >= payment)
    // Menor igual
    console.log("O saldo da minha empresa é menor ou igual", balance <= payment)

    // Menor igaul a 
}

// Operadores Lógicos
/*
    AND (E) &&
    OR (OU) ||
    NOT (Negação) !
*/

function operadoresLogicos() {
    let email = true
    let password = true
    let adim = false

    // AND (E) &&
    // Preciso que as duas condições sejá verdadeira
    let res = email && password && adim
    console.log(res)

    // OR (OU) ||
    // So precisa de um verdadeiro 
    let loguin = email || adim
    console.log(loguin)


    //  NOT (Negação) !
    // Se for verdadeiro ele converte pra falso, e se for falso ele converte pra verdadeiro
    console.log(!adim)
    console.log(!email)
}

operadoresLogicos()

