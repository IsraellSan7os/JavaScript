const selecionandoELementos = () => {
  // Como visualizar os comtéudos do document.

  console.log(document);

  // Como viaualizar o título da página.
  console.log(document.title);

  // Como assesar os elementos pelo ID.
  const guest = document.getElementById("guest-2");
  console.log(guest);

  // Como ver as propriedade do objeto

  const guest1 = document.getElementById("guest-1");
  console.dir(guest1);

  // Acessa o elemento pelo className
  const guestsByClass = document.getElementsByClassName("guest");
  console.log(guestsByClass);

  // Como exibir o elemento espesifico da lista selecionada.
  // A posição começa do 0.
  console.log(guestsByClass[0]);
  console.log(guestsByClass.item(1));

  // Acessa o elemento pelo nome da tag.
  const guestsByTag = document.getElementsByTagName("li");
  console.log(guestsByTag);

  // Acessa o elemento pelo querySelector (seleciona o primeiro elemento que encontrar).
  // So pega o primeiro elemento que encontrar.
  const firstGuest = document.querySelector(".guest");
  console.log("Query", firstGuest);

  const firstGuestById = document.querySelector("#guest-1");
  console.log("Query by ID", firstGuestById);

  // Como faz pra retornar todos os elementos, com o querySelectorAll.
  const allGuests = document.querySelectorAll(".guest");
  console.log("All Guests", allGuests);
};

const manipulandoElementos = () => {
  const guest = document.querySelector("#guest-1");

  // Retorna o conteúdo que esta no html
  console.log(guest.textContent);
  // Altera o conteúdo da spam
  guest.textContent = "Anne";

  console.log(guest.textContent); //Conteúdo visivel e oculto
  console.log(guest.innerText); // Retorna somente o conteudo visível
  console.log(guest.innerHTML); //Retorna o Html como texto
};

const alterandoEstilos = () => {
  const input = document.querySelector("#name");

  // Add element of css
  input.classList.add("input-error");

  // remove element of css
  input.classList.remove("input-error");

  //if tha class already exists he remove, If the class doesn't exist, it adds it.
  input.classList.toggle("input-error");

  //Modifying properties css
  const button = document.querySelector("button");
  button.style.backgroundColor = "yellow";
  button.style.color = "black";

  const body = document.querySelector("body");
  body.style.backgroundColor = "#ffff";
};

const criandoElementos = () => {
  const guest = document.querySelector("ul");

  const newGuest = document.createElement("li");
  newGuest.classList.add("guest");
  const guestName = document.createElement("span");

  guestName.textContent = "Anne";

  //  Append prepend toFixed
  newGuest.append(guestName);
  guest.append(newGuest);
  console.log(newGuest);
};

const manipulandoAtributos = () => {
  const input = document.querySelector("input");

  // Atualizar um atributo

  input.setAttribute("disabled", true);

  // Posso manipular os atributos, modificar os types
  input.setAttribute("type", "checkbox");
};

const event = () => {
  window.addEventListener("load", () => {
    console.log("The page has been recharged");
  });

  // tem varios tipos de eventos
  // Tipos diferente de eventos cada um com sua pecurialidade
  window.addEventListener("click", (e) => {
    e.preventDefault();

    //
    console.log(e);
  });
};

const eventosDeFormulario = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Você fez um submit");
  });
};

const eventosDeInput = function () {
  const input = document.querySelector("input");
  // Keydown, quando atecla é pressionada  (Captura tudo incluindo CTRL, SHIFT, etc)
  input.addEventListener("keydown", (event) => {
    // event.preventDefault()
    // console.log(event)
  });

  // Keypress - quando uma tecla do tipo caractere é precionada (Letras, números, ponto, etc)
  input.addEventListener("keypress", (event) => {
    console.log(event.key);
  });

  // onchange

  input.onchange = () => {
    console.log("Saio do input");
  };
};

function valoresInput() {
  //regexTest()
  // eventSubmit()

  verificacao();

  function regexTest() {
    const input = document.querySelector("input");

    input.addEventListener("input", (event) => {
      const value = input.value; //Valor do input
      const regex = /\D+/g; //Regex retorna o padrão encontrado pela string

      // O método match() em JavaScript serve para procurar padrões (regex)
      //  dentro de uma string. Ele retorna o que foi encontrado na string
      //  de acordo com a expressão regular.

      //console.log(value.match(regex))

      // TEST ele so testa se os valores estão sendo passados corretos
      const isValid = regex.test(value);
      //  console.log(isValid)
    });
  }

  function eventSubmit() {
    const form = document.querySelector("form");
    const input = document.querySelector("input");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const regexNumero = /\D+/g;
      const regexLetras = /[^A-Za-z]/g;

      const value = input.value.replace(regexNumero, "");
      const letra = input.value.replace(regexLetras, "");

      console.log(value);
      console.log(letra);
    });
  }

  function verificacao() {
    let form = document.querySelector("form");
    let input = document.querySelector("input");
    let ul = document.querySelector("ul");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let value = input.value;
      let regex = /[^A-Za-z]/g;
      const isValid = value.replace(regex, "");

      if (regex.test(isValid)) {
        window.alert("Valor invalido");
      } else {
        window.alert("Valor iserido com sucesso");
      }

      let li = document.createElement("li");
      let span = document.createElement("span");

      li.classList.add("guest");

      li.textContent = isValid;
      li.append(span);
      ul.append(li);
    });
  }
}

valoresInput();
