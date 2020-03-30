import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var welcome = 'Welcome to the Road to learn React!'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {welcome}
        </p>
        <a
          className="App-link"
          href="http://subalp.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Page
        </a>
      </header>
    </div>
  );
}

export default App;
