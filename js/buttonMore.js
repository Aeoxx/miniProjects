const fotos = document.querySelector('.fotos')
const btn = document.querySelector('.more')
let newNum = 1

const paintFotos = () => {
  const paintedPhotos = data.filter((elem, i) => i <= newNum).map((foto) => `<img class='img' src='${foto.photo}'>`);
  fotos.innerHTML = paintedPhotos;
  newNum += 2
  if(newNum === data.length + 1) btn.remove()
}

btn.onclick = paintFotos;


paintFotos()


