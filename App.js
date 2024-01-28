import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail";
import './App.css';
  

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    async function createPokemonObject(result) {
      const pokemonArray = await Promise.all(result.map(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        return data;
      }));

      setAllPokemons((currentList) => [...currentList, ...pokemonArray]);
    }

    createPokemonObject(data.results);
  };


  useEffect(() => {
    getAllPokemons();
  },[]);


  return (
    <div className="app-container">
      <h1>Pokemon Kingdom</h1>

      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, index) => (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              height={pokemon.height}
              weight={pokemon.weight}
              stat1={pokemon.stats[0].stat.name}
              stat2={pokemon.stats[1].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>
          More Pokemons
        </button>
        
      </div>
    </div>
  );
}

export default App;
