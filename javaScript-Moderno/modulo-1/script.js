// O strict mode. Ativando esse modo, os erros que agora
//  são silenciosos passam a gerar exeções no java script

function showMessage() {
  "use strict";

  name = "Israel santos";

  console.log("Boa noite", name);
}

// showMessage();

function desetruturando_array() {
  // Desestruturação de array
  console.log("##########Desestruturação de Array#########");
  const date = ["Israel Santos", "israelsanos@gmail.com"];

  const [userName, email] = date;
  console.log("Name:", userName);
  console.log("Email:", email);

  //   Desestruturar somente o primeiro.
  const fruits = ["Banana", "Apple", "Orange"];

  const [banana] = fruits;
  console.log(banana);

  //   Se que quiser pegar o ultimo da lista
  const [, , orange] = fruits;
  console.log("Ultimo item da lista", orange);
}

desetruturando_array();

// Desestruturação de objetos
function desestruturacao_Objetos() {
  console.log("##########Desestruturação de Objeto#########");
  const product = {
    description: "Teclado",
    price: 1120,
    quantility: 20, //
  };

  const { description, price } = product;
  console.log("Descrição", description);
  console.log("Preço: R$", price);
}

desestruturacao_Objetos();

function newProduct({ description, price }) {
  console.log("####Novo Produto");
  console.log("Descrição:", description);
  console.log("Preço: R$", price);
}

newProduct({
  description: "Mause",
  price: 70,
});

function perfume({ description, price, quantility }) {
  console.log("Nome: ", description);
  console.log("Preço", price);
  console.log("Quantidade", quantility);
}

perfume({
  description: "Buticario",
  price: 1255,
  quantility: 30,
});

function operadorRest(a, ...args) {
  console.log(a);
  console.log(...args);
  // Mostra a quantidade do array
  console.log(args.length);
}

operadorRest(2, 1);

// Tambem é muito usado o metodo ...rest
function value(...rest) {
  console.log(rest.length);
  console.log(...rest);
  console.log(rest);
}

value(1, 1, 1, 1);

// spread

function spread() {
  const numbers = [1, 2, 3, 4];
  // Mosta os numeros separados
  console.log(...numbers);

  const user = [
    {
      name: "Israel",
      lastName: "Santos",
      email: "israelsantos@gmail.com",
    },

    {
      name: "Anne",
      lastName: "Santana",
      email: "annesantana@gmail.com",
    },
  ];

  console.log(...user);
}

spread();

// ===============================
// 📚 RESUMO GERAL DO CÓDIGO
// ===============================

// 🔒 STRICT MODE
// "use strict" ativa o modo estrito no JavaScript.
// Evita erros silenciosos e obriga boas práticas.
// Ex: usar variável sem declarar gera erro.

// ===============================
// 📦 DESESTRUTURAÇÃO DE ARRAY
// ===============================
// Permite extrair valores de arrays de forma simples.

const date = ["Israel Santos", "email@email.com"];
const [userName, email] = date;
// userName = "Israel Santos"
// email = "email@email.com"

// Pegar apenas o primeiro item
const fruits = ["Banana", "Apple", "Orange"];
const [banana] = fruits;

// Pegar o último item ignorando os anteriores
const [, , orange] = fruits;

// ===============================
// 🧱 DESESTRUTURAÇÃO DE OBJETO
// ===============================
// Extrai propriedades diretamente do objeto.

const product = {
  description: "Teclado",
  price: 1120,
};

const { description, price } = product;

// ===============================
// 🆕 DESESTRUTURAÇÃO EM FUNÇÃO
// ===============================
// Já recebe o objeto e extrai os dados direto no parâmetro.

function newProduct({ description, price }) {
  console.log(description, price);
}

// ===============================
// 🔢 REST OPERATOR (...)
// ===============================
// Junta vários argumentos em um array.

function operadorRest(a, ...args) {
  // a = primeiro valor
  // args = resto dos valores em array
  console.log(args.length); // quantidade
}

// Exemplo:
// operadorRest(2, 1, 3, 4)
// a = 2
// args = [1, 3, 4]

// ===============================
// 📊 REST COMPLETO
// ===============================

function value(...rest) {
  // rest = todos os argumentos em array
  console.log(rest);
}

// ===============================
// 🚀 SPREAD OPERATOR (...)
// ===============================
// Espalha os valores de um array.

const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

// Também funciona com objetos em array
const users = [{ name: "Israel" }, { name: "Anne" }];
console.log(...users);

// ===============================
// 🧠 DIFERENÇA IMPORTANTE
// ===============================
// REST  → junta valores → vira array
// SPREAD → espalha valores → tira do array
// ===============================
