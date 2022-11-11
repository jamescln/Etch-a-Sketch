// Global variables
const container = document.querySelector(".container");
const newGridbtn = document.querySelector(".newGridButton");
let gridSize = 16;

// Global functions
const createGrid = function () {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const etchBox = document.createElement("div");
    etchBox.className = "etch-box";
    etchBox.onmouseover = (event) => {
      event.target.className = "etch-box-active";
    };
    container.appendChild(etchBox);
  }
};

const createNewGrid = function () {
  for (let i = 0; i < gridSize * gridSize; i++) {
    container.removeChild(container.lastChild);
  }
  gridSize = Number(prompt("How big do you want the grid? (From 10 to 100)."));
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  if (gridSize >= 10 && gridSize <= 100) {
    createGrid();
  } else {
    console.log(gridSize);
  }
};

// Other

newGridbtn.onclick = (event) => {
  createNewGrid();
};

createGrid();
