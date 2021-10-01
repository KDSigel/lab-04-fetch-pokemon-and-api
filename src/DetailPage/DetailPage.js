import React, { Component } from 'react';
import request from 'superagent';
import './Detail.css';
import DetailPagePoke from './DetailPagePoke.js';
import Header from '../Header/Header';
import Legend from '../ListPage/Legend.js';

// In render, either render a loading spinner 
// or the Pokemon data depending the loading state.

export default class PokemonDetail extends Component {

    state = {
        pokemon: {},
        isLoading: false
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
        this.setState({ 
            pokemon: response.body,
            isLoading: false
        })
    }

    render() {
        console.log(this.state.pokemon, 'hi')
        return (
            <>
            <div>
            <Header />
            <Legend />
            </div>
                            
                {this.state.isLoading
                    ? <h2>LOADING</h2>
                    : <div className='individualPoke'>
                        <DetailPagePoke {...this.state.pokemon} />
                    </div>
                }
            </>
        )
    }
}
