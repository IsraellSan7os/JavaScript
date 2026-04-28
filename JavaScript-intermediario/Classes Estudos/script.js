/*
    Classes são uma forma de criar objetos e definir comportamentos usando 
    construtores e métodos. Elas oferecem uma sintaxe mais amigável para criar 
    objetos e herdar protótipos, conhecida como "syntax sugar". As classes têm
    construtores e métodos, permitindo a criação de modelos para objetos. Além 
    disso, as classes possibilitam a herança de propriedades e métodos de outras
    classes,promovendo a reutilização de código.
*/
class Person {
  constructor(name, lastName) {
    console.log(`Olá ${name} ${lastName}`);
  }
}

const person = new Person("israel", "santos");

class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  sendEmail() {
    console.log(`Enviando de ${this.name} com o sobre-nome ${this.lastName}`);
  }
}

const name1 = new User("Israel", "Custodio");
name1.sendEmail();

const adicionando_metodos_nas_classes = () => {
  class Product {
    constructor(name, quantity, price) {
      this.name = name;
      this.quantity = Number(quantity);
      this.price = Number(price);
    }

    detail() {
      console.log(
        `Nome: ${this.name} Quatidade: ${this.quantity} Preço: ${this.price}`,
      );
      const date = new Date();
      let format = date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
      console.log(format);
    }
  }

  const teclado = new Product("Teclado", 0, 1250);
  if (teclado.quantity === 0) {
    console.log("Não tem produto");
  } else {
    teclado.detail();
  }

  const mouse = new Product("Mouse", 10, 500);
  if (mouse.quantity === 0) {
    console.log("Ah, não temos estoque");
  } else {
    mouse.detail();
  }
};

const estatico = function () {
  // Neste caso podemos usar sem instancioar a classe
  class User {
    static showMessage() {
      console.log("Essa mensagem é uma meansagem");
    }
  }

  User.showMessage();
};

const heranca_class = () => {
  class Animal {
    constructor(name) {
      this.name = name;
    }
    showMessage() {
      console.log("Algum som genérico de animal", this.name);
    }
  }

  class Dog extends Animal {
    // Sobrescrevedo métodos
    acao = {
      latir: () => console.log("Woof! Woof!"),
      correr: () => console.log("Correndo"),
      babando: () => console.log("Babando"),
      dormindo() {
        console.log("Dormindo");
      },
    };
  }

  const pastor_Alemao = new Animal("Pastor Alemão");
  pastor_Alemao.showMessage();
  const vat = new Dog();
  vat.acao.babando();

  class cat extends Animal {
    acao = {
      mia: () => console.log("Woof! Woof!"),
      correr: () => console.log("Correndo"),
      escalar: () => console.log("Babando"),
      dormindo() {
        console.log("Dormindo");
      },
    };
    run() {
      console.log("Correndo");
    }
  }
  const viralata = new cat("viralata");
  viralata.showMessage();
  viralata.acao.mia();
  viralata.run();
};

adicionando_metodos_nas_classes();
estatico();
heranca_class();

