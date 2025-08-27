const gridContainer = document.querySelector("#grid-container");
console.log(gridContainer.clientWidth)

function createGrid(squares) {
    for(let i = 0; i < squares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < squares; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = getRandomHexColor()
            cell.style.opacity = 0.1;
            cell.addEventListener("mouseenter", (e) => {
                if (e.target.style.opacity < 1) {
                    e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
                }
            });
            cell.addEventListener("mouseleave", () => {
                // cell.classList.toggle("highlighted-cell");
            });
            row.appendChild(cell);
        }
        gridContainer.appendChild(row)
    }
}

function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (which is FFFFFF in hexadecimal)
  const randomColor = Math.floor(Math.random() * 16777215);
  let hexColor = randomColor.toString(16);
  hexColor = hexColor.padStart(6, '0');
  return `#${hexColor}`;
}

createGrid(16);
const changeGridButton = document.querySelector("#change-grid-button");
changeGridButton.addEventListener("click", () => {
    let number =  prompt("Number of Squares per side? (Max 100)");
    if (number > 100 || number < 2 || isNaN(number)) {
        alert("Invalid input!");
        return;
    }

    while (gridContainer.childElementCount > 0) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(number);
});