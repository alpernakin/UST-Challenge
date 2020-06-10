import React, { Component } from 'react';
import AllPokemons from './all-pokemons';
import HistoricalPokemons from './historical-pokemons';
import SelectedPokemon from './selected-pokemon';
import { fetchPokemonsIfNeeded } from '../../functions/pokemon.functions';
import './navigation.scss';

export default class PokemonNavigation extends Component {

    componentDidMount() {
        fetchPokemonsIfNeeded();
    }

    render() {
        return (
            <div className="pokemon-list-navigation">
                <AllPokemons />
                <HistoricalPokemons />
                <SelectedPokemon />
            </div>
        );
    }
}