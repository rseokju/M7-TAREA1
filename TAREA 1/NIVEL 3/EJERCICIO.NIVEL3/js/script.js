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
  resultado.value = eval(`${val1} ${oper} ${val2}`);
}