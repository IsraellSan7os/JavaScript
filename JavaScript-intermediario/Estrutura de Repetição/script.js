// Loop while => Executa até que a condição sejá verdadeira.

function while_estudos() {
  let execute = true;

  while (execute === true) {
    let response = window.prompt("Digite um pra verda");

    if (response === "2") {
      execute = false;
    }
  }
}
//Exercícios
function exercicios() {
  // Mostre os números de 1 até 10 usando while.
  console.log(
    "1. Contador simples Mostre os números de 1 até 10 usando while.",
  );
  let num1 = 1;
  while (num1 <= 10) {
    console.log("Numero:", num1);
    num1++;
  }
  console.log("2. Contagem regressiva Mostre os números de 10 até 1.");

  let num2 = 10;
  while (num2 > 1) {
    console.log("Numero:", num2);
    num2--;
  }
  console.log(
    "3. Mostrar números pares Mostre todos os números pares de 0 até 20.",
  );

  let pares = 20;
  while (pares >= 1) {
    if (pares % 2 == 0) {
      console.log("Numeros pares.", pares);
    }
    pares--;
  }
  console.log("Some todos os números de 1 até 100 e mostre o resultado final.");

  let numero = 1;
  let soma = 0;
  while (numero <= 100) {
    soma = soma + numero;
    numero++;
  }
  console.log("Soma", soma);

  console.log("Peça um número e mostre a tabuada dele de 1 a 10.");

  let tabuada = 1;
  let numTabuada = 2;

  while (tabuada < 10) {
    let res = numTabuada * tabuada;
    console.log(`${numTabuada} X ${tabuada} = ${res}`);
    tabuada++;
  }
}
exercicios();
console.log("Faça um código que mostre TODAS as tabuadas de 1 até 5");
let i = 1;

while (i <= 5) {
  let ta = 1;

  while (ta <= 10) {
    let resultado = i * ta;
    console.log(`${i} x ${ta} = ${resultado}`);
    ta++;
  }

  console.log("-------------");

  i++;
}
