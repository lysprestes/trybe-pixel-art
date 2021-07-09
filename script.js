const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
let selectedColor = document.querySelector('.selected');

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



pixel.forEach(item => {
  item.addEventListener('click', event => {
    event.target.id = selectedColor.id;
  })
})

document.querySelector('#clear-board').addEventListener('click', item => {
  pixel.forEach(item => {
    item.id = '';
  })
})