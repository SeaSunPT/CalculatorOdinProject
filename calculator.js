let number1 = 0;
let number2 = 0;
let operationResult = 0;
let operator = '';
let result = document.getElementById("result");
result.textContent = 0;

const add = (n1, n2) => {
    return n1 + n2;
}

const subtract = (n1, n2) => {
    return n1 - n2;
}

const multiply = (n1, n2) => {
    return n1 * n2;
}

const divide = (n1, n2) => {
    return n1 / n2;
}

const operate = (operator, n1, n2) => {
    const operation = operator;
    switch (operation) {
        case 'add':
            return (add(n1, n2));
        case 'subtract':
            return (subtract(n1, n2));
        case 'multiply':
            return (multiply(n1, n2));
        case 'divide':
            if (n2 === 0) {
                return "Can't divide by 0.";
            }
            return (divide(n1, n2));
    }
}


// document.getElementById("scoreboard");
// winnerText.textContent = "Computer wins!";
const button0 = document.getElementById("button0");
button0.addEventListener("click", function () {
    console.log(0);
    if (operator === '') {
        number1 = 0;
    }
    else number2 = 0;
});

const button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
    console.log(1);
    if (operator === '') {
        number1 = 1;
    }
    else number2 = 1;
});
const button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
    console.log(2);
    if (operator === '') {
        number1 = 2;
    }
    else number2 = 2;
});
const button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
    console.log(3);
    if (operator === '') {
        number1 = 3;
    }
    else number2 = 3;
});
const button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
    console.log(4);
    if (operator === '') {
        number1 = 4;
    }
    else number2 = 4;
});
const button5 = document.getElementById("button5");
button5.addEventListener("click", function () {
    console.log(5);
    if (operator === '') {
        number1 = 5;
    }
    else number2 = 5;
});
const button6 = document.getElementById("button6");
button6.addEventListener("click", function () {
    console.log(6);
    if (operator === '') {
        number1 = 6;
    }
    else number2 = 6;
});
const button7 = document.getElementById("button7");
button7.addEventListener("click", function () {
    console.log(7);
    if (operator === '') {
        number1 = 7;
    }
    else number2 = 7;
});
const button8 = document.getElementById("button8");
button8.addEventListener("click", function () {
    console.log(8);
    if (operator === '') {
        number1 = 8;
    }
    else number2 = 8;
});
const button9 = document.getElementById("button9");
button9.addEventListener("click", function () {
    console.log(9);
    if (operator === '') {
        number1 = 9;
    }
    else number2 = 9;
});

// CLEAR
const buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", function () {
    console.log('clear button pressed');
    number1 = 0;
    number2 = 0;
    operator = '';
    let result = document.getElementById("result");
    result.textContent = 0;
    operationResult = 0;
});

// OPERATIONS

const buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", function () {
    console.log('add pressed');
    operator = 'add';
    // GET Functions and populate div with result
});
const buttonSub = document.getElementById("buttonSub");
buttonSub.addEventListener("click", function () {
    console.log('subtraction pressed');
    operator = 'subtract';
    // GET Functions and populate div with result
});
const buttonMultiply = document.getElementById("buttonMultiply");
buttonMultiply.addEventListener("click", function () {
    console.log('multiply pressed');
    operator = 'multiply';
    // GET Functions and populate div with result
});
const buttonDivide = document.getElementById("buttonDivide");
buttonDivide.addEventListener("click", function () {
    console.log('divide pressed');
    operator = 'divide';
    // GET Functions and populate div with result
});

// EQUALS AND RESULT

const buttonEquals = document.getElementById("buttonEquals");
buttonEquals.addEventListener("click", function () {
    console.log(`operation: ${operator}; number1: ${number1}; number2: ${number2}`);
    operationResult += operate(operator, number1, number2);
    result.textContent = operationResult;
    operator = '';
});