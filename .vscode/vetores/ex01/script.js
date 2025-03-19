let contador = 1; // Inicia o contador em 1
const lista = document.getElementById("lista"); // Seleciona a lista
const botao = document.getElementById("adicionar"); // Seleciona o botão

botao.addEventListener("click", function() {
    if (contador <= 100) { // Verifica se o contador está dentro do limite
        const item = document.createElement("li"); // Cria um novo item de lista
        item.textContent = `Número ${contador}`; // Define o texto do item
        lista.appendChild(item); // Adiciona o item à lista
        contador++; // Incrementa o contador
    } else {
        alert("Todos os números de 1 a 100 foram adicionados!"); // Alerta quando atingir 100
    }
});