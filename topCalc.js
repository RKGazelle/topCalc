//Operator Button Declarations

const clearButton = document.querySelector('.clear');
const percentButton = document.querySelector('.percent');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const addButton = document.querySelector('#add');
const equalsButton = document.querySelector('.equals');
const dotButton = document.querySelector('.dot');
const negButton = document.querySelector('#negative');
const backButton = document.querySelector('#back');

const operButtons = [];
operButtons.push(clearButton,percentButton,divideButton,multiplyButton,subtractButton,addButton,equalsButton,dotButton);

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

const numButtons = [];
numButtons.push(zeroButton,oneButton,twoButton,threeButton,fourButton,fiveButton,sixButton,sevenButton,eightButton,nineButton);
console.log(numButtons,operButtons);

//Calculator Operation Variables
let numInput = "";
let operateString = "";

//Display Declaration

const numDisplay = document.querySelector('.displayContainer');

//Add Event Listeners to number buttons

for(let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', () => {
    if (numInput.length < 12) {
      numInput += String(i);
      numDisplay.textContent = numInput;
    }
  });
}

//Add Event Listeners & Logic to Operator Buttons

addButton.addEventListener('click', () => {
  operateButton(" + ");
});

subtractButton.addEventListener('click', () => {
  operateButton(" - ");
});

multiplyButton.addEventListener('click', () => {
  operateButton(" * ");
});

divideButton.addEventListener('click', () => {
  operateButton(" / ");
});

equalsButton.addEventListener('click', () => {
  if(!operateString) {
    numDisplay.textContent = numInput;
    return numInput;
  }
  operateString += numInput;
  numInput = operate(operateString);
  numDisplay.textContent = numInput;
  operateString = "";
});

dotButton.addEventListener('click', () => {
  if(numInput.match(/[.]/g) === null) {
    numInput += ".";
    numDisplay.textContent = numInput;
  }
  else return;
});

negButton.addEventListener('click', () => {
  numInput = String(+numInput * -1);
  numDisplay.textContent = numInput;
});

backButton.addEventListener('click', () => {
  numInput = numInput.slice(0,numInput.length-1);
  numDisplay.textContent = numInput;
});

//Clear

clearButton.addEventListener('click', () => {
  numDisplay.textContent = "";
  numInput = "";
  operateString = "";
});

//Calculator Functions

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
  if (b !== 0 && (a / b) % 1 === 0) return (a / b);
  else if (b !== 0 && (a / b) % 1 !== 0) return (a / b).toFixed(4);
  if (b === 0){
     alert("Stop that, you buffoon!!");
     alert("Resetting all input...");
     numInput = "";
     operateString = "";
     numDisplay.textContent = "";
  }
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

function operateButton(sign) {
  //If this is the first operator press (i.e., 7 +)
  if(operateString === "") {  
    operateString += numInput;
    operateString += sign;
    numDisplay.textContent = operateString;
    console.log(operateString);
    numInput = "";
    console.log(numInput);
  }
  //If this is the second operator press (i.e., 7 + 7 +)
  else { 
    operateString += numInput;
    numInput = operate(operateString);
    numDisplay.textContent = numInput;
    operateString = `${numInput}${sign}`;
    numInput = "";
  }
}