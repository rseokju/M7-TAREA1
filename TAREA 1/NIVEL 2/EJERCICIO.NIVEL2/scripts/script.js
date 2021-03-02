function miFun() {
  let val1 = parseInt(prompt(`Introduzca primero valor`));
  let val2 = parseInt(prompt(`Introduzca segundo valor`));
  let operador = prompt(`Introduzca el operador que quiere ( + , - , %, *, /)`);
  let resultado;

  switch (operador) {
    case '+': resultado = calculadora(operador, val1, val2);
      break;
    case '-': resultado = calculadora(operador, val1, val2);
      break;
    case '%': resultado = calculadora(operador, val1, val2);
      break;
    case '*': resultado = calculadora(operador, val1, val2);
      break;
    case '/': resultado = calculadora(operador, val1, val2);
      break;
    default: alert(`Introduzca el operador no está correcto, intenta otra vez por favor`);
      break;
  }

  alert(`${resultado}`);
  console.log(`${resultado}`);
  document.getElementById("resultado").innerHTML = `${resultado}`;
}

function calculadora(operador, val1, val2) {
  let resultado = '';
  switch (operador) {
    case '+': resultado += `${val1} + ${val2} = ${val1 + val2}`;
      break;
    case '-': resultado += `${val1} - ${val2} = ${val1 - val2}`;
      break;
    case '%': resultado += `${val1} % ${val2} = ${val1 % val2}`;
      break;
    case '*': resultado += `${val1} * ${val2} = ${val1 * val2}`;
      break;
    case '/': resultado += `${val1} / ${val2} = ${val1 / val2}`;
      break;
  }
  return resultado;
}