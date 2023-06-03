import './App.css';
import react, { Component } from 'react';
import Header from './component/Header.js';
import Content from './component/Сontent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-content">
       <Content />
      </div>
    </div>
  );
}

export default App;
