function miFun() {
  let text = "Tengo un coche de color verde";
  let text_1 = text.replace('verde', 'azul');
  let text_2 = text_1.replace(/o/gi, 'u');


  alert(`${text}\n${text_2}`);
  console.log(`${text}\n${text_2}`);
  document.getElementById("resultado").innerHTML = `${text}<br>${text_2}`;
}