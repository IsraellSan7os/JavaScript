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
function convertendo_Array_String(){
    
}