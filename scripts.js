let gridContainer = document.createElement("div");
gridContainer.classList.add("container");
let gridSizeString = "";
for (let i = 0; i < 16; i++) {
  gridSizeString += "auto ";
}
gridSizeString = gridSizeString.trim();
gridContainer.style.gridTemplateColumns = gridSizeString;
gridContainer.style.gridTemplateRows = gridSizeString;
console.log(gridContainer);

let gridItems = [];
for (let i = 0; i < 256; i++) {
  gridItems[i] = document.createElement("div");
  gridItems[i].classList.add("item");
  gridItems[i].style.height = `60px`;
  gridItems[i].style.width = `60px`;
  gridItems[i].addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "white";
  });
  gridContainer.appendChild(gridItems[i]);
}

document.body.appendChild(gridContainer);

const button = document.querySelector("button");
button.addEventListener("click", function(e) {
  let valid = false;
  let rowSize;
  while (!valid) {
    rowSize = prompt("How many squares wide should the grid be?");
    if (rowSize <= 100) {
      valid = true;
    }
  }
  setGridSize(rowSize);
});

function setGridSize(size) {
  let boxSize = 960/size;
  console.log(boxSize);
  //remove boxes
  let boxes = document.querySelectorAll(".item");
  boxes.forEach(function(e) {
    e.remove();
  });

  //adjust size of grid
  gridSizeString = "";
  for (let i = 0; i < size; i++) {
    gridSizeString += "auto ";
  }
  gridSizeString = gridSizeString.trim();
  gridContainer.style.gridTemplateColumns = gridSizeString;
  gridContainer.style.gridTemplateRows = gridSizeString;
  //create new boxes of appropriate amount
  let totalBoxes = size * size;
  for (let i = 0; i < totalBoxes; i++) {
    gridItems[i] = document.createElement("div");
    gridItems[i].classList.add("item");
    gridItems[i].style.height = `${boxSize}px`;
    gridItems[i].style.width = `${boxSize}px`;
    gridItems[i].addEventListener("mouseover", function(e) {
      e.target.style.backgroundColor = "white";
    });
    gridContainer.appendChild(gridItems[i]);
  }

  //populate grid
}
