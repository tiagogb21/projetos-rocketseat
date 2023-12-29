let number1 = Number(prompt('Digite o primeiro número'));
let number2 = Number(prompt('Digite o segundo número'));

function add() {
    return number1 + number2;
}

function sub() {
    return number1 - number2;
}

function mult() {
    return number1 * number2;
}

function div() {
    if (number2 === 0) return 0;
    return number1 / number2;
}

function resto(result) {
    return result % 2 === 0 ? 'par' : 'ímpar';
}

function start() {
    let choose;

    do {
        choose = parseInt(prompt(`
            Escolha a opção que deseja:
            1 - soma
            2 - subtração
            3 - multiplicação
            4 - divisão
        `));
    } while (isNaN(choose) || choose < 1 || choose > 4);

    let result, operation;

    switch (choose) {
        case 1:
            operation = '+';
            result = add();
            break;
        case 2:
            operation = '-';
            result = sub();
            break;
        case 3:
            operation = '*';
            result = mult();
            break;
        case 4:
            operation = '/';
            result = div();
            break;
        default:
            alert('Aconteceu algum erro!');
            return;
    }

    let equalNumber = number1 === number2 ? 'números iguais' : 'números diferentes';

    alert(`${number1} ${operation} ${number2} = ${result}`);
    alert(`${result} é ${resto(result)}`);
    alert(equalNumber);
}

start();
