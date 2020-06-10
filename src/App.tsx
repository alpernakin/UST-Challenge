import React, { Component } from 'react';
import './App.css';
import PokemonNavigation from './components/pokemon-navigation/pokemon.navigation';

export default class App extends Component<{}, {}> {

    render() {

        return (
            <div className="app">
                <PokemonNavigation />
            </div>
        );
    }
}