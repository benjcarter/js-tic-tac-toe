export default class Game {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    if (this.turn === "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }

  makeMove(i) {
    if (this.endOfGame() || this.board[i]) return;

    this.board[i] = this.turn; // X or O

    let winningCombination = this.findWinningCombinations();

    if (!winningCombination) {
      this.nextTurn();
    }
  }

  findWinningCombinations() {
    const winningCombinations = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        this.board[a] && // a is not numm
        this.board[a] === this.board[b] && // a is equal to b
        this.board[a] === this.board[c] // and a is equal to c
      ) {
        return combination;
      }
    }

    return null;
  }

  endOfGame() {
    let winningCombination = this.findWinningCombinations();

    if (winningCombination) {
      return true;
    } else {
      return false;
    }
  }
}
