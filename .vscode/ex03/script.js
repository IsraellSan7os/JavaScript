
// 1 metodo

function clicar() {
    let txtclic = window.document.getElementById('clicou')
    txtclic.innerText = 'Clicou!'
    txtclic.style.background = 'red'

}

function entra() {
    let txtEntou = window.document.getElementById('entrou')
    txtEntou.innerText = 'O mause entrou e mudou'
    txtEntou.style.background = 'red'
}

function sair() {
    const txtsair = window.document.getElementById('sair')
    txtsair.style.background = 'yellow'
    txtsair.innerText = 'Mause saio'
    txtsair.style.color = 'black'

}

// o unico proble a de usar esse metodo é de que á um consumo de memoria enorme

// 2 metodo
var txtGlobal = document.getElementById('global')

function entraglobal() {
    txtGlobal.innerText = 'Entrou, la ele'
    txtGlobal.style.background = 'red'
}

function sairglobal() {
    txtGlobal.innerText = 'Saio, la ele'
    txtGlobal.style.background = 'green'
}

function clicarglobal(){
    txtGlobal.innerText = 'Clicou'
    txtGlobal.style.background = 'yellow'
    txtGlobal.style.color = 'black'
}


