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