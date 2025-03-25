//While ele executa primeiro e depois verifica

var i = 1 

do {
    console.log("Numero " +i)
    i++
} while (i <= 10);


let num = 100

do {
    console.log(num)
    num-=2
}while(num > 1)

var parImpa = 100

//  Nuemros pares e impares
do {
    if (par % 2 == 0) {
        console.log("Numero par " + par)
    } else {
        console.log("Numero impar " + par)  
    }
    par-= 1
} while (par >2);

// So numero pares Numero so pares


var par = 100 

do {
    if (par % 2 == 0) {
        console.log("Numero par " + par)
    } else {
        console.log("Numero impar " + par)
    }

    par -=2
} while (par >1);

// Numero pares e impares

var impar = 1

do {
    if (impar % 3 == 0) {
        console.log("Numero impar " + impar)
    } else {
        console.log("Numero par " + impar)
    }
    impar += 2
} while (impar <=100);

/*Se o número for múltiplo de 3, exiba "Fizz" no console.

Se for múltiplo de 5, exiba "Buzz".

Se for múltiplo de ambos (3 e 5), exiba "FizzBuzz".

Caso contrário, exiba apenas o número.*/ 

var multiplos = 100


do {
    if (multiplos % 3 == 0 && multiplos % 5 == 0) {
        console.log("FizzBuzz" + multiplos)
    } else if(multiplos % 3 == 0){
        console.log('Fizz' + multiplos)
    }else if(multiplos % 5 == 0){
        console.log('Buzz' + multiplos)
    } else {
        console.log("Não multiplos "+multiplos)
    }
    multiplos--
} while (multiplos > 0);