// Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário:

function sum(firstNumber, secondNumber) {
    return {
        soma: `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`,
        subtracao: `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`,
        multiplicacao: `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`,
        divisao: `${firstNumber} / ${secondNumber} = ${firstNumber !== 0 && secondNumber !== 0 ? firstNumber / secondNumber : 0}`,
    };
}

let buttonCalculate = document.querySelector('#calculate');

buttonCalculate.addEventListener('click', () => {
    let firstNumber = Number(prompt("Digite o número 1"));
    let secondNumber = Number(prompt("Digite o número 2"));

    alert(JSON.stringify(sum(firstNumber, secondNumber)));
});
