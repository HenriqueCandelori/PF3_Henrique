const enviarVF = document.getElementById('enviarVF');


function pace () {
    const nome = document.getElementById('nome').value;
    const aplicarzada = document.getElementById('aplicarzada').value;
    const parcelazada = document.getElementById('parcelazada').value;
    const JUROZADA = parseFloat(document.getElementById('JUROZADA').value/100);
    const resultado = document.getElementById('resultado');
    if (nome == '' && aplicarzada == '' && parcelazada == '') { 
       resultado.textContent = "Preencha todos os campos vazios!"
    }
    else
    { 
        const JUROZADACerto = (JUROZADA * 100)
        const VFCALCULOFIXED = (aplicarzada*((((1+ JUROZADA)**parcelazada) - 1) / JUROZADA)).toFixed(2);
        resultado.textContent = ` Olá ${nome}!  será obtido o valor R$ ${VFCALCULOFIXED},  depois de ${parcelazada} meses, com uma taxa de ${JUROZADACerto}% ao mês.`;
    }
}
enviarVF.addEventListener('click', pace);
       
        
        

        
        