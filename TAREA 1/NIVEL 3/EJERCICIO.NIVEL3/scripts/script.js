function suma() {
  let val1 = parseInt(document.getElementById('val1').value);
  let val2 = parseInt(document.getElementById('val2').value);
  let resultado = val1 + val2;
  document.getElementById('resultado').value = resultado;
}

function menos() {
  let val1 = parseInt(document.getElementById('val1').value);
  let val2 = parseInt(document.getElementById('val2').value);
  let resultado = val1 - val2;
  document.getElementById('resultado').value = resultado;
}

function multi() {
  let val1 = parseInt(document.getElementById('val1').value);
  let val2 = parseInt(document.getElementById('val2').value);
  let resultado = val1 * val2;
  document.getElementById('resultado').value = resultado;
}

function dividir() {
  let val1 = parseInt(document.getElementById('val1').value);
  let val2 = parseInt(document.getElementById('val2').value);
  let resultado = val1 / val2;
  document.getElementById('resultado').value = resultado;
}

function resta() {
  let val1 = parseInt(document.getElementById('val1').value);
  let val2 = parseInt(document.getElementById('val2').value);
  let resultado = val1 % val2;
  document.getElementById('resultado').value = resultado;
}

// function miFun() {
//   let val1 = document.getElementById('val1').value;
//   let val2 = document.getElementById('val2').value;
//   alert(`${val1} ${val2}`);

//   let operador = prompt(`Introduzca el operador que quiere ( + , - , %, *, /)`);
//   let resultado;

//   switch (operador) {
//     case '+': resultado = calculadora(operador, val1, val2);
//       break;
//     case '-': resultado = calculadora(operador, val1, val2);
//       break;
//     case '%': resultado = calculadora(operador, val1, val2);
//       break;
//     case '*': resultado = calculadora(operador, val1, val2);
//       break;
//     case '/': resultado = calculadora(operador, val1, val2);
//       break;
//     default: alert(`Introduzca el operador no está correcto, intenta otra vez por favor`);
//       break;
//   }

//   alert(`${resultado}`);
//   console.log(`${resultado}`);
//   document.getElementById("resultado").innerHTML = `${resultado}`;
// }

// function calculadora(operador, val1, val2) {
//   let resultado = '';
//   switch (operador) {
//     case '+': resultado += `${val1} + ${val2} = ${val1 + val2}`;
//       break;
//     case '-': resultado += `${val1} - ${val2} = ${val1 - val2}`;
//       break;
//     case '%': resultado += `${val1} % ${val2} = ${val1 % val2}`;
//       break;
//     case '*': resultado += `${val1} * ${val2} = ${val1 * val2}`;
//       break;
//     case '/': resultado += `${val1} / ${val2} = ${val1 / val2}`;
//       break;
//   }
//   return resultado;
// }