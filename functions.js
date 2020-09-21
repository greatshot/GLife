// builds a 2d array with cell objects set at "dead" state
function buildGrid() {
    return new Array(COLS).fill(null)
    .map(() => new Array(ROWS).fill(null)
    .map(() => new Cell()))
}


function nextGen(grid) {
    // copy the current rendering of the grid to a new 2d array
    const currentGen = grid.map(arr => arr.map(cell => cell.currentstate));

    // record the total value of neighboring cells in numNeighnours
    for (let col = 0; col < currentGen.length; col++) {
        for (let row = 0; row < currentGen[col].length; row++) {
          const cell = currentGen[col][row];
          let numNeighbours = 0;
          for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
              if (i === 0 && j === 0) {
                continue;
              }
              const x_cell = col + i;
              const y_cell = row + j;

              // accounts for edges of the canvas, no value added if a neighbor doesn't exist
              if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
                const currentNeighbour = currentGen[col + i][row + j];
                numNeighbours += currentNeighbour;
              }
            }
          }

          // apply game of life rules to cell object. cell state is dead(0) or alive (1).
          if (cell === 1 && numNeighbours < 2) {
            grid[col][row].setState(0);
          } else if (cell === 1 && numNeighbours > 3) {
            grid[col][row].setState(0);
          } else if (cell === 0 && numNeighbours === 3) {
            grid[col][row].setState(1);
          } else {
            grid[col][row].setState(grid[col][row].currentstate);
          }
        }
      }

      // return the copy with changed states for cells
      return grid;
}


function render(grid) {
    // determine the time alive for a cell
    let maxTotal = 0;
    for (let col = 0; col < grid.length; col++) {
        for (let row =  0; row < grid[col].length; row++) {
            const cell = grid[col][row];
            if (cell.total > maxTotal) {
                maxTotal = cell.total;
            }
        }
    }
    // make a cell with color adjusted to reflect the time alive using 'hsl' fillstyle
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];
    
          ctx.beginPath();
          ctx.rect(col * resolution, row * resolution, resolution, resolution);
          const normalised = cell.total / maxTotal;
          const h = (1.0 - normalised) * 240
          ctx.fillStyle = `hsl(${h}, 100%, 50%)`;
          ctx.fill();
          // ctx.stroke();
        }
      }

}


function update() {
    grid = nextGen(grid);
    render(grid);
    requestAnimationFrame(update);
}