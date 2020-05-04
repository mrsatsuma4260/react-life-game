import React from 'react';
import './App.css';

import Header from './components/header/Header.jsx'
import Toolbar from './components/toolbar/Toolbar.jsx'
import Board from './components/board/Board.jsx'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Board />
      <Toolbar />
    </div>
  );
}

export default App;
