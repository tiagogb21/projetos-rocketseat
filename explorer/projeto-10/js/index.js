// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

const buttonHelloWorld = document.querySelector('#button-hello-world');

buttonHelloWorld.addEventListener('click', () => {
    alert('Hello World!');
});

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

const buttonSum = document.querySelector('#button-sum');

function generateRandomNumber() {
    return Math.round(Math.random()*10);
}

let number1 = generateRandomNumber();
let number2 = generateRandomNumber();

function sum() {
    return number1 + number2;
};

buttonSum.addEventListener('click', () => {
    alert(`
        Primeiro Número: ${number1} \n
        Segundo Número: ${number2} \n
        Soma dos Números: ${number1} + ${number2} = ${sum()} \n
    `)
});

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const buttonVerifyValue1 = document.querySelector('#button-verify-value1');

buttonVerifyValue1.addEventListener('click', () => {
    let value = prompt("Digite um valor qualquer: ");

    alert(`
        O valor escolhido ${!isNaN(value) ? 'é um número' : 'não é um número'}
    `);
});

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const buttonVerifyValue2 = document.querySelector('#button-verify-value2');

buttonVerifyValue2.addEventListener('click', () => {
    let value = prompt("Digite um valor qualquer: ");

    alert(`
        O valor escolhido ${isNaN(value) ? 'é uma string' : 'não é uma string'}
    `);
});

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const buttonVerifyValue3 = document.querySelector('#button-verify-value3');

buttonVerifyValue3.addEventListener('click', () => {
    let value = prompt("Digite um valor qualquer: ");

    alert(`
        O valor escolhido ${['true', 'false'].indexOf(value) > -1 ? 'é um boolean' : 'não é um boolean'}
    `);
});

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const buttonSub = document.querySelector('#button-sub');

function sub() {
    return number1 - number2;
};

buttonSub.addEventListener('click', () => {
    alert(`
        Primeiro Número: ${number1} \n
        Segundo Número: ${number2} \n
        Subtração dos Números: ${number1} - ${number2} = ${sub()} \n
    `)
});

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const buttonMult = document.querySelector('#button-mult');

function mult() {
    console.log(number1 * number2)
    return number1 * number2;
};

buttonMult.addEventListener('click', () => {
    alert(`
        Primeiro Número: ${number1} \n
        Segundo Número: ${number2} \n
        Multiplicação dos Números: ${number1} * ${number2} = ${mult()} \n
    `)
});

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const buttonDiv = document.querySelector('#button-div');

function div() {
    return number1 / number2;
};

buttonDiv.addEventListener('click', () => {
    alert(`
        Primeiro Número: ${number1} \n
        Segundo Número: ${number2} \n
        Divisão dos Números: ${number1} / ${number2} = ${number2 === 0 ? 0 : div()} \n
    `)
});

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const buttonIsEven = document.querySelector('#button-is-even');

function isEven() {
    return number1 % 2 === 0 ? 'é par' : 'não é par';
};

buttonIsEven.addEventListener('click', () => {
    alert(`
        O número ${number1} ${isEven()}
    `)
});

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const buttonIsOdd = document.querySelector('#button-is-odd');

function isOdd() {
    return number1 % 2 !== 0 ? 'é ímpar' : 'não é ímpar';
};

buttonIsOdd.addEventListener('click', () => {
    alert(`
        O número ${number1} ${isOdd()}
    `)
});
