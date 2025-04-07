import React, { useEffect /*, useState */ } from 'react';
import './App.css';

async function getData(code: string) {
  const token = await fetch(
    'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'https://robertlude.github.io'
      },
      body: JSON.stringify({
        client_id: 'Iv23ctSG8C0iaSaB8a6Y',
        code: code,
      }),
    }
  ).then(response => response.json())
  
  console.log({token})


  // const response = await fetch('https://api.github.com/repos/robertlude/test/contents/package.json', {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': `Bearer ${token}`,
  //   },
  // })

  // return response.json()

  return {}
}

function App() {
  const code = new URLSearchParams(window.location.search).get('code')
  //const [contents, setContents] = useState<string>(null)

  useEffect(() => {
    if (!code) return

    getData(code).then(data => console.log(data))
  }, [code])
  
  return (
    <div className="App">
      <a href="https://github.com/login/oauth/authorize?client_id=Iv23ctSG8C0iaSaB8a6Y">Login with GitHub</a>
    </div>
  );
}

export default App;
