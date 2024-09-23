function calculate() {
  let expression = document.getElementById('display').value;
  
  try {
    let result = new Function('return ' + processExpression(expression))();
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Erro';
  }
}

function processExpression(expression) {
  let validExpression = /^[\d+\-*/(). ]+$/;
  
  if (!validExpression.test(expression)) {
    throw new Error("Expressão inválida");
  }
  
  return expression;
}

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let currentDisplay = document.getElementById('display').value;
  document.getElementById('display').value = currentDisplay.slice(0, -1);
}
