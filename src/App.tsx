import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://github.com/login/device/code', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'https://robertlude.github.io/test'
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
      <a href="https://github.com/login/oauth/authorize?client_id=Iv23ctSG8C0iaSaB8a6Y">Login with GitHub</a>
    </div>
  );
}

export default App;
