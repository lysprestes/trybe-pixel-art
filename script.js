const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
let selectedColor = document.querySelector('.selected');
let generateBoard = document.getElementById('pixel-board'); //table
let buttonBoard = document.getElementById('generate-board'); //button

document.querySelector('#black').style.backgroundColor = "black";
document.querySelector('#red').style.backgroundColor = hexColor();
document.querySelector('#green').style.backgroundColor = hexColor();
document.querySelector('#blue').style.backgroundColor = hexColor();


//Tive ajuda do Rod com uso de forEach

//Definir cor preta como inicial
color.forEach(item => {
  item.addEventListener('click', event => {
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove("selected")
    }
    item.classList.add("selected")
    selectedColor = document.querySelector('.selected')
  })
})

//Adiciona uma cor por vez e pinta os quadradinhos atribuindo o mesmo ID para os pixels.
function paint() {
const pixel = document.querySelectorAll('.pixel');
  pixel.forEach(item => {
    item.addEventListener('click', event => {
      event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    })
  })
};
paint();

//Clear board button
document.querySelector('#clear-board').addEventListener('click', item => {
  pixel.forEach(item => {
    item.style.backgroundColor = '';
  })
})

// Inspirado no code do Ruan Cunha (https://github.com/tryber/sd-013-a-project-pixels-art/compare/RuanCunha-project-pixels-art#diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R18)
function hexColor() {
  const characters = '0123456789ABCDEF';
  let hexColor = '#';
  for (let i = 0; i < 6; i += 1) {
    hexColor += characters[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

function createTable(inputBoard) {
  generateBoard.innerHTML = null;
  for (let i = 0; i < inputBoard; i += 1) {
    let tr = document.createElement('tr');
    for (let j = 0; j < inputBoard; j += 1) {
      let td = document.createElement('td');
      td.classList.add('pixel');
      tr.appendChild(td);
    }
    generateBoard.appendChild(tr);
  }
};

buttonBoard.addEventListener('click', () => {
  let inputValeu = document.getElementById('board-size').value;
  createTable(inputValeu);
  paint();
});

// function conditon() {
//   const inputValeu = document.querySelector('#board-size');
//   if (inputValeu.value < 5) {
//     inputValeu.value = 5;
//   }
//   if (inputValeu.value > 50) {
//     inputValeu.value = 50;
//   }
// }
