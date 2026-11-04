function calcIr(){
    salarioBase = parseFloat(document.getElementById('salario').value);
    let aliquota = 0
    let parcelaDeducao = 0;
    let impostoDevido = 0


    if (salarioBase <= 2259.20) {
        aliquota = 0;
        parcelaDeducao = 0;
        document.getElementById('ir').value = 'Isento!'
    } else if (salarioBase >= 2112 && salarioBase < 2.826) {
        aliquota = 0.075;
        parcelaDeducao = 169.44;
        impostoDevido = (salarioBase * aliquota) - parcelaDeducao;
        document.getElementById('ir').value = 'R$'+impostoDevido.toFixed(2)
        
    } else if (salarioBase >= 2.826 && salarioBase < 3.751) {
        aliquota = 0.15;
        parcelaDeducao = 381.44;
        impostoDevido = (salarioBase * aliquota) - parcelaDeducao;
        document.getElementById('ir').value = 'R$'+impostoDevido.toFixed(2)
        
    } else if (salarioBase >= 3.751 && salarioBase < 4.664) {
        aliquota = 0.225;
        parcelaDeducao = 662.77;
        impostoDevido = (salarioBase * aliquota) - parcelaDeducao;
        document.getElementById('ir').value = 'R$'+impostoDevido.toFixed(2)
        
    } else {
        aliquota = 0.275;
        parcelaDeducao = 896.00;
        impostoDevido = (salarioBase * aliquota) - parcelaDeducao;
        document.getElementById('ir').value = 'R$'+impostoDevido.toFixed(2)
       
    }
}