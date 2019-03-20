import React from 'react';

const GameMessage = props => {
  let message = '';

  if (props.stalemate) {
    message = 'Stalemate!';
  } else if (props.curPlayer === 1 && !props.gameOver) {
    message = "X's turn!";
  } else if (props.curPlayer === 0 && !props.gameOver) {
    message = "O's turn!";
  } else if (props.curPlayer === 1 && props.gameOver) {
    message = 'X won!';
  } else if (props.curPlayer === 0 && props.gameOver) {
    message = 'O won!';
  }

  return <h2>{message}</h2>;
};

export default GameMessage;
