import { useState } from 'react';
import './App.css'

function App() {

  const [temas, setTemas] = useState(["flores", "dinosaurios"]);

  return (
    <>
      <h1>Galeria de Imagenes</h1>
      <input type='text' placeholder='tap to search...'/>
    </>
  )
}

export default App;
