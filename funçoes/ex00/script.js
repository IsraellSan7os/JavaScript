
let res = parImpar(5)
console.log(res)

function parImpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'ímpar!'
    }

}

let sult = soma(30, 100)
console.log("Soma do numero mais a divisão e " + sult)

function soma(n1=0, n2=0) {
    return (n1 + n2) / 2
}



