function miFun() {
  let val1 = 30;
  let val2 = 5;
  let resultado = val1 + val2;
  let text = `La suma entre ${val1} y ${val2} es ${resultado}`;

  alert(text);
  console.log(text);
  document.getElementById("resultado").innerHTML = text;
}