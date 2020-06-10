import { createSlice } from '@reduxjs/toolkit';
import { storageService, Keys } from '../services/storage.service';
import { PokemonListItem } from '../types/pokemon';

const pokemonActualSlice = createSlice({
    name: 'pokemon.actual',
    initialState: storageService.getItem<PokemonListItem[]>(Keys.PokemonActual) || [],
    // The reducers are paired with the actions through toolkit
    reducers: {
        add: (state: PokemonListItem[], action: { type: string, payload: PokemonListItem[] }) => {
            const nextState = [...state];
            // override matching items
            action.payload.forEach(item => {
                const index = nextState.findIndex(x => x.name === item.name);
                const newItem = { ...item };
                // if the item is not current
                if (index === -1)
                    nextState.push(newItem);
                // if the item is already in the state
                else
                    nextState[index] = newItem;
            });
            // then cache
            storageService.setItem(Keys.PokemonActual, nextState);

            return nextState;
        }
    }
});
export const { add: addPokemons } = pokemonActualSlice.actions;
export default pokemonActualSlice.reducer;