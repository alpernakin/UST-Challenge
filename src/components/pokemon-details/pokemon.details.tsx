import React from 'react';
import { PokemonDetailItem } from '../../types/pokemon';

export const PokemonDetails = (props: { item?: PokemonDetailItem }) => (
    <div className="pokemon-details-container">
        {
            typeof props.item !== 'undefined' ?
                <div>
                    <div className="row">
                        {props.item?.id}
                    </div>
                    <div className="row">
                        {props.item?.name}
                    </div>
                    <div className="row">
                        {props.item?.baseExp}
                    </div>
                    <div className="row">
                        {props.item?.height}
                    </div>
                </div>
                :
                <div>No selection</div>
        }
    </div>
);