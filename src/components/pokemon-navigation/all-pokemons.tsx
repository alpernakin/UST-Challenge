import React from 'react';
import { connect } from 'react-redux';
import { PokemonListItem } from '../../types/pokemon';
import { PokemonList } from '../pokemon-list/pokemon.list';
import { fetchPokemonDetailsIfNeeded } from '../../functions/pokemon.functions';
import { State } from '../../redux/store';

const AllPokemons = (props: { items: PokemonListItem[] }) => (
    <PokemonList title="All Pokemons" items={props.items}
        onItemClick={item => fetchPokemonDetailsIfNeeded(item)} />
);

const mapStateToProps = (state: State) => {
    return {
        items: [...state.actual]
    };
}

export default connect(mapStateToProps)(AllPokemons);