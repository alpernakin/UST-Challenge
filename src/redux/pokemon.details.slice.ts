import { createSlice } from '@reduxjs/toolkit';
import { storageService, Keys } from '../services/storage.service';
import { PokemonDetailItem } from '../types/pokemon';

export interface PokemonSelectionItem {
    item: PokemonDetailItem;
    isSelected: boolean;
}

const pokemonDetailsSlice = createSlice({
    name: 'pokemon.details',
    initialState: storageService.getItem<PokemonSelectionItem[]>(Keys.PokemonDetails) || [],
    // The reducers are paired with the actions through toolkit
    reducers: {
        select: (state: PokemonSelectionItem[], action: { type: string, payload: PokemonDetailItem }) => {
            const nextState = [...state];
            // reset the selection
            for (let i = 0; i < nextState.length; i++)
                nextState[i] = {
                    item: { ...nextState[i].item },
                    isSelected: false
                };
            // new selected item
            const newSelection = {
                item: { ...action.payload },
                isSelected: true
            };
            // find out the item int the list
            const index = nextState.findIndex(x => x.item.name === action.payload.name);
            if (index === -1)
                nextState.push(newSelection);
            else
                nextState[index] = newSelection;
                
            // then cache
            storageService.setItem(Keys.PokemonDetails, nextState);

            return nextState;
        }
    }
});

export const { select: selectPokemonDetails } = pokemonDetailsSlice.actions;
export default pokemonDetailsSlice.reducer;