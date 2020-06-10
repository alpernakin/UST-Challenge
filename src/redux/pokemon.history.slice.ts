import { createSlice } from '@reduxjs/toolkit';
import { storageService, Keys } from '../services/storage.service';
import { PokemonListItem } from '../types/pokemon';

const pokemonHistorySlice = createSlice({
    name: 'pokemon.history',
    initialState: storageService.getItem<PokemonListItem[]>(Keys.PokemonHistory) || [],
    // The reducers are paired with the actions through toolkit
    reducers: {
        add: (state: PokemonListItem[], action: { type: string, payload: PokemonListItem }) => {
            let nextState = [...state];
            const newItem = { ...action.payload };
            nextState.splice(0, 0, newItem);
            // if the number of item is over 5
            if (nextState.length > 5)
                // then reduce by one
                nextState.pop();
            // then cache
            storageService.setItem(Keys.PokemonHistory, nextState);

            return nextState;
        }
    }
});

export const { add: addPokemonHistory } = pokemonHistorySlice.actions;
export default pokemonHistorySlice.reducer;