const color = document.querySelectorAll('.color');

color.forEach(item => {
  item.addEventListener('click', event => {
    for (let index = 0; index < color.length; index++) {
      const element = color[index];
      color[index].classList.remove("selected")
    }
    item.classList.add("selected")
  })
})

