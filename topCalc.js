//Operator Button Declarations

const clearButton = document.querySelector('.clear');
const percentButton = document.querySelector('.percent');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const addButton = document.querySelector('#add');
const equalsButton = document.querySelector('.equals');
const dotButton = document.querySelector('.dot');

//Numeral Button Declarations

const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const zeroButton = document.querySelector('#zero');

//Display Declaration

const numDisplay = document.querySelector('.displayContainer');

console.log(numDisplay);



function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  if (b !== 0) return +(a / b).toFixed(4);
  if (b === 0) alert("Stop that, you buffoon!!")
}

function operate(input) {

  let splitPut = input.split(" ");
  console.log(splitPut);

  let operator = splitPut[1];
  let a = +splitPut[0];
  let b = +splitPut[2];

  switch(operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
  }
}