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
  vat.acao.latir();

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

const heranca_class_ex = () => {
  class Celular {
    constructor(tela, processador, memoria, camera, bateria) {
      this.tela = tela;
      this.processador = processador;
      this.memoria = memoria;
      this.camera = camera;
      this.bateria = bateria;
    }
    showMessage() {
      const date = new Date();
      const formatDate = date.toLocaleDateString("pt-BR");
      console.log(` LOJÁ XIAOME`, formatDate);
    }
  }

  const main = new Celular();
  main.showMessage();

  class xiaome_17Info extends Celular {
    constructor(tela, processador, memoria, camera, bateria, price) {
      super(tela, processador, memoria, camera, bateria);

      this.price = price;
    }

    ShowPrice() {
      let price = 1200;
      let formatAmout = price.toLocaleString("pt-Br", {
        style: "currency",
        currency: "BRL",
      });
      console.log("Preço", formatAmout);
    }

    showMessageXiaome_17() {
      console.log("1. Xiaomi 17 (O Compacto Premium)");
      console.log(
        `
      Tela: ${this.tela}
      Processador: ${this.processador}
      Memória: ${this.memoria}
      Camera: ${this.camera}
      Bateria: ${this.bateria}
    `,
      );
    }
  }

  const xiaome17 = new xiaome_17Info(
    "6.28'' AMOLED",
    "Snapdragon 8 Gen 2",
    "12GB RAM",
    "50MP",
    "4500mAh",
  );
  xiaome17.showMessageXiaome_17();
  xiaome17.ShowPrice();

  class Xiaomi_17Pro extends Celular {
    constructor(tela, processador, memoria, camera, bateria, price) {
      super(tela, processador, memoria, camera, bateria);
    }

    ShowPrice() {
      let price = 1570.45;
      let formatAmout = price.toLocaleString("pt-Br", {
        style: "currency",
        currency: "BRL",
      });
      console.log("Preço", formatAmout);
    }

    showMessageXiaome_17() {
      console.log("1. Xiaomi 17 (O Compacto Premium)");
      console.log(
        `
      Tela: ${this.tela}
      Processador: ${this.processador}
      Memória: ${this.memoria}
      Camera: ${this.camera}
      Bateria: ${this.bateria}
    `,
      );
    }
  }

  const xiaomi17Pro = new Xiaomi_17Pro(
    "6.73'' AMOLED 120Hz",
    "Snapdragon 8 Gen 2",
    "16GB RAM",
    "108MP",
    "5000mAh",
  );
  xiaomi17Pro.showMessageXiaome_17();
  xiaomi17Pro.ShowPrice();

  class Xiaomi_17Ultra extends Celular {
    constructor(
      tela,
      processador,
      memoria,
      camera,
      bateria,
      resistenciaAgua,
      carregamento,
      price,
    ) {
      super(tela, processador, memoria, camera, bateria);
      this.resistenciaAgua = resistenciaAgua;
      this.carregamento = carregamento;
      this.price = this.price;
    }

    ShowPrice() {
      let price = 1999.99;
      let formatAmout = price.toLocaleString("pt-Br", {
        style: "currency",
        currency: "BRL",
      });
      console.log("Preço", formatAmout);
    }

    showMessageXiaomi_17Ultra() {
      console.log("2. Xiaomi 17 Ultra (O Topo de Linha)");
      console.log(`
      Tela: ${this.tela}
      Processador: ${this.processador}
      Memória: ${this.memoria}
      Câmera: ${this.camera}
      Bateria: ${this.bateria}
      Resistência à água: ${this.resistenciaAgua}
      Carregamento: ${this.carregamento}
    `);
    }
  }

  // Instanciando Xiaomi_17Ultra e exibindo informações do aparelho
  const xiaomi17Ultra = new Xiaomi_17Ultra(
    "6.81'' AMOLED 144Hz",
    "Snapdragon 8 Gen 3",
    "24GB RAM",
    "200MP + 50MP + 50MP",
    "5500mAh",
    "IP68",
    "120W Turbo Charge",
  );
  xiaomi17Ultra.showMessageXiaomi_17Ultra();
  xiaomi17Ultra.ShowPrice();
};

// Aprendendo sobre herança e cadeia de protótipos

adicionando_metodos_nas_classes();
estatico();
heranca_class();
heranca_class_ex();
