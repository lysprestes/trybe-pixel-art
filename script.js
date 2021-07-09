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




/*let color = document.getElementsByClassName("color")
let current = document.querySelector(".selected");
document.addEventListener('click', function (selectColor) {
  if (selectColor.target.className == "color") {
    selectColor.target.setAttribute("class", "color selected");
    current.setAttribute("class", "color");
    current = document.querySelector(".selected");
  }
});
*/