import React from 'react';
import Pokecard from "./Pokecard";

const Pokedex = ({pokemons}) => {
    return (
      <div className='Pokedex'>
        {pokemons.map(p => <Pokecard 
            key = {p.id}
            pokemonName = {p.name}
            img = {p.img}
            type = {p.type}
            exp = {p.base_experience}
            />
    )}
      </div>
  )
}


export default Pokedex;