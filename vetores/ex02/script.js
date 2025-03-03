
var numeros = [0, 9, 8, 6, 4, 3, 2, 21, 1, 4, 56, 63, 23,]
console.log(numeros)
// Vetores

const encontra = numeros.indexOf(3)
console.log(`O numero esta na posição ${encontra}`)


var num = [3,4,5,6,7,8,9,10,56]
console.log(num)


// Fomorma mais curota de usar for 
for(let pos in numeros){
   console.log(` na posição ${pos} temos o numero ${numeros[pos]}`)
}


 

num[9]=5
num.push(12)
console.log(" O meu vetor tem "+ num.length+" Posições")
console.log(`Posso selecionar os numero na posição que eu quise, POSIÇÃO ${num[10]} `)

console.log(`Ordem: ${num.join(', ')}`)
num.sort((a, b) => a - b)
console.log("Orden "+ num)


 for (pos = 0; pos < num.length; pos++) {
  console.log(" AQUI "+ num[pos])
    
 }





console.log(" Tamanho do meu vetor " + numeros.length)
console.log("Na posição 5 temos o numero =  " + numeros[5])


while (pos < numeros.length) {
   console.log(` na posição ${pos} temos o numero ${numeros[pos]}`)
   pos++
}


do {
   numeros.sort((a, b) => a - b)
   console.log(` na posição ${pos} temos o numero ${numeros[pos]}`)
   pos++
} while (pos < numeros.length);


