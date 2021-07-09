const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
let selectedColor = document.querySelector('.selected');

//Tive ajuda do Rod com uso de forEach

//Definir cor preta como inicial
color.forEach(item => {
  item.addEventListener('click', event => {
    for (let index = 0; index < color.length; index++) {
      const element = color[index];
      color[index].classList.remove("selected")
    }
    item.classList.add("selected")
    selectedColor = document.querySelector('.selected')
  })
})

//Adiciona uma cor por vez e pinta os quadradinhos atribuindo o mesmo ID para os pixels.
pixel.forEach(item => {
  item.addEventListener('click', event => {
    event.target.id = selectedColor.id;
  })
})

//Clear board button
document.querySelector('#clear-board').addEventListener('click', item => {
  pixel.forEach(item => {
    item.id = '';
  })
})
