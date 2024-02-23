document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = peso / (altura * altura);

    let situation;

    if (imc < 16) {
        situation = 'muito abaixo do peso (Magreza grave)';
    } else if (imc < 17) {
        situation = 'muito abaixo do peso (Magreza moderada)';
    } else if (imc < 18.5) {
        situation = 'abaixo do peso';
    } else if (imc < 25) {
        situation = 'com peso normal';
    } else if (imc < 30) {
        situation = 'com sobrepeso';
    } else if (imc < 35) {
        situation = 'com obesidade leve';
    } else if (imc < 40) {
        situation = 'com obesidade moderada';
    } else {
        situation = 'com obesidade grave';
    }

    const resultadoElement = document.getElementById('result');
    resultadoElement.textContent = `O seu IMC é: ${imc.toFixed(2)}, e você está ${situation}`;
    
    resultadoElement.style.display='block';
});



document.getElementById('result').style.display = 'none'

/*
document.getElementById('imcForm').onsubmit = function(event) {
    event.preventDefault();

    const peso = +document.getElementById('peso').value;
    const altura = +document.getElementById('altura').value;

    const imc = peso / (altura * altura);
    document.getElementById('resultado').textContent = `O seu IMC é: ${imc.toFixed(2)}`;
};
*/

/*
document.getElementById('calcularIMC').addEventListener('click', function() {
    const peso = +document.getElementById('peso').value;
    const altura = +document.getElementById('altura').value;

    const imc = peso / (altura * altura);
    document.getElementById('resultado').textContent = `O seu IMC é: ${imc.toFixed(2)}`;
});
*/
