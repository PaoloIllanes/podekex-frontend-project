import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loading, pokemon } from '../store/counter/pokedexSlice'
import Pokecard from'./PokeCard'

export function Pokedex() {
  const poke = useSelector((state) =>state.pokemon.pokemon);
  const dispatch = useDispatch()

  return (
    <>
    <div>
        <button
          aria-label="setPokemon"
          onClick={dispatch(pokemon())}
        >  
          set pokemon
        </button>
    </div>
        <div><Pokecard idPokemon={poke}></Pokecard></div>
        </> 
    
  )
}