function catNadador(){
    nomeNadador = document.getElementById('nomeNadador').value;
    idadeNadador = parseInt(document.getElementById('idadeNadador').value);

    if (idadeNadador >= 5 && idadeNadador <= 7){
        document.getElementById('resp').innerHTML = 'Nadador: '+nomeNadador+'<br> Idade: '+idadeNadador+'<br> Categoria: Infantil A'
    } else if(idadeNadador >= 8 && idadeNadador <= 10){
        document.getElementById('resp').innerHTML = 'Nadador: '+nomeNadador+'<br> Idade: '+idadeNadador+'<br> Categoria: Infantil B'
    }else if(idadeNadador >= 11 && idadeNadador <= 13){
        document.getElementById('resp').innerHTML = 'Nadador: '+nomeNadador+'<br> Idade: '+idadeNadador+'<br> Categoria: Juvenil A'
    }else if(idadeNadador >= 14 && idadeNadador <= 17){
        document.getElementById('resp').innerHTML = 'Nadador: '+nomeNadador+'<br> Idade: '+idadeNadador+'<br> Categoria: Juvenil B'
    }else if (idadeNadador >= 18){
        document.getElementById('resp').innerHTML = 'Nadador: '+nomeNadador+'<br> Idade: '+idadeNadador+'<br> Categoria: Adulto'
    }else if (idadeNadador < 5){
        document.getElementById('resp').innerHTML = 'Nadador: '+nomeNadador+'<br> Idade: '+idadeNadador+'<br> Aluno desqualificado por idade'
    }
}