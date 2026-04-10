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
