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
