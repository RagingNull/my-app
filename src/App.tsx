import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Accordion from './components/accordion';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Accordion />
       
      </header>
    </div>
  );
}

export default App;
