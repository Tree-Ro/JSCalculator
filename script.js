console.log('hello');


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


//Functionality
function operate(operand1, operand2, operator ) {
    switch (operator) {
        case '+':
            add(operand1, operand2)
            break;

        case '-':
            subtract(operand1, operand2)
            break;

        case '*':
            multiply(operand1, operand2)
            break;

        case '/':
            divide(operand1, operand2)
            break;
    }
}

function clear() {
    
}


//Buttons
function () {

}

function () {

}