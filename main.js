// Global variables
const container = document.querySelector(".etch-container");
const newGridbtn = document.querySelector(".newGridButton");
let gridSize = 16;

// Global functions
const createGrid = function () {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const etchBox = document.createElement("div");
    etchBox.className = "etch-box";
    etchBox.onmouseover = (event) => {
      // event.target.className = "etch-box-active";
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      event.target.style.backgroundColor = "#" + randomColor;
    };
    container.appendChild(etchBox);
  }
};

const createNewGrid = function () {
  let newGridSize = Number(
    prompt("How big do you want the grid? (From 10 to 100).")
  );

  if (newGridSize >= 10 && newGridSize <= 100) {
    for (let i = 0; i < gridSize * gridSize; i++) {
      container.removeChild(container.lastChild);
    }
    gridSize = newGridSize;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    createGrid();
  } else {
    alert("Invalid Grid Size. Please Enter a Valid Grid Size");
    createNewGrid();
  }
};

// Other

newGridbtn.onclick = () => {
  createNewGrid();
};

createGrid();
