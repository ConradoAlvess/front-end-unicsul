nomeAluno = prompt("Digite o nome do aluno: ");
nota1 = parseFloat(prompt("Digite a nota 1 do aluno: "));
nota2 = parseFloat(prompt("Digite a nota 2 do aluno: "));

document.getElementById('nomeAluno').innerHTML = nomeAluno
document.getElementById('nota1').innerHTML = nota1
document.getElementById('nota2').innerHTML = nota2

function calcularMedia(){
    media = (nota1 + nota2)/2;

    document.getElementById('resp').innerHTML = 'A média do aluno '+nomeAluno+' é: '+media;
}