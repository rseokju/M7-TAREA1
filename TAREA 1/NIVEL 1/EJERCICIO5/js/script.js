function miFun() {
  let nota1 = parseInt(prompt('Introduzca la primera nota'));
  let nota2 = parseInt(prompt('Introduzca la segunda nota'));
  let media = (nota1 + nota2) / 2;
  let text = '';

  if (media >= 5) {
    text = `Has aprobado el examen con un ${media}`;
  } else {
    text = `Has suspendido el examen con un ${media}`;
  }

  alert(text);
  console.log(text);
  resultado.innerHTML = text;
}