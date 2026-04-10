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
