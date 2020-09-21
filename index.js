//define world
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const resolution = 10;
canvas.width = 800;
canvas.height = 800;

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;


//build the grid
let grid = buildGrid();

//render world on the canvas element
requestAnimationFrame(update);

// window.onload()
//game play
//buttons

