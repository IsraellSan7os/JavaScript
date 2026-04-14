function criando_array() {
  // Craindo um array com construtor
  const newArray = new Array();
  console.log(newArray.length); //Retona o tamanho do array
  console.log(newArray[0]);

  // Cria um Array com 10 posiçoes
  const available = new Array(10);
  console.log(available);
  console.log(available.length);

  const fruist = new Array("Apple", "Banana", "Orange", "Watermelon");
  console.log(`0:${fruist[0]}`);
  console.log(`1:${fruist[1]}`);
  console.log(`2:${fruist[2]}`);
  console.log(`3:${fruist[3]}`);
}
criando_array();

// Convertendo uma string para array
function convertendo_Array_String() {
  let fullName = "Israel custodio dos santos";

  // cria um Array com os nome sepárados pelo espaço
  // Atenção So funciona se dentro do split entre as aspas estiverem separadas
  console.log(fullName.split(" "));

  // Cria um Array com as letras
  console.log(Array.from(fullName));
}

convertendo_Array_String();

// Adicionando e removendo um item do array

function adicionando_removendo() {
  const user = [];

  // Adicionando item no final do Array.
  user.push("Rodrigo");
  user.push("Israel");
  user.push("Anne");
  user.push("Ellen");

  console.log(user);

  // Adicionando um item no início do Array.
  user.unshift("Isadora");
  console.log(user);

  // Remove do inicio do Array
  user.shift();
  console.log(`Remove do início do Array ${user}`);

  // Remove do final do Array
  user.pop();
  console.log(`Remove do final do Array ${user}`);
}
adicionando_removendo();

// Usando o índice
function Usando_Indice() {
  const fruist = new Array(
    "Apple",
    "Banana",
    "Grape",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Mango",
    "Peach",
    "Cherry",
    "Watermelon",
    "Pear",
    "Kiwi",
    "Papaya",
    "Plum",
    "Apricot",
    "Lemon",
    "Coconut",
  );

  let position = fruist.indexOf("Peach");
  console.log("Posição ", position);

  fruist.splice(position, 7);
  console.log(fruist.includes("Peach"));

  // Adiciona no final
  fruist.push("Peach");
  console.log(fruist);
  // Adiciona do Início
  fruist.unshift("Avocado");
  console.log(fruist);
}
Usando_Indice();

// Quais elementos o array aceita

function elementos_Array(){
  let myArray = [
    "Um texto",
    10,
    true,
    function(){
      console.log("Função dentro do Array")
    },
    {
      name: "Israel",
      email: "ysraellsanos@gamil.com"
    }
  ]
  console.log(my)
}


elementos_Array()