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
} while (par > 1);

// So numero pares Numero so pares


var par = 100 
do {
    if (par % 2 == 0) {
        console.log("Numero par " + par)
    } else {
        console.log("Numero impar " + par)
    }

    par +=2
} while (par >1);
