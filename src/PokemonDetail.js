import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './PokeItem'
import './Detail.css';
import DetailPokeItem from './DetailPokeItem'
import Header from './Header'


// On the detail page, get the pokemon id from the query params.
// In componentDidMount, fetch that pokemon by id and put that data in state
// In render, either render a loading spinner or the Pokemon data depending the loading state.

export default class PokemonDetail extends Component {

    state = {
        pokemon: {}
    }

    componentDidMount = async () => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)

        this.setState({ pokemon: response.body })
    }

    render() {
        return (
            <>
            <Header />
            <div className='individualPoke'>
                <DetailPokeItem {...this.state.pokemon}
                />
            </div>
            </>
        )
    }
}
