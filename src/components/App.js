import '../style/App.css';
import React from 'react';
import Board from './Board';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="ui container title">
          <h1>Reactic-Tac-Toe</h1>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
