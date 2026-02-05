// Como visualizar os comtéudos do document.

console.log(document)

// Como viaualizar o título da página.
console.log(document.title)

// Como assesar os elementos pelo ID.
const guest = document.getElementById("guest-2")
console.log(guest)

// Como ver as propriedade do objeto

const guest1 = document.getElementById("guest-1")
console.dir(guest1)

// Acessa o elemento pelo className
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Como exibir o elemento espesifico da lista selecionada.
// A posição começa do 0.
console.log(guestsByClass[0])
console.log(guestsByClass.item(1))

// Acessa o elemento pelo nome da tag.
const guestsByTag = document.getElementsByTagName("li")
console.log(guestsByTag)


// Acessa o elemento pelo querySelector (seleciona o primeiro elemento que encontrar).
// So pega o primeiro elemento que encontrar.
const firstGuest = document.querySelector(".guest")
console.log("Query", firstGuest)

const firstGuestById = document.querySelector("#guest-1")
console.log("Query by ID", firstGuestById)

// Como faz pra retornar todos os elementos, com o querySelectorAll.
const allGuests = document.querySelectorAll(".guest")
console.log("All Guests", allGuests)