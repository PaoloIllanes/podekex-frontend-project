import { createSlice } from '@reduxjs/toolkit'
const initialState = {
 isLoading:true,
 pokemon:1
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading=!state.isLoading;
    },
    pokemon: (state) => {
      state.pokemon+=1 ;
    }
  },
});
export const { loading, pokemon } = pokedexSlice.actions

export default pokedexSlice.reducer