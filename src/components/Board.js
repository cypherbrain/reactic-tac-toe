import '../style/Board.css';
import React from 'react';
import Square from './Square';
import GameMessage from './GameMessage';

class Board extends React.Component {
  constructor(props) {
    super(props);

    // Keeps track of each square's player move using a 2d array
    this.state = {
      moves: ['', '', '', '', '', '', '', '', ''],
      curPlayer: 1,
      isGameOver: false,
      isStalemate: false
    };
  }

  swapPlayer() {
    // Using truthiness
    if (this.state.curPlayer) {
      this.setState({ curPlayer: 0 });
    } else {
      this.setState({ curPlayer: 1 });
    }
  }

  updateMove = id => {
    // Exit early if the game is over
    if (this.state.isGameOver) {
      return;
    }

    let newArray = this.state.moves;
    if (newArray[id] === '') {
      // Add the move to the board
      if (this.state.curPlayer === 1) {
        newArray[id] = 'X';
      } else {
        newArray[id] = 'O';
      }
      this.setState({ moves: newArray });

      // Check for game over
      if (this.isGameOver()) {
        this.setState({ isGameOver: true });
      } else {
        // The game is ongoing, swap player
        this.swapPlayer();
      }
    }
  };

  render() {
    const squares = this.state.moves.map((move, index) => {
      return (
        <Square key={index} id={index} move={move} onClick={this.updateMove} />
      );
    });
    return (
      <div className="game">
        <GameMessage
          curPlayer={this.state.curPlayer}
          gameOver={this.state.isGameOver}
          stalemate={this.state.isStalemate}
        />
        <div className="board">{squares}</div>
        <button id="resetButton" onClick={this.resetGame}>
          Reset
        </button>
      </div>
    );
  }

  isGameOver() {
    const board = this.state.moves;
    // Check rows
    for (let i = 0; i < 7; i += 3) {
      if (
        board[i] !== '' &&
        board[i] === board[i + 1] &&
        board[i + 1] === board[i + 2]
      ) {
        console.log('game over bois');
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i] !== '' &&
        board[i] === board[i + 3] &&
        board[i + 3] === board[i + 6]
      ) {
        console.log('game over bois');
        return true;
      }
    }

    // Check left to right diagonal
    let i = 0;
    if (
      board[i] !== '' &&
      board[i] === board[i + 4] &&
      board[i + 4] === board[i + 8]
    ) {
      console.log('game over bois');
      return true;
    }

    // Check right to left diagonal
    i = 2;
    if (
      board[i] !== '' &&
      board[i] === board[i + 2] &&
      board[i + 2] === board[i + 4]
    ) {
      console.log('game over bois');
      return true;
    }

    // Check for stalemate
    for (let i = 0; i < 9; i++) {
      if (board[i] === '') {
        return false;
      }
    }
    this.setState({ isStalemate: true });
    return true;
  }

  resetGame = () => {
    // Keeps track of each square's player move using a 2d array
    this.setState({
      moves: ['', '', '', '', '', '', '', '', ''],
      curPlayer: 1,
      isGameOver: false,
      isStalemate: false
    });
  };
}

export default Board;
