import React from 'react';
import { PokemonListItem } from "../../types/pokemon";

interface Props {
    items: PokemonListItem[];
    title: string;
    onItemClick: (item: PokemonListItem) => void;
}

export const PokemonList = (props: Props) => (
    <div className="pokemon-list-container">
        <div>
            {props.title}
        </div>
        {
            typeof props.items !== 'undefined' &&
            props.items.map((item, index) => (
                <div className="pokemon-list-item" key={index} onClick={_ => props.onItemClick(item)}>
                    {item.name}
                </div>
            ))
        }
    </div>
);