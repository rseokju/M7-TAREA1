function miFun() {
  let arry = ['mesa', 'silla', 'ordenador', 'libreta'];
  let i;
  let text = '';
  let text_ = '';
  for (i = 0; i < arry.length; i++) {
    text += `El objecto ${arry[i]} está a la posición ${i}\n`;
    text_ += `El objecto ${arry[i]} está a la posición ${i}<br>`;
  }

  alert(`${text} `);
  console.log(`${text} `);
  document.getElementById("resultado").innerHTML = `${text_} `;
}