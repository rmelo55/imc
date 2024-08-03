document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = Number(parseFloat(document.getElementById('peso').value));
    const altura = Number(document.getElementById('altura').value.replace(',', '.'));

    // const peso = Number(parseFloat(document.getElementById('peso').value));
    // const altura = Number(parseFloat(document.getElementById('altura').value)).replace(',','.');

    const imc = peso / (altura * altura);

    
    let situation;
    
    if (imc < 16) {
        situation = 'muito abaixo do peso (Magreza grave)'
        const sitExtraLower = document.getElementById('extra-lower')
        sitExtraLower.style.backgroundColor='rgb(185, 0, 0)'

    } else if (imc < 17) {
        situation = 'muito abaixo do peso (Magreza moderada)'
        const sitLower = document.getElementById('lower')
        sitLower.style.backgroundColor='rgb(235, 0, 0)'

    } else if (imc < 18.5) {
        situation = 'abaixo do peso'
        const sitLow = document.getElementById('low')
        sitLow.style.backgroundColor='rgb(230, 230, 0)'
        sitPlus.style.color='#000'

    } else if (imc < 25) {
        situation = 'com peso normal'
        const sitNormal = document.getElementById('normal')
        sitNormal.style.backgroundColor='rgb(0, 100, 0)'

    } else if (imc < 30) {
        situation = 'com sobrepeso'
        const sitPlus = document.getElementById('plus')
        sitPlus.style.backgroundColor='rgb(230, 230, 0)'
        sitPlus.style.color='#000'

    } else if (imc < 35) {
        situation = 'com obesidade leve'
        const sitPlus2 = document.getElementById('plus-2')
        sitPlus2.style.backgroundColor

    } else if (imc < 40) {
        situation = 'com obesidade moderada'
        const sitPlus3 = document.getElementById('plus-3')
        sitPlus3.style.backgroundColor='rgb(185, 0, 0)'

    } else {
        situation = 'com obesidade grave'
        const sitPlus4 = document.getElementById('plus-4')
        sitPlus4.style.backgroundColor='rgb(185, 0, 0)'

    }

    const resultadoElement = document.getElementById('result');
    resultadoElement.textContent = `O seu IMC é: ${imc.toFixed(2)}, e você está ${situation}`;
    
    resultadoElement.style.display='block';
});



document.getElementById('result').style.display = 'none'