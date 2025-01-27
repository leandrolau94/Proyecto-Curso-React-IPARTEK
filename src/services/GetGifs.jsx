import React from 'react'

const GetGifs = async (tema) => {

    const apiKey = "K3a9lNKChVgE761KG4BwtcSgruqCroCW";
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${tema}&limit=10`;

    const res = await fetch(url);

    const {data} = await res.json();

    //console.log(data);

    const gifs = data.map((gif) => {
        return (
            {
                id: gif.id,
                title: gif.title,
                imageUrl: gif.images.downsized_medium.url,
            }
        )
    })

    //console.log(gifs);

    return gifs;
  };

export default GetGifs;