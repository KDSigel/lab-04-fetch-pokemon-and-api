import React, { Component } from 'react'
import PokeItem from './PokeItem'

export default class PokeList extends Component {
    render() {
        return (
            <ul>
                {this.props.pokes.map((poke) => {
                    return (
                <PokeItem 
                key={poke.pokemon}
                url_image={poke.url_image}
                pokemon={poke.pokemon}
                egg_group_1={poke.egg_group_1}
                />
                    )
                }
                )}
            </ul>
        )
    }
}
