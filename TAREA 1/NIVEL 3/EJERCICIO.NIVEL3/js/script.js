function suma() {
  let oper = '+';
  calculador(oper);
}

function menos() {
  let oper = '-';
  calculador(oper);
}

function multi() {
  let oper = '*';
  calculador(oper);
}

function dividir() {
  let oper = '/';
  calculador(oper);
}

function resta() {
  let oper = '%';
  calculador(oper);
}

function calculador(oper) {
  let val1 = parseInt(document.getElementById('val1').value);
  let val2 = parseInt(document.getElementById('val2').value);

  switch (oper) {
    case '+': document.getElementById('resultado').value = val1 + val2;
      break;
    case '-': document.getElementById('resultado').value = val1 - val2;
      break;
    case '*': document.getElementById('resultado').value = val1 * val2;
      break;
    case '/': document.getElementById('resultado').value = val1 / val2;
      break;
    case '%': document.getElementById('resultado').value = val1 % val2;
      break;
    default: alert(`Introduzca el operador no está correcto, intenta otra vez por favor`);
      break;
  }
}