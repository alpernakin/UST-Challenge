import React from 'react';
import { connect } from 'react-redux';
import { PokemonListItem } from '../../types/pokemon';
import { PokemonList } from '../pokemon-list/pokemon.list';
import { fetchPokemonDetailsIfNeeded } from '../../functions/pokemon.functions';
import { State } from '../../redux/store';

const HistoricalPokemons = (props: { items: PokemonListItem[] }) => (
    <PokemonList title="History" items={props.items}
        onItemClick={item => fetchPokemonDetailsIfNeeded(item)} />
);

const mapStateToProps = (state: State) => {
    return {
        items: [...state.history]
    };
}

export default connect(mapStateToProps)(HistoricalPokemons);