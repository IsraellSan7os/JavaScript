function maisculoEminusculo() {
  let message = "Estou estudando as funcdamentos de javaScript";

  // Exibindo tudo em maiúscula
  console.log(message.toUpperCase());

  //   Exibindo tudo em minúscula
  console.log(message.toLocaleLowerCase());
}
maisculoEminusculo();

// Comprimento da String
function ObtendoComprimentString() {
  let message = "Estou estudando os funcamentos do javaScript";
  console.log("O tamanho do comprimento é ", message.length, "Letras");

  let password = "123456";
  if (password.length < 7) {
    console.log("A senha precisa ter no minimo 7 caracteres");
  } else {
    console.log("Senha valida!!");
  }

  // Quantos digitos tem um número
  let value = 12345;
  let cover = String(value).length;
  console.log(String(value).length);
  console.log(cover);
}

ObtendoComprimentString();

function SubstituindoFatiandoTexto() {
  let message = "Estou estudando os funcamentos do javaScript";
  // Substituindo partes de um texto.
  console.log(message.replace("javaScript", "html"));

  // Extraindo uma parte da string (start, end)
  console.log(message.slice(6, 30));

  // Extraindo uma parte da sting de trá pra frente
  console.log(message.slice(-11));

  console.log("*******************************************");

  // Remove os espaçoes
  let texWithSpace = "          Texto de exemplo           ";
  console.log("Tamanho ", texWithSpace.length);
  let remove = texWithSpace.trim();
  console.log("Sem os espaços", remove.length);
}

SubstituindoFatiandoTexto();

function completandoUmaString() {
  const crediCard = "12345678910111213141516";
  console.log(crediCard);

  // Ultimos 4 numero
  let lasDigits = crediCard.slice(-4);
  console.log(lasDigits);

  // padStar preeche a string do início.
  const res = lasDigits.padStart(crediCard.length, "x");
  console.log(res);

  // padSEnd preeche a string do final.
  let number = "123425";
  console.log(number.padEnd(11, "#"));
}

completandoUmaString();

// Separando
function separandoUnindoStrings() {
  let text = "Estudar,aprender,praticar";
  console.log(text);

  let separete = text.split(",");
  console.log(separete);

  let joined = separete.join(" - ");
  console.log(joined);

  let cep = "15520,000 000,000";
  console.log(cep);
  let r = cep.split(",");
  let i = r.join(" - ");
  console.log(i);

  console.log("************************************");
}

separandoUnindoStrings();
function cartao() {
  let user = {
    name: "Isrel",
    lastName: "Santos",
  };
  let number = {
    numero: "12334,12345",
    date: 20 / 30,
    cvc: 230,
  };

  console.log(`Nome: ${user.name}`);
  console.log(`Sobrenome: ${user.lastName}`);
  let j = user.name + user.lastName;
  console.log(j);

  let num = number.numero;
  let r = num.split(",");
  let join = r.join(" - ");
  console.log(join);
  let restt = join.padEnd(15, "#");

  console.log(`Cartão:`, restt);
}
cartao();

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

function encontrandoConteúdoTexto() {
  let message = "Estou estudando os fundamentos do javaScript";

  // Óbtendo a posição da palavra
  // Caso a palavra não sejá encontrada ele retorna -1
  var res = message.indexOf("fundamentos");
  console.log(`A palavra [estudando enta na posição ${res}]`);


  // verificação se existe a palavra na string
  // Se a palava existe, retorna true, caso o contrario retorna false
  // Lembrando que o js é case sensitive
  console.log(message.includes("Estou"))
  console.log(message.includes("javaScript"))
}

encontrandoConteúdoTexto();
