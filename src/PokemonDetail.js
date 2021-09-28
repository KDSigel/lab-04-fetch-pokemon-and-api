import React, { Component } from 'react'
import request from 'superagent'
// import PokeItem from './PokeItem'
import './Detail.css';
import DetailPokeItem from './DetailPokeItem'
import Header from './Header'

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
        return (
            <>
            <Header />
                {this.state.isLoading
                    ? <img src='3753264_170x100.gif' alt='page loading' />
                    : <div className='individualPoke'>
                        <DetailPokeItem {...this.state.pokemon} />
                    </div>
                }
            </>
        )
    }
}
