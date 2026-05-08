// Metodo map()

const map = function () {
  /*
    percorrer um array E retornar um novo array transformado
    Muito utilizado em 

    🔹 React
    - Renderizar listas na tela.

    🔹 APIs
    - Formatar dados recebidos do backend.
    */
  const products = ["Teclado", "Mouse", "Monitor"];

  //  percorrendo os itens do Array
  products.map((item) => {
    console.log(item);
  });

  // Sintaxe reduzida.
  products.map((produtos) => console.log(produtos));

  // tilizando o novo objeto retornado.
  const formatted = products.map(function (item) {
    // return item.toUpperCase()

    return {
      id: Math.random(),
      description: products,
    };
  });

  console.log(formatted);
};

// Metodo filter()

const filter = function () {
  //  O filter() serve para FILTRAR elementos
  // de um array com base em uma condição.

  const words = ["javascript", "html", "css", "web"];

  //   Filtrando palavras que tenham mais do que 3 letras
  const result = words.filter((word) => word.length > 3);
  console.log(result);

  const res = words.filter((item) => item.length <= 3);
  console.log(res);

  const i = words.filter((it) => it.includes("html"));
  console.log(i);

  const products = [
    {
      description: "teclado",
      price: 150,
      promotion: true,
    },

    {
      description: "Mouse",
      price: 70,
      promotion: false,
    },
    {
      description: "Monitor",
      price: 1000,
      promotion: true,
    },
  ];

  const promotion = products.filter((item) => item.promotion === true);
  console.log(promotion);
};

const fild = function () {
  //  find() em JavaScript, que retorna o primeiro
  //  elemento de um array que satisfaz uma condição.
  const values = [5, 12, 130, 44];

  // retorna o primeiro elemento que valor é maior que 10.
  const found = values.find((value) => value > 10);
  console.log(found);

  // Exemplo com objetos
  const frutis = [
    { name: "apples", quantily: 51 },
    { name: "bananas", quantily: 25 },
    { name: "orange", quantily: 53 },
  ];

  const result = frutis.find((frut) => frut.name === "bananas");
  console.log("Fruta que seja o nome banana", result);

  const res = frutis.filter((fruts) => fruts.quantily >= 50);
  console.log("Maior que 50", res);

  values.map((i) => {
    console.log(i);
    // Retorna a primeiro elemsnto que sejá verdairo
  });
};
// O metodo every testa se todas os elementos do array passam na condição
// e retorna um valor Boolean.
const every = function () {

  // Aqui ele vai restorna falso pois tem um valor menor que 18
  const ages = [15, 30, 39, 29];
  const result = ages.every((age) => age >= 18);
  console.log(result);

  const fruts = ["Abacaxi", "Abacaxi", "Abacaxi", "Abacaxi"]
  const i = fruts.every((f)=> f.includes("Abacaxi"))
  console.log(i)
};
map();
filter();
fild();
every();
