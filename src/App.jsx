import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test'

const URL = 'https://api.disneyapi.dev/character';

function App() {
  
  const [characters, setCharacters] = useState([]) // 1. State for data
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 2. Fetch data when component mounts
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.data)
        setLoading(false)
      }) // 3. Update state with fetched data
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <h1>Disney Characters</h1>
      {loading ? <p>Loading...</p> : (
        <ol>
          {characters.map(character => (
            <li key={character._id}>{character.name}</li>
          ))}
        </ol>
      )}
    </>
  )
}

export default App
