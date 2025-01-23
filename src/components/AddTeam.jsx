import React from 'react'

const AddTeam = ({onDinamicChange, newTema}) => {

    const onEnviar = (e) => {
        e.preventDefault();// evita que la pagina se refresque
    };

  return (
    <form onSubmit={(e) => {onEnviar(e)}}>
        <input type='text' placeholder='tap to add
        ...' value={newTema} onChange={onDinamicChange}/>
    </form>
  )
}

export default AddTeam;