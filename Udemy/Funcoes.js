

/*

function EscreverNome(nome){
    console.log(`Meu nome é ${nome}`)
    return nome
}

EscreverNome('Israel')

function Soma(num){
    return num
}
num1 = 100
num2 = 10

num = (num1 + num1) / num2

console.log(Soma('Numero ' + num))

function Soma(num1, num2){
    console.log(num1 + num2)
    return num1 + num2
}   

Soma(10 + 10)

function NomeCompleto(nome, sobrenome){
    return nome + sobrenome
}

NomeCompleto('Israel', 'Santos')


function calcularDiaria(){
    return 1500/22
}

var diaria = calcularDiaria()
console.log('A diaria de um funcionario é '+ diaria)
*/

// UM funcionario recebe 1500 pro mes, quanto ele recebe por dia? e por hora?
// O funcionario tem uma porcetagem de 3% de imposto sobre o salario bruto quanto ele recebe liquido?


function cacularSalario(salario){
    return salario / 30
}

var salario = cacularSalario(1500)
console.log(`A diaria de um funcionario é R$${salario}.00 Reais por dia`)

let hora = salario / 8.45
console.log(`A hora trabalhada do funcionario é ${hora}`)

let imposto = salario * 0.03
let salarioLiquido = salario - imposto
console.log(`O salario liquido do funcionario é ${salarioLiquido}`)


// function com parametros

function valorOvos(quantidade){
    return quantidade / 1.5
}

let valor = valorOvos(12)
console.log(`O valor dos ovos é ${valor}`)