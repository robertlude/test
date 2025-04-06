import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://github.com/login/device/code', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'https://robertlude.github.io'
      },
      body: JSON.stringify({
        client_id: 'Ov23liuBOJUWyhNPf1rb',
        scope: 'user:email'
      })
    })
    .then(response => response.json())
    .then(data => console.log({data}))
  }, [])
  
  return (
    <div className="App">
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
