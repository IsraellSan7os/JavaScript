 window.alert("Meu primeiro comando com javaScript")
window.prompt("Qual é seu nome?")
window.confirm("Esta gostando de estudar javaScript") 

var nome = window.prompt("Qual é seu nome ?")
window.alert('Seu nome é ' + nome)


var num1 = Number.parseInt(window.prompt('Digite um numero'))
var num2 = Number.parseInt(window.prompt('Digite um numero'))
var res = num1 + num2
window.alert('A soma entre os numero é ' + res)
window.alert(`A soma entre os numero ${num1} e ${num2} é  igual á ${res}`)


window.alert('Digite um Numero pra fazer a subtração')
var sub1 = Number.parseInt(window.prompt('Digite um numero pra ser subtraido'))
var sub2 = Number.parseInt(window.prompt('Digite um segundo numero'))
var resultado = sub1 - sub2
window.alert(resultado)
window.alert(`A subtração do numero ${sub1} e entre o numero ${sub2} o resultado é  ${resultado}`) 

window.alert('Numero da divião')
const div = Number.parseInt(window.prompt('Digite o numero divisor'))
const div1 = Number.parseInt(window.prompt('Digite o numero dividendo'))
const resultadoDivisao = div / div1
window.alert(`A divizão`)
window.alert(`O resultado da divisão é: ${resultadoDivisao}`);





