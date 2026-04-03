/* Objeto
    - Uma coleção de dados e/ou funcionalidades;
    - Podem ter propriedades e métodos;
*/

// Criando objeto vazio
const obj = {};
console.log(obj);

//Criando um objeto com propriedade e métodos.
const user = {
  email: "ysraellsanoss@gmai.com",
  age: "26",
  name: {
    first_name: "Israel",
    last_name: "Custodio",
  },
  address: {
    street: "Rua x",
    number: 2105,
    city: "São paulo",
    postal_code: "12345-123",
  },

  message: function () {
    console.log("Ola mundo");
  },
};

// Acessando propriedaddes e métodos usando a notação de ponto
console.log(user.email);
console.log(user.address);
console.log(user.name.first_name);

// Executando o metodo do objeto
user.message();

const valores = {
  num1: 2,
  num2: 4,
  nome: "Israel",
  esposa: "Anne cleide",

  mensagemSoma: function () {
    console.log(this.num1 + this.num2, `Ola ${this.nome}`);
    console.log(`Ola ${this.esposa}`);

    console.log(valores.nome);

    return this.mensagemSoma;
  },
};

valores.mensagemSoma();

const product = {
  name: "teclado",
  quality: 100,
};

console.log(product.name);
// Atualizado o valor de uma propriedade
product.quality = 99;
console.log(product.quality);

// Podemos alterar tambem o nome
console.log(product.name);
product.name = "Mause";
console.log(product.name);

product["quality"] = 50;
console.log(product);
