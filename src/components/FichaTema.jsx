import React, { useEffect, useState } from 'react';
//import { useEffect } from 'react';
import GetGifs from '../services/GetGifs';

const FichaTema = ({tema}) => {

  const [imagenes, setImagenes] = useState([]);

  // Se crea el metodo async getLosGifs fuera de useEffect porque
  // dentro no puede haber metodos async, luego se llama dentro
  const getLosGifs = async () => {
    const losGifs = await GetGifs(tema);
    setImagenes(losGifs);
  };

  useEffect( () => {
    getLosGifs();
  }, []);

  console.log(imagenes);

  return (
    <>
      <h2>{tema}</h2>

      {
        imagenes.map((img) => {
          return(
            <div key={img.id}>
              {img.title}
            </div>
          )
        })
      }
    </>
  )
}

export default FichaTema