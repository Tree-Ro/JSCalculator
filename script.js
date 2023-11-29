console.log('hello');

let input = {
    opperand1: [''],
    operator: [''],
    opperand2: [''],
};
let output = '';

const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operator');
const exponentiationButton = document.querySelector('#exponentiation');
const removeButtons = document.querySelectorAll('#remove');
const operateButton = document.querySelector('#operate');

//Initialise stuff
numberListener();
operatorListener();
removeListener();
operateListener();

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

function exponentiation(base, exponent) {
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

        case 'x':
            return multiply(+opperand1, +opperand2);

        case '/':
            return divide(+opperand1, +opperand2);

        case '**':
            return exponentiation(+opperand1, +opperand2);

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
    displayInput(
        input.opperand1[0] + ` ${input.operator} ` + input.opperand2[0]
    );
    displayOutput('');
}

function clear() {
    if (!input.operator[0]) {
        input.opperand1 = [input.opperand1[0].slice(0, -1)];
    } else if (!input.opperand2[0]) {
        input.operator = [''];
    } else if (input.operator) {
        input.opperand2 = [input.opperand2[0].slice(0, -1)];
    }
    displayInput(
        input.opperand1[0] + ` ${input.operator} ` + input.opperand2[0]
    );
}

function addNumber(newNumber) {
    if (!input.operator[0]) {
        input.opperand1[0] += newNumber;
        displayInput(
            input.opperand1[0] + ` ${input.operator} ` + input.opperand2[0]
        );
    } else if (input.operator[0]) {
        input.opperand2[0] += newNumber;
        displayInput(
            input.opperand1[0] + ` ${input.operator} ` + input.opperand2[0]
        );
    }
}

function addOperator(newOperator) {
    if (!input.operator[0]) {
        input.operator = [newOperator];
        displayInput(
            input.opperand1[0] + ` ${input.operator} ` + input.opperand2[0]
        );
    } else {
        // turn button red for a small time
    }
}

function displayOutput(output) {
    calcOutput.textContent = output;
}

function displayInput(input) {
    userInput.textContent = input;
}
//Buttons

function numberListener() {
    numberButtons.forEach((button) => {
        button.addEventListener('mousedown', (event) => {
            addNumber(event.target.textContent);
        });
    });
}

function operatorListener() {
    exponentiationButton.addEventListener('mousedown', () => {
        addOperator('**');
    });

    operatorButtons.forEach((button) => {
        button.addEventListener('mousedown', (event) => {
            addOperator(event.target.textContent);
        });
    });
}

function removeListener() {
    removeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            if (event.target.textContent === 'C') {
                clear();
            } else if (event.target.textContent === 'AC') {
                allClear();
            }
        });
    });
}

function operateListener() {
    operateButton.addEventListener('click', (event) => {
        displayOutput(operate());
    });
}
