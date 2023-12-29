function add(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    let mult = 0;

    if(b < 0) {
        a = -a;
        b = -b;
    }

    for (let i = 0; i < b; i++) {
        mult = add(mult, a);
    }

    return mult;
}

function division(a, b) {
    if(b === 0) return;

    let div = 0;
    let remaining = a;

    while (remaining >= b) {
        remaining = subtraction(remaining, b);
        div = add(div, 1);
    }

    return div;
}

console.log(multiply(4, 2))
console.log(multiply(2, 4))
console.log(multiply(20, 3))
console.log(multiply(3, 5))

console.log(division(4, 2))
console.log(division(2, 4))
console.log(division(20, 3))
console.log(division(3, 5))
