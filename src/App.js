
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}*/

// App.js
import React from 'react';
import Header from './Header'; // Supondo que você tenha este componente
import MainContent from './MainContent'; // Importe o componente MainContent
import Footer from './Footer'; // E um componente Footer, por exemplo
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent /> {/* Aqui você usa o componente MainContent */}      
      <Footer />          
    </div>
  );
}

export default App;
