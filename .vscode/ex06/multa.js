function calcular() {
    var txt = document.getElementById('velocidade');
    var res = Number(txt.value);
    var resultado = document.getElementById('resul');

    if (res < 60) {
        resultado.innerText = 'O carro está dentro do limite de velocidade';
        resultado.style.color = 'green';
    } else if (res >= 60 && res <= 80) {
        resultado.innerHTML = `Velocidade excedente:<br>Velocidade ${res} km/h Multado!!<br>LEVE`;
        resultado.style.color = 'red';
    } else if (res > 80 && res <= 120) {
        resultado.innerHTML = `Velocidade excedente:<br>Velocidade ${res} km/h Multado!!<br>GRAVE`;
        resultado.style.color = 'red';
    } else {
        resultado.innerHTML = `Velocidade excedente:<br>Velocidade ${res} km/h Multado!!<br>GRAVÍSSIMA`;
        resultado.style.color = 'red';
    }
}
