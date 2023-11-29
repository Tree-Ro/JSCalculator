console.log('hello');

let input = {
    opperand1: [''],
    operator: [''],
    opperand2: [''],
};
const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const remove = document.querySelectorAll('#remove');
const equalSign = document.querySelector('#operate');

//Operations
function add(addend1, addend2) {
    const sum = addend1 + addend2;
    return sum;
}

function subtract(minuend, subtrahend) {
    const difference = minuend - subtrahend;
    return difference;
}

function multiply(multiplicand, multiplicator) {
    const product = multiplicand * multiplicator;
    return product;
}

function divide(dividend, divisor) {
    const quotient = dividend / divisor;
    return quotient;
}

function squared(base, exponent) {
    const square = base ** exponent;
    return square;
}

//Functionality
function operate(
    opperand1 = input.opperand1,
    opperand2 = input.opperand2,
    operator = input.operator
) {
    switch (operator[0]) {
        case '+':
            return add(+opperand1, +opperand2);

        case '-':
            return subtract(+opperand1, +opperand2);

        case '*':
            return multiply(+opperand1, +opperand2);

        case '/':
            return divide(+opperand1, +opperand2);

        case '**':
            return squared(+opperand1, +opperand2);

        default:
            return 'Math Error';
    }
}

function allClear() {
    input = {
        opperand1: [''],
        operator: [''],
        opperand2: [''],
    };
}

function clear() {
    if (!input.operator[0]) {
        input.opperand1 = [input.opperand1[0].slice(0, -1)];
    } else if (!input.opperand2) {
        input.operator = [''];
    } else if (input.operator) {
        input.opperand2 = [input.opperand2[0].slice(0, -1)];
    }
}

function addNumber(newNumber) {
    if (!input.operator[0]) {
        input.opperand1[0] += newNumber;
    } else if (input.operator[0]) {
        input.opperand2[0] += newNumber;
    }
}

function addOperator(newOperator) {
    if (!input.operator[0]) {
        input.operator = [newOperator];
    } else {
        // turn button red for a small time
    }
}

//Buttons
