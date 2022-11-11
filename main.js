// Global variables
const container = document.querySelector(".container");
let gridSize = 256;

// Global functions
const createGrid = function () {
  for (let i = 0; i < gridSize; i++) {
    const etchBox = document.createElement("div");
    etchBox.className = "etch-box";
    etchBox.onmouseover = (event) => {
      event.target.className = "etch-box-active";
    };
    container.appendChild(etchBox);
  }
};

const createNewGrid = function () {
  for (let i = 0; i < gridSize; i++) {
    container.removeChild(etchBox);
  }
  gridSize = Number(prompt("How big do you want the grid? (From 10 to 100)."));
};
if (gridSize >= 10 && gridSize <= 100) {
  createGrid();
}

// Other

createGrid();
