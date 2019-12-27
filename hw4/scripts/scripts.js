'use strict';

let operator;
let firstOperand;
let secondOperand;
let result;
do {
    firstOperand = prompt ('Enter the first operand' , '');
} while (isNaN(firstOperand) || firstOperand === '');
firstOperand = Number(firstOperand);

do {
    operator = prompt ('Enter the operator' , '');
} while (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '/' &&
    operator !== '*'
    );

do {
    secondOperand = prompt ('Enter the second operand' , '');
} while (isNaN(secondOperand) || secondOperand === '');
secondOperand = Number(secondOperand);

switch (operator) {
    case '+':
        result = firstOperand + secondOperand;
        break;
    case '-':
        result = firstOperand - secondOperand;
        break;
    case '/':
        result = firstOperand / secondOperand;
        break;
    case '*':
        result = firstOperand * secondOperand;
        break;
}

alert(`${firstOperand} ${operator} ${secondOperand} = ${result}`);

// Возможно ли это сделать при помощи цикла 'for', а то я две ночи просидел и результат на лицо?
