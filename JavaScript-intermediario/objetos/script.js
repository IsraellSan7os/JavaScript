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

product["anne"] = 97;
console.log(product);

/*Nesta aula, aprenderemos o conceito de Optional Chaining no JavaScript,
  um recurso útil para acessar propriedades de objetos de forma segura,
   evitando erros caso a propriedade não exista. Veremos na prática como
   utilizar o Optional Chaining para acessar propriedades e métodos de
    objetos de forma condicional, garantindo que não ocorram exceções
     caso a propriedade não exista. Este recurso é especialmente útil
      ao lidar com objetos que possuem propriedades opcionais.s */

function Optional_Chaining() {
  let user = {
    id: 1,
    name: "Israel",
    last_name: "Santos",
    // address: {
    //   street: "Cidadão jão novais",
    //   city: "São Paulo",
    //   geo: {
    //     latitude: 15.3455,
    //     longitude: 17.123,
    //   },
    // },

    message: function () {
      console.log("Propriedade do usuário", this.user.id);
    },
  };

  console.log("-----------------------------------------");
  console.log("Nome:", user.name);
  console.log("Sobrenome:", user.last_name);
  // console.log("Endereço:", user.address.street);
  // console.log("Cidade:", user.address.city);
  console.log("Endereço completo", user?.address?.street);
}

Optional_Chaining();
// Operador ?? (Coalescência Nula)
// Retorna o valor da direita quando o da esquerda for null ou undefined
// Muito usado pra definir valores padrão sem afetar 0, false ou ""
function OperadorDe_Coalescência_Nula() {
  let content = undefined;
  console.log(content ?? "Conteúdo padrão");

  const user = {
    name: "Israel",
    avatar: "Foto do avatar",
  };

  console.log(user.avatar ?? "default.png");
  console.log(user.name);
}
console.log("-----------------------------------------");

OperadorDe_Coalescência_Nula();

function função_construtora() {
  function creatProduct(name, amount, price) {
    const product = {};

    product.name = name;
    product.amount = amount;
    product.price = price;

    product.details = function () {
      console.log(`Nome: ${this.name}`);
      console.log(`Quantidade: ${this.amount}`);
      console.log(`Preço: ${this.price}`);
    };

    return product;
  }

  return creatProduct;
}
console.log("-----------------------------------------");

const Product = função_construtora();

const product1 = new Product("Motor", 500, "R$ 5.100 ");
console.log(
  `Prça: ${product1.name} | Quantidade: ${product1.amount} | peças Preço: ${product1.price} `,
);

const product2 = new Product("Volante", 1000, "R$ 2.000");
console.log(
  `Prça: ${product2.name} | Quantidade: ${product2.amount} | peças Preço: ${product2.price} `,
);

function createMaterial(cimento, area, brita, pedra) {
  const produtos = {};
  produtos.cimento = cimento;
  produtos.area = area;
  produtos.brita = brita;
  produtos.pedra = pedra;

  produtos.detailss = function () {
    console.log(`Cimento: ${this.cimento}`);
    console.log(`Areia: ${this.area}`);
    console.log(`Brita: ${this.brita}`);
    console.log(`Pedra: ${this.pedra}`);
  };

  return produtos;
}
console.log("-----------------------------------------");

let material1 = new createMaterial(
  "1 Saco",
  "1 Metro de areia",
  "1 Metro de bitra",
  "1 Metro de Pedra",
);
console.log(material1.cimento);
material1.detailss();

function pecas_celular() {
  function creatProduct(tela, bateria, botao, processador) {
    const product = {};

    product.tela = tela;
    product.bateria = bateria;
    product.botao = botao;
    product.processador = processador;

    product.details = function () {
      console.log(`Tela: ${this.tela}`);
      console.log(`Bateria: ${this.bateria}`);
      console.log(`Botão: ${this.botao}`);
      console.log(`Processador: ${this.processador}`);
    };

    return product;
  }

  return creatProduct; 
}

console.log("-----------------------------------------");

const pro = pecas_celular();
const cel1 = pro("100", "200", "400", "500"); 

cel1.details();
