import { useState } from 'react';
import './App.css'
import AddTeam from './components/AddTeam';
import FichaTema from './components/FichaTema';

function App() {

  const [temas, setTemas] = useState([]);
  const [newTema, setNewTema] = useState("");

  const onAddTeam = (e) => {
    if (newTema.trim().length <= 1) {return};// para que no permita añadir temas vacios ni solamente con 1 letra
    setTemas([...temas, newTema]);
    setNewTema("");
  };

  const onDinamicChange = (e) => {
    setNewTema(e.target.value)
  };

  return (
    <>
      <h1>Galeria de Imagenes</h1>
      <AddTeam onDinamicChange={onDinamicChange} newTema={newTema}/>
      {temas.map((tema, index) => {
        return (
          <FichaTema key={index} titulo={tema} />
        )
      })}
      <button onClick={onAddTeam}>Añadir tema</button>
    </>
  )
}

export default App;
