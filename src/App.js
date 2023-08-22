import React from 'react';
import './App.css';
import Pokedex from "./Pokedex.js";
import pokemons from "./pokemons.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
     <Pokedex pokemons={pokemons} /> 
    </div>
  );
}

export default App;
