// Seleção de elementos

// Por TagName
var p1 = document.getElementsByTagName('p')[1];
document.write(p1.innerText);
p1.style.color = 'yellow';


// Por ID
const txt = document.getElementById('txtid');
txt.style.color = 'red';
window.alert(txt.innerText);
txt.innerText = 'ID: Eu posso mudar o conteúdo da variável';

// Por classe
let txtCl = document.getElementsByClassName('txtClass');

// Como getElementsByClassName retorna uma coleção de elementos,
// precisamos acessar o primeiro elemento diretamente (índice [0]).
txtCl[0].innerText = 'Não será chamado de "por class", mas sim "por Class"';
document.write(txtCl[0].innerText);

// Por seletor (querySelector)
let txtQ = document.querySelector('#txtQuery');
txtQ.style.color = 'blue';
