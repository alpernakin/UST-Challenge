import { PokemonListItem, PokemonDetailItem } from "../types/pokemon";
import { pokemonService } from "../services/pokemon.service";
import { addPokemons } from '../redux/pokemon.actual.slice'
import { selectPokemonDetails } from "../redux/pokemon.details.slice";
import store from '../redux/store';
import { addPokemonHistory } from "../redux/pokemon.history.slice";

export const fetchPokemonsIfNeeded = async (): Promise<PokemonListItem[]> => {
    return new Promise<PokemonListItem[]>(async (resolve, reject) => {
        const current = store.getState().actual;
        // if no data exists in the store
        if (!current || !current.length) {
            // then fetch new from the service
            const pokemons = await pokemonService.getPokemons();
            store.dispatch(addPokemons(pokemons));
            resolve(pokemons);
        }
        else
            resolve(current);
    });
}

export const fetchPokemonDetailsIfNeeded = async (pokemon: PokemonListItem): Promise<PokemonDetailItem> => {
    return new Promise<PokemonDetailItem>(async (resolve, reject) => {
        const index = store.getState().details.findIndex(x => x.item.name === pokemon.name);
        let newSelection: PokemonDetailItem;
        // if no data exists in the store
        if (index === -1)
            // then fetch new from the service
            newSelection = await pokemonService.getPokemonDetails(pokemon.url);
        else
            // then use the cache data
            newSelection = store.getState().details[index].item;
        // add in the historical list
        store.dispatch(addPokemonHistory(pokemon));
        store.dispatch(selectPokemonDetails(newSelection));
        resolve(newSelection);
    });
}