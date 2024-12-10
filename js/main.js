import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

// start a new game
document.querySelector(".restart").addEventListener("click", () => {
  onRestartClick();
});

// handle tile clicks
let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(index) {
  game.makeMove(index);
  gameView.updateBoard(game);
}

function onRestartClick() {
  game = new Game();
  gameView.updateBoard(game);
}

gameView.updateBoard(game);
