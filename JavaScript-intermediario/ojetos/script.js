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
user.message()