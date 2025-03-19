const myFunc = callback => {
    const value = 100

    callback(value)

}

myFunc(number => {
    console.log(" Numero "+  number)
}
)


const $button = window.document.querySelector("button");

$button.addEventListener("click", () => {
    console.log('Clicou o js ele roda os codigo de cima pra baixo esperando o click');
  
}); 

console.log("hola");