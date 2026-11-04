function calcImc(){
    altura = parseFloat(document.getElementById('altura').value);
    peso = parseFloat(document.getElementById('peso').value);
    sexo = document.getElementById('sexo').value

    let imcF = 0
    if (sexo === 'Feminino' || sexo === 'feminino'){
        imcF = peso / (altura * altura);
        if(imcF < 19.1){
            document.getElementById('resp').innerHTML = 'Abaixo do peso';
            document.getElementById('resp').style.color = 'Pink';
        }else if(imcF >= 19.2 && imcF <= 25.8){
            document.getElementById('resp').innerHTML = 'Peso ideal';
            document.getElementById('resp').style.color = 'Pink';
        }else if(imcF >=25.9 && imcF <= 27.3){
            document.getElementById('resp').innerHTML = 'Ligeiramente acima do peso';
            document.getElementById('resp').style.color = 'Pink';
        }else if(imcF >= 27.4 && imcF <= 32.3){
            document.getElementById('resp').innerHTML = 'Acima do peso ideal';
            document.getElementById('resp').style.color = 'Pink';
        }else if(imcF >= 32.4){
            document.getElementById('resp').innerHTML = 'Obesidade';
            document.getElementById('resp').style.color = 'Pink';
        }
    }

    let imcM = 0
    if (sexo === 'Masculino' || sexo === 'masculino'){
        imcM = peso / (altura * altura);
        if(imcM < 20.7){
            document.getElementById('resp').innerHTML = 'Abaixo do peso';
            document.getElementById('resp').style.color = 'Blue';
        }else if(imcM >= 20.8 && imcM <= 26.4){
            document.getElementById('resp').innerHTML = 'Peso ideal';
            document.getElementById('resp').style.color = 'Blue';
        }else if(imcM >=26.5 && imcM <= 27.8){
            document.getElementById('resp').innerHTML = 'Ligeiramente acima do peso';
            document.getElementById('resp').style.color = 'Blue';
        }else if(imcM >= 27.9 && imcM <= 31.1){
            document.getElementById('resp').innerHTML = 'Acima do peso ideal';
            document.getElementById('resp').style.color = 'Blue';
        }else if(imcM >= 31.2){
            document.getElementById('resp').innerHTML = 'Obesidade';
            document.getElementById('resp').style.color = 'Blue';
        }
    }
}