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
}
exercicios();

/*
Do while -> repete até que a condição especificada seja VERDADEIRA.
  No entanto, a instrução será executada pelo menos uma vez antes da
  condição ser cerificada 
*/
console.log("-------------");
function do_While() {
  let value = 0;
  do {
    value++;
    console.log(`Numero: ${value}`);
  } while (value <= 11);
}
do_While();

// For repete até que a condição especifica seja falsa.

// for (step = 0; step <= 10; step++) {
//   console.log("Step", step);
// }

console.log("------------");
var forEX = function () {
  for (i = 0; i <= 10; i++) {
    console.log(`Numero: ${i}`);
  }

  let num = 7;
  for (tab = 0; tab <= 10; tab++) {
    let res = tab * num;
    console.log(`${num} X ${tab} = ${res}`);
  }
};
forEX();

// For in
function for_in() {
  // Objeto
  let person = {
    name: "Israel",
    surname: "Santos",
    emial: "ysraelsantos@gmail.com",
  };

  for (let index in person) {
    console.log(person);
    console.log(person[index]);
  }
  console.log("-----##############-----");
  // Array
  let students = ["Anne", "João", "Helena", "Dani"];
  for (index in students) {
    console.log(index);
    console.log(students[index]);
    index++;
  }
}

for_in();

// For of

let students = ["Anne", "João", "Helena", "Dani"];
for (index of students) {
  console.log(index);
}

// for...in → percorre os ÍNDICES (ou chaves)
// mais usado em objetos ou quando precisa da posição

// for...of → percorre os VALORES direto
// mais usado em arrays (mais simples e comum)

// Breack

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log("Breack", i);
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log("Continui", i);
}

/*
=== Estruturas de Repetição em JavaScript ===

while      -> executa enquanto a condição for verdadeira
do while   -> executa pelo menos uma vez antes de verificar a condição
for        -> loop com início, condição e incremento definidos na mesma linha
for in     -> percorre os índices (chaves) de arrays ou propriedades de objetos
for of     -> percorre os valores de arrays ou iteráveis

break      -> interrompe totalmente o loop
continue   -> pula a iteração atual e continua o loop
*/
