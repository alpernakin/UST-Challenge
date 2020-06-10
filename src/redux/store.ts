import { configureStore, combineReducers } from "@reduxjs/toolkit";
import actualReducer from './pokemon.actual.slice';
import historyReducer from './pokemon.history.slice';
import detailsReducer, { PokemonSelectionItem } from './pokemon.details.slice';
import { PokemonListItem } from "../types/pokemon";

export default configureStore({
    reducer: combineReducers({
        actual: actualReducer,
        history: historyReducer,
        details: detailsReducer
    })
});

export interface State {
    actual: PokemonListItem[];
    history: PokemonListItem[];
    details: PokemonSelectionItem[];
}