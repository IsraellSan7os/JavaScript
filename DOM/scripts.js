const selecionandoELementos = () => {
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
}

const manipulandoElementos = () => {
    const guest = document.querySelector("#guest-1")

    // Retorna o conteúdo que esta no html
    console.log(guest.textContent)
    // Altera o conteúdo da spam 
    guest.textContent = "Anne"

    console.log(guest.textContent) //Conteúdo visivel e oculto
    console.log(guest.innerText) // Retorna somente o conteudo visível
    console.log(guest.innerHTML)  //Retorna o Html como texto
}

const alterandoEstilos = () => {
    const input = document.querySelector("#name")

    // Add element of css
    input.classList.add("input-error")

    // remove element of css
    input.classList.remove("input-error")

    //if tha class already exists he remove, If the class doesn't exist, it adds it.
    input.classList.toggle("input-error")

    //Modifying properties css
    const button = document.querySelector("button")
    button.style.backgroundColor = "yellow"
    button.style.color = "black"

    const body = document.querySelector("body")
    body.style.backgroundColor = "#ffff"

}


alterandoEstilos()