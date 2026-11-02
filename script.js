function identificarBotao(evento) {
    const idClicado = evento.target.id;

    switch (idClicado) {
        case "soma":
            num1 = parseInt(document.getElementById('num1').value);
            num2 = parseInt(document.getElementById('num2').value);

            const totalSoma = num1 + num2;

            document.getElementById('resultado').value = totalSoma
            break;
        case "subtracao":
            num1 = parseInt(document.getElementById('num1').value);
            num2 = parseInt(document.getElementById('num2').value);

            const totalSub = num1 - num2;

            document.getElementById('resultado').value = totalSub
            break;
        case "multiplicacao":
            num1 = parseInt(document.getElementById('num1').value);
            num2 = parseInt(document.getElementById('num2').value);

            const totalMult = num1 * num2;

            document.getElementById('resultado').value = totalMult
            break;
        case "divisao":
            num1 = parseInt(document.getElementById('num1').value);
            num2 = parseInt(document.getElementById('num2').value);

            const totalDiv = num1 / num2;

            document.getElementById('resultado').value = totalDiv
            break;
        default:
            console.log("ID não reconhecido");
    }
}