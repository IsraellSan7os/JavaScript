const addres1 = {
  street: "Ave . Brsil",
  number: 20,
};
//Isso não é uma copia. É uma Referencia
const addres2 = addres1;
addres2.number = 30;
console.log(addres1, addres2);

// No console
/*{street: 'Ave . Brsil', number: 30}
{street: 'Ave . Brsil', number: 30} */

// Objeto
const street = {
  rua: "Avenida Brasil",
  numero: 123,
};

const i = { ...street };
i.numero = 40;
console.log(i, street);

// Array com imutabilidade

const list1 = ["aplle", "Banana"];
const list2 = [...list1];
list1.push("goiaba");
list2.push("watermelon", "goiaba");

console.log(list1, list2);

function ex() {
  // Objeto imutabilidade

  const objeto = function () {
    const carros = {
      motor: {
        potencia: 3.0,
        tubina: 1,
        radiador: 1,
        name: "TSI 200",
      },
      cor: {
        bancos: "Branco",
        cor_Carro: "Preto",
      },
    };

    const carro2 = { ...carros };
    carro2.motor = "4.0";

    console.log(carros, carro2);
  };

  // Array imutabilidade
  const array = function () {
    const fruits = ["Banana", "watermelon", "melon", "avocado", "gauva"];
    const addFruts = [...fruits]; // ✅ Cria um array
    addFruts.push("Tomato"); // ✅ Adiciona o primeiro
    addFruts.push("strawberry"); // ✅ Adiciona o segundo

    console.log(fruits, addFruts);
  };

  objeto();
  array();
}

ex();

const deepCopy = function () {
  // Shoallow copy (capia superficial)  não os itens aninhados

  const htmlCursor = {
    corse: "HTML",
    students: [{ name: "Israel", email: "ysrael@gmail.com" }],
  };

  const jsCurse = {
    ...htmlCursor,
    couse: "JavaScript",
  };

  /*
  Quando fazemos desse jeito ele vai adcionar tanto
  no html quando no de js, Mais não é isso que eu quero
  
  */
  jsCurse.students.push({ name: "Anne", email: "anne@gmail.com" });
  console.log(htmlCursor, jsCurse);

  function cursos() {
    const html = {
      curso: "HTML",
      aulas: 30,
      students: [],
    };

    const javaScript = {
      curso: "JavaScript",

      aulas: {
        javaScript_moderno: {
          aula_1: "Boas-vindas",
          aula_2: "Conhecendo o ECMAScript",
        },
      },

      students: {
        name: [],
        lastName: [],
        age: [],
      },
    };

    // Deep Copy
    const inscritos = structuredClone(javaScript);

    inscritos.students.name.push("Israel");
    inscritos.students.lastName.push("Custódio");
    inscritos.students.age.push(26);

    console.log("Original:");
    console.log(javaScript);

    console.log("Cópia:");
    console.log(inscritos);
  }

  cursos();
};
// deepCopy();

const htmlCurse = {
  curso: "HTML",
  students: [{ name: "Israel", email: "ysrael@gmail.com" }],
};

const jsCouse = {
  ...htmlCurse,
  couse: "JavaScript",
  students: [...htmlCurse.students],
};

jsCouse.students.push({ name: "Anne", email: "anne@gmail.com" });

console.log(htmlCurse, jsCouse);

const animal = {
  reptil: {
    rasteja: "Cobra",
    rasteja: "lagarto",
  },

  cavalo: {
    jumento: "Jumento",
    cavalo: "Cavalo",
  },

  veterinaria: [
    {
      name: "Anne",
      lastName: "Santana",
      email: "anne@gmail.com",
    },
  ],
};

const stautus = {
  ...animal,
  modulo_1: {
    title: "HTML Básico",
    lessons: ["Tags", "Estrutura HTML", "Formulários"],
  },

  module_2: {
    title: "HTML Intermediário",

    lessons: ["Semântica", "SEO", "Acessibilidade"],
  },

  veterinaria: [...animal.veterinaria],
};

stautus.veterinaria.push(
  {
    name: "Israel",
    lastName: "santos",
    emial: "ysrael@gmail.com",
  }
);

console.log(animal, stautus);
