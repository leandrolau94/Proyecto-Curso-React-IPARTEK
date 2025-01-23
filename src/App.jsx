import { useState } from 'react';
import './App.css'
import AddTeam from './components/AddTeam';

function App() {

  const [temas, setTemas] = useState(["flores", "dinosaurios"]);
  const [newTema, setNewTema] = useState("");

  const onAddTeam = (e) => {
    setTemas([...temas, newTema]);
  };

  const onDinamicChange = (e) => {
    setNewTema(e.target.value)
  };

  return (
    <>
      <h1>Galeria de Imagenes</h1>
      <AddTeam onDinamicChange={onDinamicChange} newTema={newTema}/>
      <ol>
        {temas.map((tema) => {
          return (
            <li key={tema}>{tema}</li>
          )
        })}
      </ol>
      <button onClick={onAddTeam}>Añadir tema</button>
    </>
  )
}

export default App;
