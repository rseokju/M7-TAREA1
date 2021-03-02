function miFun() {
  let val1 = 40;
  let val2 = 20;
  let operador = ['sumas', 'restas', 'multiplicaciones']

  let suma = calculadora(operador[0], val1, val2);
  let resta = calculadora(operador[1], val1, val2);
  let multiple = calculadora(operador[2], val1, val2);

  let text_suma = `${operador[0]} : ${val1} + ${val2} = ${suma}`;
  let text_resta = `${operador[1]} : ${val1} % ${val2} = ${resta}`;
  let text_multi = `${operador[2]} : ${val1} * ${val2} = ${multiple}`;

  alert(`${text_suma}\n${text_resta}\n${text_multi}`);
  console.log(`${text_suma}\n${text_resta}\n${text_multi}`);
  document.getElementById("resultado").innerHTML = `${text_suma}<br>${text_resta}<br>${text_multi}`;
}

function calculadora(operador, val1, val2) {
  let resultado;
  switch (operador) {
    case 'sumas': resultado = val1 + val2;
      break;
    case 'restas': resultado = val1 % val2;
      break;
    case 'multiplicaciones': resultado = val1 * val2;
      break;
  }
  return resultado;
}