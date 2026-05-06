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
