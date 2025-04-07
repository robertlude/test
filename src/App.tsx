import React, { useEffect /*, useState */ } from 'react';
import './App.css';

function App() {
  const code = new URLSearchParams(window.location.search).get('code')
  //const [contents, setContents] = useState<string>(null)

  useEffect(() => {
    if (!code) return

    fetch('/repos/robertlude/test/contents/package.json', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${code}`,
      },
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }, [code])
  
  return (
    <div className="App">
      <a href="https://github.com/login/oauth/authorize?client_id=Iv23ctSG8C0iaSaB8a6Y">Login with GitHub</a>
    </div>
  );
}

export default App;
