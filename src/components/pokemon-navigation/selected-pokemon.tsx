import React from 'react';
import { connect } from 'react-redux';
import { PokemonDetailItem } from '../../types/pokemon';
import { State } from '../../redux/store';
import { PokemonDetails } from '../pokemon-details/pokemon.details'

const SelectedPokemon = (props: { item?: PokemonDetailItem }) => (
    <PokemonDetails item={props.item} />
);

const mapStateToProps = (state: State) => {
    console.log(state.details);
    return {
        item: state.details?.find(x => x.isSelected === true)?.item
    };
}

export default connect(mapStateToProps)(SelectedPokemon);