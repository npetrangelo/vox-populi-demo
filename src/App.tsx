import React from 'react';
import logo from './logo.svg';
import './App.css';
import VotingStation from "./VotingStation";
import ResultsViewer from "./ResultsViewer";

function App() {
  return (
    <div className="App">
      <ResultsViewer />
      <VotingStation voter="Alice"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
